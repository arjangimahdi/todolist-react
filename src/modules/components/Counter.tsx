import { Button } from "@headlessui/react";
import useCounterStore from "../store";

const Counter = () => {
    const { counter, increment, reset } = useCounterStore();
    return (
        <div className="flex flex-row gap-x-4 items-center">
            <p>Counts: ({counter})</p>
            <Button
                onClick={increment}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Increment
            </Button>
            <Button
                onClick={reset}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Reset
            </Button>
        </div>
    );
};

export default Counter;
