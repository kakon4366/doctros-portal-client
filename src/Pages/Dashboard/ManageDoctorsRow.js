import React from "react";
import { toast } from "react-toastify";

const ManageDoctorsRow = ({ doctor, index, refetch }) => {
	const { name, img, specialty, email } = doctor;

	const deleteDoctorHandler = (email) => {
		fetch(`http://localhost:5000/doctor/${email}`, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount) {
					toast.success(`Doctor ${name} is deleted.`);
					refetch();
				}
			});
	};

	return (
		<tr>
			<td>{index + 1}</td>
			<td>
				<img className="w-24 rounded-full border-2 p-1" src={img} alt="" />
			</td>
			<td>{name}</td>
			<td>{specialty}</td>
			<td>
				<button
					onClick={() => deleteDoctorHandler(email)}
					className="btn btn-error text-white btn-sm"
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default ManageDoctorsRow;
