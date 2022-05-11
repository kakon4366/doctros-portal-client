import React from "react";
import PrimaryButton from "../../Components/PrimaryButton";
import SectionTitle from "../../Components/SectionTitle";

const ContactUs = () => {
	return (
		<section className="bg-slate-700 py-12">
			<div className="container mx-auto">
				<div className="text-center">
					<SectionTitle>Contact Us</SectionTitle>
					<h2 className="text-4xl text-white">Stay connected with us</h2>
				</div>
				<div className="w-1/4 mx-auto mt-12">
					<form action="" className="flex flex-col">
						<input
							type="text"
							placeholder="E-mail Address"
							class="input input-bordered input-secondary w-full mb-6"
						/>
						<input
							type="text"
							placeholder="Subject"
							class="input input-bordered input-secondary w-full mb-6"
						/>
						<textarea
							class="textarea textarea-secondary mb-6"
							placeholder="Your message"
						></textarea>
						<div className="text-center">
							<PrimaryButton>Submit</PrimaryButton>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
