import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const Appointment = () => {
	const [date, setDate] = useState(new Date());
	return (
		<section>
			<div className="container mx-auto">
				<div class="hero min-h-screen">
					<div class="hero-content flex-col lg:flex-row-reverse">
						<div className="flex-1">
							<img
								src={chair}
								class="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl mx-auto"
								alt=""
							/>
						</div>
						<div className="flex-1">
							<DayPicker
								mode="single"
								selected={date}
								onSelect={setDate}
							></DayPicker>
							<p>YOur selected date is: {format(date, "PP")}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Appointment;
