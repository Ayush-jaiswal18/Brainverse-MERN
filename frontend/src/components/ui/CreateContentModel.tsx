import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../../config"
import axios from "axios";

const enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}

export function CreateContentModel({ open, onClose }) {

  const titleRef = useRef<HTMLInputElement | null>(null);
  const linkRef = useRef<HTMLInputElement | null>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
    }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })

    onClose();
  }



  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/18 backdrop-blur-md flex items-center justify-center">
          <div className="bg-white opacity-100 p-4 rounded-xl w-[350px] ">

            <div className="flex justify-end mb-2">
              <div onClick={onClose} className="cursor-pointer hover:border rounded">
                <CrossIcon size="md" />
              </div>
            </div>

            <div>
              <Input ref={titleRef} placeholder="Title" />
              <Input ref={linkRef} placeholder="Link" />
            </div>

            <div>
              <h1>Type:</h1>
              <div className="flex gap-2 justify-center">
                <Button
                  text="Youtube"
                  size="md"
                  variant={type === ContentType.Youtube ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Youtube)}
                />
                <Button
                  size="md"
                  text="Twitter"
                  variant={type === ContentType.Twitter ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Twitter)}
                />
              </div>
            </div>

            <div className=""></div>

            <div className="flex justify-center mt-4">
              <Button onClick={addContent} variant="primary" text="Submit" size="md" />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
