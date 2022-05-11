import React from "react";

const TestimonialCard = ({ testimonial }) => {
	const { name, img, quote, address } = testimonial;
	return (
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<p>{quote}</p>
			</div>
			<div className="px-8 pb-8 flex items-center">
				<div class="avatar mr-6">
					<div class="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
						<img src={img} alt="" />
					</div>
				</div>
				<div>
					<h4 className="text-xl font-semibold">{name}</h4>
					<p>{address}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
