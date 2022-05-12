import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";

const SignUp = () => {
	return (
		<section>
			<div className="container mx-auto flex justify-center items-center h-screen">
				<div className="card w-96 bg-base-100 shadow-lg">
					<div className="card-body">
						<h2 className="text-xl font-bold text-center">Sign Up</h2>
						<form action="">
							<label htmlFor="">Name</label>
							<input
								type="text"
								placeholder="Name"
								className="input mb-3 input-bordered input-accent w-full"
							/>
							<label htmlFor="">Email</label>
							<input
								type="email"
								placeholder="Email Address"
								className="input mb-3 input-bordered input-accent w-full"
							/>
							<label htmlFor="">Password</label>
							<input
								type="password"
								placeholder="Password"
								className="input input-bordered input-accent w-full"
							/>
							<span className="text-[12px] block">
								Forgot Password ?
							</span>
							<input
								type="submit"
								value="Login"
								className="btn btn-accent w-full mt-3"
							/>
							<p className="text-sm text-center mt-3">
								Already have an account?{" "}
								<Link className="text-secondary" to="/login">
									Login
								</Link>
							</p>
						</form>
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
