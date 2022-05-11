import React from "react";

const InfoCard = ({ icon, title, quote, cardBg }) => {
	return (
		<div className={`card card-side shadow-xl flex items-center ${cardBg}`}>
			<figure className="pl-6">
				<img src={icon} alt="Movie" />
			</figure>
			<div className="card-body text-white">
				<h2 className="card-title">{title}</h2>
				<p>{quote}</p>
			</div>
		</div>
	);
};

export default InfoCard;
