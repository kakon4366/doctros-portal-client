import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const ManageDoctors = () => {
	const { data: doctors, isLoading } = useQuery("doctors", () =>
		fetch("http://localhost:5000/doctor", {
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
			<h2 className="text-2xl">Manage Doctors {doctors.length}</h2>
		</div>
	);
};

export default ManageDoctors;
