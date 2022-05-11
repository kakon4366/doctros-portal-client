import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import Service from "../../Components/Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

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
					<SectionTitle></SectionTitle>
					<h2 className="text-4xl ">Services We Provide</h2>
				</div>
				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{services.map((service) => (
						<Service service={service} key={service._id}></Service>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
