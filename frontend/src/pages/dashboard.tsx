import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from '../components/ui/Card'
import { CreateContentModel } from "../components/ui/CreateContentModel";
import { Sidebar } from "../components/ui/Sidebar";
import { useState } from "react";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return <div>

    <Sidebar />

    <div className="p-4 ml-72 min-h-screen bg-brandGray-100">
      <CreateContentModel open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className="flex justify-end gap-4">
        <Button onClick={() => {
          setModalOpen(true)
        }} variant="primary" startIcon={<PlusIcon size="lg" />} size="md" text="Add content" />
        <Button variant="secondary" endIcon={<ShareIcon size="md" />} size="md" text="Share Brain" />
      </div>

      <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/javascript_fan/status/1988170333153841236?s=20" title="First tweet" />
        <Card type="youtube" link="https://youtu.be/3j8JLXDRf1c?si=gl9Okx7QoTZnvSLY" title="First video" />
      </div>
    </div>
  </div>
}

export default Dashboard;
