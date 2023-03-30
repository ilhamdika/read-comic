import { useState } from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

import InputError from "@/Components/InputError";
import { Inertia } from "@inertiajs/inertia";


export default function EditComic ({auth, categorys, comic}){
    

    const getCategoryName = (categoryId) =>{
		const category = categorys.find((c)=> c.id === categoryId)
		return category ? category.name : '';
	}
    const { data, setData,  processing, errors } = useForm({
        ...comic
    });
    const [selectedCategory, setSelectedCategory] = useState('');

    // function handleChange(event) {
    //     setSelectedCategory(event.target.value);
    // }

    const handleOnChange = (event) => {
        setData(event.target.name, 
            event.target.type === 'file'
            ? event.target.files[0]
            : event.target.value)
        setSelectedCategory(event.target.value);
    };

    // const handleChange = (et) => {
    //     setData(setSelectedCategory(et.target.value));
    // };

    const submit = (e) => {
        e.preventDefault();
        
        if(data.thumbnail === comic.thumbnail){
            delete data.thumbnail;
        }

        Inertia.post(route('admin.dashboard.comic.update', comic.id), {
            _method: 'PUT',
            ...data
        });
    };

    return(
        <Authenticated auth={auth}>
          <Head title="Add Comic" />
             <div className="table-data">
				<div className="order">
                        <Link href={route('admin.dashboard.comic.index')}>
						    <PrimaryButton className="bg-green-500 mb-4">
                                Back
                            </PrimaryButton>
                        </Link>
						<h1 className="text-xl">Edit Comic: {comic.name}</h1>
					<div className="head">
					</div>
          <form onSubmit={submit}>
                <InputLabel 
                    input="name"
                    value="Title"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="text"
                    name="name"
                    handleChange={handleOnChange}
                    defaultValue={comic.name}
                    placeholder="Add Title"
                    className="w-full"
                />
                <InputError message={errors.name} className="mt-2" />
                
                
                <InputLabel 
                    input="category_id"
                    value="Category"
                    className="text-xl mt-2"
                />
                
                <select 
                name="category_id"
                value={selectedCategory} 
                onChange={handleOnChange}
                placeholder="Select Category"
                className="rounded-lg w-full">
                    <option 
                    value="" 
                    className="text-red-500 font-bold mt-2"
                    >
                        {getCategoryName(comic.category_id)}
                    </option>
                    {categorys.map(category => (
                        
                        <option 
                        type="text" 
                        key={category.id}
                        value={category.id}
                        
                        >
                                {category.name}
                        </option>
                    ))}
                </select>
                <h1 className="mt-1">Category awal: {getCategoryName(comic.category_id)} </h1>
                <h1 className="text-red-500">apakah kamu ingin mengubah?</h1>
                <InputError message={errors.category_id} className="mt-2" />

                <InputLabel 
                    input="description"
                    value="sinopsis"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="text"
                    name="description"
                    handleChange={handleOnChange}
                    defaultValue={comic.description}
                    placeholder="Add sinopsis"
                    className="w-full h-32"
                />

                <InputLabel
                    input="thumbnail"
                    value="Thumbnail"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    
                    handleChange={handleOnChange}
                    placeholder="Add Thumbnail"
                    className="w-full"
                />

                <img src={`/storage/${comic.thumbnail}`} alt="thumbnail" className="w-25 h-20 mb-4" />


                <PrimaryButton className="bg-blue-700 mt-4" processing={processing}>
                    Save
                </PrimaryButton>
            </form>

                </div>
            </div>

        </Authenticated>
    )
}