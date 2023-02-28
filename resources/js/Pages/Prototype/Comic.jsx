import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";

export default function Comic() {
    return (
        <>
          <Authenticated>
          <div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Category</h3>
                        <Link>
						    <i className='bx bxs-smile'>Add Category</i>
                        </Link>
					</div>
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
                                        <PrimaryButton className="bg-amber-300">
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                                    <Link>
                                        <PrimaryButton className="bg-amber-700">
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