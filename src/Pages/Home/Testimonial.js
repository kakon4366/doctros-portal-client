import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import quoteImg from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestimonialCard from "../../Components/TestimonialCard";

const Testimonial = () => {
	const testimonials = [
		{
			_id: 1,
			quote: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			name: "Winson Herry",
			img: people1,
			address: "California",
		},
		{
			_id: 2,
			quote: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			name: "John Smit",
			img: people2,
			address: "Altana",
		},
		{
			_id: 3,
			quote: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			name: "David",
			img: people3,
			address: "Chicago",
		},
	];
	return (
		<section>
			<div className="container mx-auto">
				<div className="flex justify-between">
					<div>
						<SectionTitle>Testimonial</SectionTitle>
						<h2 className="text-4xl">What Our Patients Says</h2>
					</div>
					<div>
						<img className="w-36 lg:w-48 " src={quoteImg} alt="" />
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
					{testimonials.map((testimonial) => (
						<TestimonialCard
							testimonial={testimonial}
							key={testimonial._id}
						></TestimonialCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
