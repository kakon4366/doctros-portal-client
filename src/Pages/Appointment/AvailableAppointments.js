import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentService from "../../Components/AppointmentService";
import AppointmentModal from "./AppointmentModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const AvailableAppointments = ({ date }) => {
	// const [services, setServices] = useState([]);
	const [treatment, setTreatment] = useState(null);

	const formattedDate = format(date, "PP");

	const {
		data: services,
		isLoading,
		refetch,
	} = useQuery(["available", formattedDate], () =>
		fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
			(res) => res.json()
		)
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	// useEffect(() => {
	// 	fetch(`http://localhost:5000/available?date=${formattedDate}`)
	// 		.then((res) => res.json())
	// 		.then((data) => setServices(data));
	// }, [formattedDate]);

	return (
		<div className="container mx-auto">
			<h3 className="text-xl text-secondary text-center">
				Available Appointments on {format(date, "PP")}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
				{services?.map((appointmentService) => (
					<AppointmentService
						appointmentService={appointmentService}
						key={appointmentService._id}
						setTreatment={setTreatment}
					></AppointmentService>
				))}
			</div>
			{treatment && (
				<AppointmentModal
					date={date}
					treatment={treatment}
					setTreatment={setTreatment}
					refetch={refetch}
				></AppointmentModal>
			)}
		</div>
	);
};

export default AvailableAppointments;
