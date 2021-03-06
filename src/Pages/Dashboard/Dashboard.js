import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);

	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<h2 className="text-4xl text-secondary font-bold mb-4">
					Welcome to Your Dashboard
				</h2>

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
					<li>
						<Link to="/dashboard">My Appointments</Link>
					</li>
					<li>
						<Link to="/dashboard/my-review">My Reviews</Link>
					</li>
					<li>
						<Link to="/dashboard/history">History</Link>
					</li>
					{admin && (
						<>
							<li>
								<Link to="/dashboard/users">Users</Link>
							</li>
							<li>
								<Link to="/dashboard/add-doctor">Add Doctor</Link>
							</li>
							<li>
								<Link to="/dashboard/manage-doctors">
									Manage Doctors
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
