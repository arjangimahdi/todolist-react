import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
    description: z
        .string()
        .min(3, { message: "Description should be at least 3 characters." })
        .max(50, { message: "Description should not exceed 50 characters." }),
    amount: z
        .number({ invalid_type_error: "Amount field is required" })
        .min(0.01, { message: "Amount must be at least $0.01." })
        .max(10_000, { message: "Amount must not exceed $10,000." }),
    category: z.enum(categories, {
        errorMap: () => ({ message: "Category must be one of the predefined options." }),
    }),
});

type ExpensesFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpensesFormData) => void;
}

export const ExpensesForm = ({ onSubmit }: Props) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ExpensesFormData>({
        resolver: zodResolver(schema),
    });
    return (
        <form
            className="p-6 bg-white shadow-md rounded-md space-y-4"
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset();
            })}
        >
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <input
                    {...register("description")}
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Enter a description"
                    className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.description && <p className="text-red-700 text-xs">{errors.description.message}</p>}
            </div>

            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Amount
                </label>
                <input
                    {...register("amount", {
                        valueAsNumber: true,
                    })}
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Enter an amount"
                    className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.amount && <p className="text-red-700 text-xs">{errors.amount.message}</p>}
            </div>

            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                </label>
                <select
                    {...register("category")}
                    id="category"
                    name="category"
                    className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value=""></option>
                    {categories.map((category) => {
                        return (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        );
                    })}
                </select>
                {errors.category && <p className="text-red-700 text-xs">{errors.category.message}</p>}
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};
