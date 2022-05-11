import React from "react";

const InfoCard = ({ icon, title, quote, cardBg }) => {
	return (
		<div class={`card card-side shadow-xl flex items-center ${cardBg}`}>
			<figure className="pl-6">
				<img src={icon} alt="Movie" />
			</figure>
			<div class="card-body text-white">
				<h2 class="card-title">{title}</h2>
				<p>{quote}</p>
			</div>
		</div>
	);
};

export default InfoCard;
