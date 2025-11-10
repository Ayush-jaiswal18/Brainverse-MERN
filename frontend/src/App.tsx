import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="p-4 space-x-4">
      <Button startIcon={<PlusIcon size="lg" />} size="sm" variant="primary" text="Add content" endIcon={<ShareIcon size="lg" />}/>
      <Button startIcon={<PlusIcon size="md" />} size="md" variant="secondary" text="Add content" />
      <Button size="lg" variant="secondary" text="Add content" />
    </div>
  );
}

export default App;
