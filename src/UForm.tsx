import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters." }),
    age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});

type FormData = z.infer<typeof schema>;

export const UForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-72 m-10 flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
                <label htmlFor="name" className="text-xs font-medium text-gray-900">
                    Name:
                </label>
                <input
                    {...register("name", {
                        required: true,
                        minLength: 3,
                    })}
                    name="name"
                    autoComplete="off"
                    placeholder="Enter your name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.name && <p className="text-red-700 text-xs">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-y-1">
                <label htmlFor="age" className="text-xs font-medium text-gray-900">
                    Age:
                </label>
                <input
                    {...register("age", { valueAsNumber: true })}
                    name="age"
                    type="number"
                    autoComplete="off"
                    placeholder="Enter your age"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.age && <p className="text-red-700 text-xs">{errors.age.message}</p>}
            </div>

            <button
                type="submit"
                disabled={!isValid}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Submit
            </button>
        </form>
    );
};
