import React from "react";
import { Button } from "react-day-picker";
import PrimaryButton from "./PrimaryButton";

const AppointmentService = ({ appointmentService }) => {
	const { name, slots } = appointmentService;
	return (
		<div class="card bg-base-100 shadow-md">
			<div class="card-body items-center text-center">
				<h2 class="card-title text-secondary">{name}</h2>
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
				<div class="card-actions mt-3">
					<button
						disabled={slots.length === 0}
						className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary"
					>
						Book Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default AppointmentService;
