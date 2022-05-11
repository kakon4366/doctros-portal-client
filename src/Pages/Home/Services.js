import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import Service from "../../Components/Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import PrimaryButton from "../../Components/PrimaryButton";
import heroImg from "../../assets/images/treatment.png";

const Services = () => {
	const services = [
		{
			_id: 1,
			icon: fluoride,
			title: "Fluoride Treatment",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			_id: 2,
			icon: cavity,
			title: "Cavity Filling",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			_id: 3,
			icon: whitening,
			title: "Teeth Whitening",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
	];

	return (
		<section className="my-28">
			<div className="container mx-auto">
				<div className="text-center">
					<SectionTitle>OUR SERVICES</SectionTitle>
					<h2 className="text-4xl ">Services We Provide</h2>
				</div>
				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{services.map((service) => (
						<Service service={service} key={service._id}></Service>
					))}
				</div>
				{/* hero */}
				<div className="mt-36">
					<div className="hero min-h-screen">
						<div className="hero-content flex-col lg:flex-row">
							<div className="flex-1">
								<img
									src={heroImg}
									className="sm:max-w-sm lg:max-w-lg mx-auto rounded-lg shadow-2xl"
									alt=""
								/>
							</div>
							<div className="flex-1">
								<h1 className="text-5xl font-bold">
									Exceptional Dental Care, on Your Terms
								</h1>
								<p className="py-6">
									It is a long established fact that a reader will be
									distracted by the readable content of a page when
									looking at its layout. The point of using Lorem
									Ipsumis that it has a more-or-less normal
									distribution of letters,as opposed to using 'Content
									here, content here', making it look like readable
									English. Many desktop publishing packages and web
									page
								</p>
								<PrimaryButton>Get Started</PrimaryButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
