import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/inertia-react";


export default function DetailComic ({auth, comic, categories, episodes}){
    const {delete: destroy, put} =useForm()
    const getCategoryName = (categoryId) =>{
		const category = categories.find((c)=> c.id === categoryId)
		return category ? category.name : '';
	}

    return (
        <Authenticated auth={auth}>
            <Link href={route('admin.dashboard.comic.index')}>
            <PrimaryButton>Back</PrimaryButton>
            </Link>
           
            <div className="flex ...">
                
                <div className="flex-auto w-64 ...">
                    <h1 className="mt-3 text-xl">
                        {comic.name}
                    </h1>
                    <img className="w-72"src={`/storage/${comic.thumbnail}`} />
                </div>
                <div className="flex-auto w-32 ...">
                    <h1 className="mt-5">
                        Category: {getCategoryName(comic.category_id)}
                    </h1>
                    <h1 className="mt-2">
                        Sinopsis: {comic.description}
                    </h1>
                </div>
                </div>
           <div className="flex ... mt-10">
                <div className="flex-auto w-64 ...">
                    <h1 className="text-xl">Episode</h1>
                </div>
                <div className="flex-auto w-32 ... ">
                    <Link href={route('admin.dashboard.episodes.create', comic.id)}>
                        <PrimaryButton className="bg-green-500 justify-end">
                            Add Episode
                        </PrimaryButton>
                    </Link>
                    
                </div>
           </div>

             <table className="mt-10 hover:table-fixed">
						<thead>
							<tr>
								<th className="text-center">No</th>
								<th className="text-center">Thumbail</th>
								<th>Episode</th>
								<th>Title</th>
                                <th>Description</th>
								<th>Action</th>
							</tr>
						</thead>
                        <tbody>
                            {episodes.map((episode, i=1) => (
                                <tr key={episode.id}>
                                    <td>{i+1}</td>
                                    <td><img className="w-60 h-40" src={`/storage/${episode.thumbnail}`} /></td>
                                    <td className="text-center">{episode.episode}</td>
                                    <td className="text-center">{episode.title}</td>
                                    <td className="text-center">{episode.description}</td>
                                    <td className="text-center">
                                        <Link href={route('admin.dashboard.episodes.edit', episode.id)}>
                                            <PrimaryButton className="bg-yellow-500">
                                                Edit
                                            </PrimaryButton>
                                        </Link>
                                        <PrimaryButton
                                        onClick={() => {
                                            destroy(route('admin.dashboard.episodes.destroy', episode.id))
                                        }}
                                        className="bg-red-500">
                                            Delete
                                        </PrimaryButton>
                                      
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            
        </Authenticated>
    )
}