import React, { useEffect } from "react";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const [token] = useToken(user);

	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	useEffect(() => {
		if (token) {
			navigate(from, { replace: true });
		}
	}, [token, navigate, from]);

	let signUpError;
	if (error || Updateerror) {
		signUpError = (
			<p className="text-red-500">
				<small>{error.message}</small>
			</p>
		);
	}

	const onSubmit = async (data, e) => {
		await createUserWithEmailAndPassword(data.email, data.password);
		await updateProfile({ displayName: data.name });
		e.target.reset();
	};
	return (
		<section>
			<div className="container mx-auto flex justify-center items-center h-screen">
				<div className="card w-96 bg-base-100 shadow-lg">
					<div className="card-body">
						<h2 className="text-xl font-bold text-center">Sign Up</h2>
						<form onSubmit={handleSubmit(onSubmit)} action="">
							<div className="form-control w-full">
								<label htmlFor="" className="label">
									Name
								</label>
								<input
									type="text"
									placeholder="Name"
									className="input input-bordered input-accent w-full"
									{...register("name", {
										required: {
											value: true,
											message: "Name is Required",
										},
									})}
								/>
								<label className="label">
									{errors.name?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.name.message}
										</span>
									)}
								</label>
							</div>

							<div className="form-control w-full">
								<label htmlFor="" className="label">
									Email
								</label>
								<input
									type="email"
									placeholder="email"
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
							</div>

							<div className="form-control w-full">
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
								<label className="label">
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
							</div>

							{signUpError}

							<button
								type="submit"
								className={`btn btn-accent w-full mt-3 ${
									loading || updating ? "loading" : ""
								}`}
							>
								Sign Up
							</button>
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
