import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <div className="p-4 space-x-4">
      <Button startIcon={<PlusIcon />} size="sm" variant="primary" text="Add content" />
      <Button size="md" variant="secondary" text="Add content" />
      <Button size="lg" variant="secondary" text="Add content" />
    </div>
  );
}

export default App;
