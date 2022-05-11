import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({ treatment, date }) => {
	const { name, slots } = treatment;

	const handleAppointment = (e) => {
		e.preventDefault();
	};
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
					<h3 class="font-bold text-2xl text-secondary">{name}</h3>
					<form onSubmit={handleAppointment} action="" className="mt-12">
						<input
							type="text"
							value={format(date, "PP")}
							disabled
							class="input input-bordered w-full mb-4"
						/>
						<select class="select select-bordered w-full mb-4">
							{slots.map((slot) => (
								<option key={slot}>{slot}</option>
							))}
						</select>
						<input
							type="text"
							placeholder="Full Name"
							class="input input-bordered w-full mb-4"
						/>
						<input
							type="email"
							placeholder="Email Address"
							class="input input-bordered w-full mb-4"
						/>
						<input
							type="text"
							placeholder="Phone Number"
							class="input input-bordered w-full mb-4"
						/>
						<input
							type="submit"
							value="Submit"
							className="btn btn-accent w-full text-lg"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AppointmentModal;
