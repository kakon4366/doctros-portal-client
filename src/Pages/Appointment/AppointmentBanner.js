import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
	return (
		<div className="container mx-auto">
			<div className="hero min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex-1">
						<img
							src={chair}
							className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl mx-auto"
							alt=""
						/>
					</div>
					<div className="flex-1">
						<DayPicker
							mode="single"
							selected={date}
							onSelect={setDate}
						></DayPicker>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentBanner;
