import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<h2 className="text-4xl text-secondary font-bold">
					Welcome to Your Dashboard
				</h2>
				{/* <!-- Page content here --> */}
				<Outlet></Outlet>
				<label
					htmlFor="my-drawer"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer" className="drawer-overlay"></label>
				<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
					{/* <!-- Sidebar content here --> */}
					<li>
						<Link to="/dashboard">My Appointments</Link>
					</li>
					<li>
						<Link to="/dashboard/my-review">My Reviews</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
