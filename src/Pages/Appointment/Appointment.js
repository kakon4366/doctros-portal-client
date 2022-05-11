import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
	const [date, setDate] = useState(new Date());
	return (
		<div>
			<AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
			<AvailableAppointments date={date}></AvailableAppointments>
		</div>
	);
};

export default Appointment;
