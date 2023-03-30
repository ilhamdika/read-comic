import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";


export default function Index({auth, flashMessage, categories}) {
	const {delete: destroy, put} = useForm();
    return (
        <Authenticated auth={auth}>
            <Head title="Category" />
            <div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Category</h3>
                        <Link href={route('admin.dashboard.category.create')}>
						    <PrimaryButton className="bg-green-500 mb-4">Add Category</PrimaryButton>
                        </Link>
						
					</div>
					{flashMessage?.message && <FlashMessage message={flashMessage.message}/>}
					
					<table>
						<thead>
							<tr>
								<th>No</th>
								<th>Category</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{categories.map((categori, i=1)  => (
							<tr key={categori.id}>
								<td>{i+1}</td>
								<td>{categori.name}</td>
								<td>
									<Link href={route('admin.dashboard.category.edit', categori.id)}>
										<PrimaryButton className="bg-green-500">
											Edit
										</PrimaryButton>
									</Link>
									{/* <div onClick={()=> {
										destroy(route('admin.dashboard.category.destroy', categori.id))
									}}> */}
									<PrimaryButton 
									onClick={()=> {
										categori.deleted_at ? put(route('admin.dashboard.category.restore', categori.id)) :
										destroy(route('admin.dashboard.category.destroy', categori.id))
									}}
									className="bg-red-500"
									
									>
										{categori.deleted_at ? 'Restore Category' : 'Delete'}
									</PrimaryButton>
									
								</td>
							</tr>
							))}
							
						</tbody>
					</table>
				</div>
				
			</div>
        </Authenticated>
    )
}