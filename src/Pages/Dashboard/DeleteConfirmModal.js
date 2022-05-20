import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingModal, refetch, setDeletingModal }) => {
	const { name, email } = deletingModal;

	const deleteDoctorHandler = (email) => {
		fetch(`https://glacial-spire-41863.herokuapp.com/doctor/${email}`, {
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
					setDeletingModal(null);
					refetch();
				}
			});
	};

	return (
		<div>
			<input type="checkbox" id="delete-modal" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box">
					<h3 class="font-bold text-lg text-error">
						Are you sure you want to delete {name}?
					</h3>
					<p class="py-4">
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					<div class="modal-action">
						<label for="delete-modal" class="btn btn-md">
							Cancle
						</label>
						<button
							onClick={() => deleteDoctorHandler(email)}
							className="btn btn-error text-white btn-md"
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmModal;
