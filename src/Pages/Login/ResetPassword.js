import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const ResetPassword = () => {
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	let resetError;
	if (error) {
		resetError = (
			<p className="text-red-500">
				<small>{error.message}</small>
			</p>
		);
	}

	const onSubmit = async (data, e) => {
		await sendPasswordResetEmail(data.email);
		e.target.reset();
	};

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-lg">
				<div className="card-body">
					<h2 className="text-xl font-semibold text-center">
						Reset Password
					</h2>

					<form onSubmit={handleSubmit(onSubmit)} className="mt-4">
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
									message: "Provide a valid email.",
								},
							})}
						/>
						<label htmlFor="" className="label">
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
						{resetError}
						<button
							className={`btn btn-accent w-full mt-3 ${
								sending ? "loading" : ""
							}`}
							type="submit"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
