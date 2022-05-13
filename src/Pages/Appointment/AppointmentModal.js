import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AppointmentModal = ({ treatment, date }) => {
	const [user] = useAuthState(auth);
	const { name, slots } = treatment;

	const handleAppointment = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<input
				type="checkbox"
				id="appointment-modal"
				className="modal-toggle"
			/>
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<label
						htmlFor="appointment-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="font-bold text-2xl text-secondary">{name}</h3>
					<form onSubmit={handleAppointment} action="" className="mt-12">
						<input
							type="text"
							value={format(date, "PP")}
							disabled
							className="input input-bordered w-full mb-4"
						/>
						<select className="select select-bordered w-full mb-4">
							{slots.map((slot) => (
								<option key={slot}>{slot}</option>
							))}
						</select>
						<input
							type="text"
							placeholder="Full Name"
							className="input input-bordered w-full mb-4"
							value={user.displayName || ""}
							disabled
						/>
						<input
							type="email"
							placeholder="Email Address"
							className="input input-bordered w-full mb-4"
							value={user.email || ""}
							disabled
						/>
						<input
							type="text"
							placeholder="Phone Number"
							className="input input-bordered w-full mb-4"
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
