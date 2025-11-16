import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from '../components/ui/Card'
import { CreateContentModel } from "../components/ui/CreateContentModel";
import { Sidebar } from "../components/ui/Sidebar";
import { useEffect, useState } from "react";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  return <div>
    <Sidebar />

    <div className="p-4 ml-72 min-h-screen bg-brandGray-100">
      <CreateContentModel open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />

      <div className="flex justify-end gap-4">
        <Button
          onClick={() => {
            setModalOpen(true)
          }}
          variant="primary"
          startIcon={<PlusIcon size="lg" />}
          size="md"
          text="Add content"
        />
        <Button
          onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share/`, {
              share: true
            }, {
              headers: {
                "Authorization": localStorage.getItem("token")
              }
            })
            const ShareUrl = `http://localhost:5173/share/${response.data.hash}`
            alert(ShareUrl)

          }}
          variant="secondary"
          endIcon={<ShareIcon size="md" />}
          size="md"
          text="Share Brain"
        />
      </div>

      <div className="flex gap-4 flex-wrap">
        {contents.map(({ type, link, title }) => (
          <Card
            type={type}
            link={link}
            title={title}
          />
        ))}
      </div>
    </div>
  </div>
}

export default Dashboard;
