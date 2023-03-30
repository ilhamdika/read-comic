import React,{ useState } from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import NewDropdown from "@/Components/NewDropdown";
import InputError from "@/Components/InputError";

import { Inertia } from "@inertiajs/inertia";
import Dropdown from "@/Components/Dropdown";
import Checkbox from "@/Components/Checkbox";

export default function AddComic ({auth, categorys}){
    const category = categorys
    console.log(category)

    
    

    const { setData, post, processing, errors, } = useForm({
        name:"",
        slug: "",
        category_id: "",
        thumbnail: "",
        description: "",

    });


    const [selectedCategory, setSelectedCategory] = useState('');
    const [category_id, setCategory_id] = useState('');
    

    // function handleChange(event) {
    //     setSelectedCategory(event.target.value);
    // }


    const handleOnChange = (event) => {
        setData(event.target.name, 
            event.target.type === 'file'
            ? event.target.files[0]
            : event.target.value
            )
            setSelectedCategory(event.target.value);
        ;
        
            
    };

    // const handleChange = (et) => {
    //     setData(setSelectedCategory(et.target.value));
    // };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.comic.store'));
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
						<h1 className="text-xl">Add Comic</h1>
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
                    <option value="" disabled selected>Select your option</option>
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

                <InputError message={errors.category_id} className="mt-2" />

                {/* <NewDropdown 
                type="text"
                name="category_id" 
                options={categorys} 
                value={selectedCategory} 
                onChange={handleOnChange}
                placeholder="Select Category"
                
                /> */}

                <InputLabel 
                    input="description"
                    value="sinopsis"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="text"
                    name="description"
                    handleChange={handleOnChange}
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

                <PrimaryButton className="bg-blue-700 mt-4" processing={processing}>
                    Add Comic
                </PrimaryButton>
            </form>

                </div>
            </div>

        </Authenticated>
    )
}