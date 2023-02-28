import Authenticated from "@/Layouts/Authenticated/Index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/react";

export default function CategoryAdd() {
    return(
        <Authenticated>
            <Link href={route('prototype.category')}>
                Kembali
            </Link>
            <h1>Add Category</h1>
            <InputLabel value="Category" />
            <TextInput
            />
        </Authenticated>
    )
}