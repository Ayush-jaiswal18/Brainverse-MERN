import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function Signup() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-2xs min-w-48 p-8">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button variant="primary" text="Signup" size="md" fullWidth={true} loading={false} />
            </div>
        </div>
    </div>
}