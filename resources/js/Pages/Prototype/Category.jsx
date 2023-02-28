import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";

export default function Category() {
    return (
        <>
            <Authenticated>
            <div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Category</h3>
                        <Link href={route('prototype.add-category')}>
						    <i className='bx bxs-smile'>Add Category</i>
                        </Link>
					</div>
					<table>
						<thead>
							<tr>
								<th>Icon</th>
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
								<td><button className="status completed">Completed</button></td>
							</tr>
							<tr>
								<td>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>
            </Authenticated>
        </>
    )
}