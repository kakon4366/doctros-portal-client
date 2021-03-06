import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../../Components/PrimaryButton";
import backgroundImage from "../../assets/images/bg.png";

const Hero = () => {
	return (
		<section
			style={{
				background: `url(${backgroundImage})`,
				backgroundPosition: "cover",
			}}
			className="bg-bottom"
		>
			<div className="hero min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex-1">
						<img
							src={chair}
							alt=""
							className="sm:max-w-sm md:max-w-md mx-auto lg:max-w-lg rounded-lg shadow-2xl"
						/>
					</div>
					<div className="flex-1 mt-10 lg:mt-0">
						<h1 className="text-5xl font-bold leading-snug">
							Your New Smile Starts Here
						</h1>
						<p className="py-6">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the
						</p>
						<PrimaryButton>Get Started</PrimaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
