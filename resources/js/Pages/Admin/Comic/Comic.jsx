import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";
import { usePage } from "@inertiajs/inertia-react";

export default function Comic({auth, flashMessage, comics, categories}) {
	
	
	const getCategoryName = (categoryId) =>{
		const category = categories.find((c)=> c.id === categoryId)
		return category ? category.name : '';
	}
    return (
        <>
          <Authenticated auth={auth}>
            <Head title="Comic" />
          <div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Comic</h3>
                        <Link href={route('admin.dashboard.comic.create')}>
						    <PrimaryButton className="bg-green-500">
                                Add Comic
                            </PrimaryButton>
                        </Link>
					</div>
					{flashMessage?.message && <FlashMessage message={flashMessage.message}/>}
					<table>
						<thead>
							<tr>
								<th>No</th>
								<th>Thumbail</th>
								<th>Title</th>
								<th>Category</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{comics.map((comic, i=1)  => (

							<tr key={comic.id}>
                                <td>{i+1}</td>
								<td>
									<img src={`/storage/${comic.thumbnail}`} />
									
								</td>
								<td>{comic.name}</td>
								<td>{getCategoryName(comic.category_id)}</td>
								<td>
                                    <Link href={route('admin.dashboard.comic.edit', comic.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                                    <Link href={route('admin.dashboard.comic.show', comic.id)}>
                                        <PrimaryButton className="bg-green-500">
                                            Detail
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600">
                                        Delete
                                    </PrimaryButton>
                                </td>
							</tr>
							))}
							
						</tbody>
					</table>
				</div>
				
			</div>
          </Authenticated>
        </>
    )
	
}
