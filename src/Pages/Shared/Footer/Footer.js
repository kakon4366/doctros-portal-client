import React from "react";
import footerImg from "../../../assets/images/footer.png";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer
			style={{
				background: `url(${footerImg})`,
				backgroundPosition: "right",
				backgroundSize: "cover",
				backgroundOrigin: "content-box",
			}}
			className="pt-16"
		>
			<div className="container mx-auto">
				<div className="footer text-base-content">
					<div>
						<span className="footer-title">Services</span>
						<a className="link link-hover">Emergency Checkup</a>
						<a className="link link-hover">Monthly Checkup</a>
						<a className="link link-hover">Weekly Checkup</a>
						<a className="link link-hover">Deep Checkup</a>
					</div>
					<div>
						<span className="footer-title">Oral Helth</span>
						<a className="link link-hover">Fluoride Treatment</a>
						<a className="link link-hover">Cavity Filling</a>
						<a className="link link-hover">Teath Whitening</a>
					</div>
					<div>
						<span className="footer-title">Our Address</span>
						<a className="link link-hover">New York - 101010 Hudson</a>
					</div>
				</div>
				<div className="footer footer-center text-base-content mt-20 mb-8">
					<div>
						<p>Copyright &copy; {year} All Rights Reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
