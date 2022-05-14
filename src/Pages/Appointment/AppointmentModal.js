import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AppointmentModal = ({ treatment, date, setTreatment, refetch }) => {
	const [user] = useAuthState(auth);
	const { _id, name, slots } = treatment;
	const formattedDate = format(date, "PP");

	const handleAppointment = (e) => {
		e.preventDefault();
		const slot = e.target.slot.value;

		const booking = {
			treatmentId: _id,
			treatment: name,
			date: formattedDate,
			slot,
			patient: user.email,
			patientName: user.displayName,
			phone: e.target.phone.value,
		};

		fetch("http://localhost:5000/booking", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.success) {
					toast.success(`Appointment is set, ${formattedDate} at ${slot}`);
				} else {
					toast.error(
						`Already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`
					);
				}
				refetch();
				setTreatment(null);
			});
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
							name="data"
							type="text"
							value={format(date, "PP")}
							disabled
							className="input input-bordered w-full mb-4"
						/>
						<select
							name="slot"
							className="select select-bordered w-full mb-4"
						>
							{slots.map((slot) => (
								<option key={slot}>{slot}</option>
							))}
						</select>
						<input
							name="name"
							type="text"
							placeholder="Full Name"
							className="input input-bordered w-full mb-4"
							value={user.displayName || ""}
							disabled
						/>
						<input
							name="email"
							type="email"
							placeholder="Email Address"
							className="input input-bordered w-full mb-4"
							value={user.email || ""}
							disabled
						/>
						<input
							name="phone"
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
