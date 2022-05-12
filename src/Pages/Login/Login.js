import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<section>
			<div className="container mx-auto flex justify-center items-center h-screen">
				<div class="card w-96 bg-base-100 shadow-lg">
					<div class="card-body">
						<h2 class="text-xl font-bold text-center">Login</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="" className="label">
								Email
							</label>
							<input
								type="email"
								placeholder="Email Address"
								class="input input-bordered input-accent w-full"
								{...register("email", {
									required: {
										value: true,
										message: "Email is Required",
									},
									pattern: {
										value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
										message: "Provide a valid email",
									},
								})}
							/>
							<label class="label">
								{errors.email?.type === "required" && (
									<span class="label-text-alt text-red-500">
										{errors.email.message}
									</span>
								)}
								{errors.email?.type === "pattern" && (
									<span class="label-text-alt text-red-500">
										{errors.email.message}
									</span>
								)}
							</label>

							<label htmlFor="" className="label">
								Password
							</label>
							<input
								type="password"
								placeholder="Password"
								class="input input-bordered input-accent w-full"
								{...register("password", {
									required: {
										value: true,
										message: "Password is Required",
									},
									minLength: {
										value: 6,
										message: "Password more than 6 characters",
									},
								})}
							/>

							<label htmlFor="" className="label">
								{errors.password?.type === "required" && (
									<span class="label-text-alt text-red-500">
										{errors.password.message}
									</span>
								)}
								{errors.password?.type === "minLength" && (
									<span class="label-text-alt text-red-500">
										{errors.password.message}
									</span>
								)}
							</label>

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
								<Link className="text-secondary" to="/sign-up">
									Create new account
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

export default Login;
