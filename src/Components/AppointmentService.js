import React from "react";

const AppointmentService = ({ appointmentService, setTreatment }) => {
	const { name, slots, price } = appointmentService;
	return (
		<div className="card bg-base-100 shadow-md">
			<div className="card-body items-center text-center">
				<h2 className="card-title text-secondary">{name}</h2>
				<p className="text-sm uppercase">
					{slots.length ? (
						<span>{slots[0]}</span>
					) : (
						<span className="text-red-500">No Slot Available</span>
					)}
				</p>
				<p className="uppercase text-sm">
					{slots.length} {slots.length > 1 ? "spaces" : "space"} Available
				</p>
				<p>
					<small>Price: ${price}</small>
				</p>
				<div className="card-actions mt-3">
					<label
						htmlFor="appointment-modal"
						disabled={slots.length === 0}
						className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary"
						onClick={() => setTreatment(appointmentService)}
					>
						Book Appointment
					</label>
				</div>
			</div>
		</div>
	);
};

export default AppointmentService;
