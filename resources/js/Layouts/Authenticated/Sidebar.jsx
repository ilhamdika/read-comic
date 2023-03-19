import PrimaryButton from "@/Components/PrimaryButton"
import { Link } from "@inertiajs/react"

export default function Sidebar (){
	// const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

	// allSideMenu.forEach(item=> {
	// 	const li = item.parentElement;
	
	// 	item.addEventListener('click', function () {
	// 		allSideMenu.forEach(i=> {
	// 			i.parentElement.classList.remove('active');
	// 		})
	// 		li.classList.add('active');
	// 	})
	// });
	
	
	
	
	// // TOGGLE SIDEBAR
	// const menuBar = document.querySelector('#content nav .bx.bx-menu');
	// const sidebar = document.getElementById('sidebar');
	
	// menuBar.addEventListener('click', function () {
	// 	sidebar.classList.toggle('hide');
	// })
    return (
        <section id="sidebar">
		<Link href="#" className="brand">
			<i className='bx bxs-smile'></i>
			<span className="text">Comic</span>
		</Link>
		<ul className="side-menu top">
			<li className="active">
				<Link href={route('prototype.dashboard')}>
					<i className='bx bxs-dashboard' ></i>
					<span className="text">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link href={route('admin.dashboard.category.index')}>
					<i className='bx bxs-shopping-bag-alt' ></i>
					<span className="text">Category</span>
				</Link>
			</li>
			<li>
				<Link href={route('admin.dashboard.comic.index')}>
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Comic</span>
				</Link>
			</li>
			{/* <li>
				<Link href="#">
					<i className='bx bxs-message-dots' ></i>
					<span className="text">Message</span>
				</Link>
			</li>
			<li>
				<Link href="#">
					<i className='bx bxs-group' ></i>
					<span className="text">Team</span>
				</Link>
			</li> */}
		</ul>
		<ul className="side-menu">
			<li>
				<Link href="#">
					<i className='bx bxs-cog' ></i>
					<span className="text">Settings</span>
				</Link>
			</li>
			<li>
				<PrimaryButton href={route('logout')}
				method="post"
				className="logout mt-9 ml-3 bg-red-600">
					<i className='bx bxs-log-out-circle' ></i>
					<span className="text">Logout</span>
				</PrimaryButton>
			</li>
		</ul>
	</section>
    )
}