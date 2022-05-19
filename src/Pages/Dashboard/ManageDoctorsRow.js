import React from "react";

const ManageDoctorsRow = ({ doctor, index, setDeletingModal }) => {
	const { name, img, specialty } = doctor;

	return (
		<tr>
			<td>{index + 1}</td>
			<td>
				<img className="w-24 rounded-full border-2 p-1" src={img} alt="" />
			</td>
			<td>{name}</td>
			<td>{specialty}</td>
			<td>
				<label
					onClick={() => {
						setDeletingModal(doctor);
					}}
					for="delete-modal"
					class="btn btn-error text-white btn-sm"
				>
					Delete
				</label>
			</td>
		</tr>
	);
};

export default ManageDoctorsRow;
