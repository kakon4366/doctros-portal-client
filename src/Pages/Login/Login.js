import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	useEffect(() => {
		if (user) {
			navigate(from, { replace: true });
		}
	}, [user, navigate, from]);

	let loginError;
	if (error) {
		loginError = (
			<p className="text-red-500">
				<small>{error.message}</small>
			</p>
		);
	}

	const onSubmit = (data) => {
		console.log(data);
		signInWithEmailAndPassword(data.email, data.password);
	};

	return (
		<section>
			<div className="container mx-auto flex justify-center items-center h-screen">
				<div className="card w-96 bg-base-100 shadow-lg">
					<div className="card-body">
						<h2 className="text-xl font-bold text-center">Login</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="" className="label">
								Email
							</label>
							<input
								type="email"
								placeholder="Email Address"
								className="input input-bordered input-accent w-full"
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
							<label className="label">
								{errors.email?.type === "required" && (
									<span className="label-text-alt text-red-500">
										{errors.email.message}
									</span>
								)}
								{errors.email?.type === "pattern" && (
									<span className="label-text-alt text-red-500">
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
								className="input input-bordered input-accent w-full"
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
									<span className="label-text-alt text-red-500">
										{errors.password.message}
									</span>
								)}
								{errors.password?.type === "minLength" && (
									<span className="label-text-alt text-red-500">
										{errors.password.message}
									</span>
								)}
							</label>
							{loginError}
							<button
								type="submit"
								className={`btn btn-accent w-full mt-3 ${
									loading ? "loading" : ""
								}`}
							>
								Login
							</button>
							<p className="text-sm text-center mt-3">
								New to Doctors Portal?{" "}
								<Link className="text-secondary" to="/sign-up">
									Create new account
								</Link>
							</p>
						</form>
						<button
							onClick={() => navigate("/reset-password")}
							className="text-[12px] block text-slate-500 hover:text-secondary text-right"
						>
							Forgot Password?
						</button>
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
