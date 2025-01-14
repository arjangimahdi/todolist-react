import { UButton } from "./components/UButton";
import { UListGroup } from "./components/UListGroup";

function App() {
    const cities = ["New York", "Tokyo", "Tehran", "Moscow"];
    return (
        <div className="p-2 flex flex-col gap-y-4">
            <UButton color="blue" onClick={() => console.log("Hello World!")}>
                Button
            </UButton>
            <UListGroup items={cities} />
        </div>
    );
}
export default App;
