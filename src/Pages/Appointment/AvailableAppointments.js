import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "../../Components/AppointmentService";
import AppointmentModal from "./AppointmentModal";

const AvailableAppointments = ({ date }) => {
	const [services, setServices] = useState([]);
	const [treatment, setTreatment] = useState(null);

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
						setTreatment={setTreatment}
					></AppointmentService>
				))}
			</div>
			{treatment && (
				<AppointmentModal treatment={treatment}></AppointmentModal>
			)}
		</div>
	);
};

export default AvailableAppointments;
