import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Card } from './components/ui/Card'

function App() {
  return (
    <div className="p-4 space-x-4">
      <div className="flex justify-end gap-4">
      <Button startIcon={<PlusIcon size="lg" />} size="md" variant="primary" text="Add content" />
      <Button endIcon={<ShareIcon size="md" />} size="md" variant="secondary" text="Share Brain" />
      </div>

      <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/javascript_fan/status/1988170333153841236?s=20" title="First tweet" />
        <Card type="youtube" link="https://youtu.be/3j8JLXDRf1c?si=gl9Okx7QoTZnvSLY" title="First video" />
      </div>
    </div>
  );
}

export default App;
