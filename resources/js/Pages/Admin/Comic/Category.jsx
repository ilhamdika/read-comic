import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";


export default function Index({auth, flashMessage}) {
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
							<tr>
								<td>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td>
									<PrimaryButton className="bg-green-500">
										Edit
									</PrimaryButton>
									<PrimaryButton className="bg-red-500">
										Delete
									</PrimaryButton>
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
				
			</div>
        </Authenticated>
    )
}