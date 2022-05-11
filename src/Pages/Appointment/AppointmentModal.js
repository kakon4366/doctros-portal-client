import React from "react";

const AppointmentModal = ({ treatment }) => {
	const { name, slots } = treatment;
	return (
		<div>
			<input type="checkbox" id="appointment-modal" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<label
						for="appointment-modal"
						class="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 class="font-bold text-lg text-secondary">{name}</h3>
					<form action="">
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
					</form>
					<div class="modal-action">
						<label for="appointment-modal" class="btn btn-secondary">
							Booking
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentModal;
