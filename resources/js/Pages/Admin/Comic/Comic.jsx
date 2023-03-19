import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

export default function Comic({auth, flashMessage}) {
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
							<tr>
                                <td>1</td>
								<td>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									
								</td>
								<td>Naruto</td>
								<td>Action</td>
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
                                    <PrimaryButton className="bg-red-600">
                                        Delete
                                    </PrimaryButton>
                                </td>
							</tr>
							
						</tbody>
					</table>
				</div>
				
			</div>
          </Authenticated>
        </>
    )
}