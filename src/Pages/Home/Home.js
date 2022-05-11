import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<Info></Info>
			<Services></Services>
			<MakeAppointment></MakeAppointment>\<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
