import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

// Controlled component
export function CreateContentModel({ open, onClose }) {
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
              <Input placeholder="Title" />
              <Input placeholder="Link" />
            </div>

            <div className="flex justify-center mt-4">
              <Button variant="primary" text="Submit" size="md" />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

