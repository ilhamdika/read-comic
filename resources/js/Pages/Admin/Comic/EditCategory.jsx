import Authenticated from "@/Layouts/Authenticated/Index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { Inertia } from '@inertiajs/inertia'; 

export default function EditCategory({auth, category}) {
    const { data, setData,  processing, errors } = useForm({
        ...category
    });

    

    const handleOnChange = (event) => {
        setData(event.target.name, 
            event.target.type === "file"
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        Inertia.post(route('admin.dashboard.category.update', category.id), {
            _method: 'PUT',
            ...data
        });
    };

    return(
        <Authenticated auth={auth}>
            <Head title="Add Category" />
            <Link href={route('admin.dashboard.category.index')}>
                <PrimaryButton className="bg-green-500 mb-4">Back</PrimaryButton>
            </Link>
            <h1 className="text-xl mb-2">Edit Category: {category.name}</h1>
            <form onSubmit={submit}>
                <InputLabel 
                    forInput="name"
                    value="Category"
                    className="text-xl mt-5"
                />
                <TextInput
                    type="text"
                    name="name"
                    handleChange={handleOnChange}
                    placeholder="Add Category"
                    iisError={errors.name}
                    className="w-full"
                    defaultValue={category.name}
                />
                <InputError message={errors.name} className="mt-2" />
                <PrimaryButton className="bg-blue-500 mt-4">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}