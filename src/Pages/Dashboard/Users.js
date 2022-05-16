import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery("users", () =>
		fetch("http://localhost:5000/user", {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		}).then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<h2>Show All User {users.length}</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>SL</th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<UserRow
								key={user._id}
								user={user}
								refetch={refetch}
							></UserRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
