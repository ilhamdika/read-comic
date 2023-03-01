import Authenticated from "@/Layouts/Authenticated/Index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CategoryAdd() {
    return(
        <Authenticated>
            <Link href={route('prototype.category')}>
                <PrimaryButton className="bg-green-500 mb-4">Back</PrimaryButton>
            </Link>
            <h1 className="text-xl mb-2">Add Category</h1>
            <form>
                <InputLabel 
                    value="Category"
                    className="text-xl mt-2"
                />
                <TextInput
                    className="w-full"
                />
                <PrimaryButton className="bg-blue-500 mt-4">
                    Add Category
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}