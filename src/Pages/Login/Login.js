import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<section>
			<div className="container mx-auto flex justify-center items-center h-screen">
				<div class="card w-96 bg-base-100 shadow-lg">
					<div class="card-body">
						<h2 class="text-xl font-bold text-center">Login</h2>
						<form action="">
							<label htmlFor="">Email</label>
							<input
								type="text"
								placeholder="Email Address"
								class="input mb-3 input-bordered input-accent w-full"
							/>
							<label htmlFor="">Password</label>
							<input
								type="text"
								placeholder="Password"
								class="input input-bordered input-accent w-full"
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
								New to Doctors Portal?{" "}
								<Link className="text-secondary" to="/register">
									Create new account
								</Link>
							</p>
						</form>
						<div class="divider">OR</div>
						<button className="btn btn-outline">
							CONTINUE WITH GOOGLE
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
