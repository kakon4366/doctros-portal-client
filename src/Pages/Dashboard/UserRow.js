import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
	const { email, role } = user;

	const makeAdminHandler = () => {
		fetch(`https://glacial-spire-41863.herokuapp.com/user/admin/${email}`, {
			method: "PUT",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => {
				if (res.status === 403) {
					toast.error("Faild to make an admin");
				}
				return res.json();
			})
			.then((data) => {
				if (data.modifiedCount > 0) {
					refetch();
					toast.success("Successfully made an admin");
				}
			});
	};

	return (
		<tr>
			<td>1</td>
			<td>{email}</td>
			<td>
				{role !== "admin" ? (
					<button onClick={makeAdminHandler} className="btn btn-xs">
						Make Admin
					</button>
				) : (
					<span className="italic">Admin</span>
				)}
			</td>
			<td>
				<button className="btn btn-sm bg-[darkred]">Delete</button>
			</td>
		</tr>
	);
};

export default UserRow;
