import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ManageDoctorsRow from "./ManageDoctorsRow";

const ManageDoctors = () => {
	const [deletingModal, setDeletingModal] = useState(null);

	const {
		data: doctors,
		isLoading,
		refetch,
	} = useQuery("doctors", () =>
		fetch("https://glacial-spire-41863.herokuapp.com/doctor", {
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
			<h2 className="text-sm italic mb-2">Total Doctors {doctors.length}</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Avatar</th>
							<th>Name</th>
							<th>Specialty</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{doctors.map((doctor, index) => (
							<ManageDoctorsRow
								key={doctor._id}
								doctor={doctor}
								index={index}
								setDeletingModal={setDeletingModal}
							></ManageDoctorsRow>
						))}
					</tbody>
				</table>
			</div>
			{deletingModal && (
				<DeleteConfirmModal
					deletingModal={deletingModal}
					refetch={refetch}
					setDeletingModal={setDeletingModal}
				></DeleteConfirmModal>
			)}
		</div>
	);
};

export default ManageDoctors;
