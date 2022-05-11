import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "../../Components/AppointmentService";

const AvailableAppointments = ({ date }) => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("services.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div className="container mx-auto">
			<h3 className="text-xl text-secondary text-center">
				Available Appointments on {format(date, "PP")}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
				{services.map((appointmentService) => (
					<AppointmentService
						appointmentService={appointmentService}
						key={appointmentService._id}
					></AppointmentService>
				))}
			</div>
		</div>
	);
};

export default AvailableAppointments;
