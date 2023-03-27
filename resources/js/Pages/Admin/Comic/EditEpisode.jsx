import Authenticated from "@/Layouts/Authenticated/Index"
import { Head, Link, useForm } from "@inertiajs/react"
import PrimaryButton from "@/Components/PrimaryButton"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import InputError from "@/Components/InputError"
import { Inertia } from "@inertiajs/inertia"


export default function EditEpisode ({auth, episode}){
    const { data, setData,  processing, errors } = useForm({
        ...episode
    });

    const handleOnChange = (event) => {
        setData(event.target.name, 
            event.target.type === 'file'
            ? event.target.files[0]
            : event.target.value)
    };

    const submit = (e) => {
        e.preventDefault();
        
        if(data.thumbnail === episode.thumbnail){
            delete data.thumbnail;
        } if (data.file === episode.file){
            delete data.file;
        }

        Inertia.post(route('admin.dashboard.episodes.update', episode.id), {
            _method: 'PUT',
            ...data
        });
    };

    return(
        <Authenticated auth={auth}>
          <Head title="Add Episode" />
             <div className="table-data">
				<div className="order">
                        <Link href={route('admin.dashboard.comic.index')}>
						    <PrimaryButton className="bg-green-500 mb-4">
                                Back
                            </PrimaryButton>
                        </Link>
						<h1 className="text-xl">Edit Episode : {episode.episode}</h1>
					<div className="head">
					</div>
          <form onSubmit={submit}>
                <InputLabel 
                    input="episode"
                    value="Episode"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="text"
                    name="episode"
                    handleChange={handleOnChange}
                    placeholder="Add episode berapa"
                    className="w-full"
                    defaultValue={episode.episode}
                />
                <InputError message={errors.episode} className="mt-2" />
                
                
                <InputLabel 
                    input="title"
                    value="Title"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="text"
                    name="title"
                    handleChange={handleOnChange}
                    placeholder="Add episode title"
                    className="w-full"
                    defaultValue={episode.title}
                />
                <InputError message={errors.title} className="mt-2" />

                <InputLabel
                    input="thumbnail"
                    value="Thumbnail"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    handleChange={handleOnChange}
                    placeholder="Add thumbnail"
                    className="w-full"
                />
                <InputError message={errors.thumbnail} className="mt-2" />
                <img src={`/storage/${episode.thumbnail}`} alt="thumbnail" className="w-25 h-20 mb-4" />

                <InputLabel 
                    input="description"
                    value="Description"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="text"
                    name="description"
                    handleChange={handleOnChange}
                    placeholder="Add sinopsis"
                    className="w-full h-32"
                    defaultValue={episode.description}
                />
                <InputError message={errors.description} className="mt-2" />

                

                <InputLabel
                    input="file"
                    value="File"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="file"
                    name="file"
                    handleChange={handleOnChange}
                    placeholder="Add File Episode"
                    className="w-full"
                />
                <InputError message={errors.file} className="mt-2" />

                <embed src={`/storage/${episode.file}`} alt="file" className="w-25 h-20 mb-4" controls />

                 
                

                <PrimaryButton className="bg-blue-700 mt-4" processing={processing}>
                    Update
                </PrimaryButton>
            </form>

                </div>
            </div>

        </Authenticated>
    )
}