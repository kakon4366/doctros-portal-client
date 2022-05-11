import React from "react";
import InfoCard from "../../Components/InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
	return (
		<section>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<InfoCard
						icon={clock}
						title="Opening Hours"
						quote="Lorem Ipsum is simply dummy text of the pri"
						cardBg="bg-gradient-to-r from-secondary to-primary"
					></InfoCard>
					<InfoCard
						icon={marker}
						title="Visit our location"
						quote="Brooklyn, NY 10036, United States"
						cardBg="bg-accent"
					></InfoCard>
					<InfoCard
						icon={phone}
						title="Contact us now"
						quote="+000 123 456789"
						cardBg="bg-gradient-to-r from-secondary to-primary"
					></InfoCard>
				</div>
			</div>
		</section>
	);
};

export default Info;
