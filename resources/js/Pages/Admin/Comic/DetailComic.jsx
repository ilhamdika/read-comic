import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";

export default function DetailComic ({auth, comic, categories}){
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
                    <PrimaryButton className="bg-green-500 justify-end">Add Episode</PrimaryButton>
                </div>
           </div>

           <table className="mt-10">
						<thead>
							<tr>
								<th>No</th>
								<th>Thumbail</th>
								<th>Episode</th>
								<th>Title</th>
                                
								<th>Action</th>
							</tr>
						</thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <img className="w-60 h-40" src="https://assets.suaramerdeka.com/crop/0x0:0x0/750x500/webp/photo/2022/04/14/1179310321.jpg" />
                                </td>
                                <td>Episode 01</td>
                                <td>Luffy berangkat ke laut untuk menemukan kru bajak lautnya Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum impedit eveniet doloribus, ducimus eaque aperiam aspernatur sunt enim minus, ullam, nostrum vitae illo iusto! Exercitationem vitae autem ab magni. Excepturi.</td>
                                
                                <td>
                                    <Link>
                                        <PrimaryButton className="bg-yellow-500">
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                                    <Link>
                                        <PrimaryButton className="bg-green-500">
                                            Detail
                                        </PrimaryButton>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
            </table>
        </Authenticated>
    )
}