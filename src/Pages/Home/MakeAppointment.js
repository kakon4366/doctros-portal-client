import React from "react";
import PrimaryButton from "../../Components/PrimaryButton";
import doctor from "../../assets/images/doctor-small.png";
import SectionTitle from "../../Components/SectionTitle";

const MakeAppointment = () => {
	return (
		<section className="bg-slate-700">
			<div className="container mx-auto">
				<div className=" flex flex-col justify-center items-center lg:flex-row">
					<div className="flex-1 hidden lg:block">
						<img className="mx-auto mt-[-100px]" src={doctor} alt="" />
					</div>
					<div className="flex-1 text-white py-8 lg:py-0">
						<SectionTitle>Appointment</SectionTitle>
						<h1 className="text-5xl">Make an appointment Today</h1>
						<p className="py-6">
							It is a long established fact that a reader will be
							distracted by the readable content of a page when looking
							at its layout. The point of using Lorem Ipsumis that it has
							a more-or-less normal distribution of letters,as opposed to
							using 'Content here, content here', making it look like
							readable English. Many desktop publishing packages and web
							page
						</p>
						<PrimaryButton>Get Started</PrimaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MakeAppointment;
