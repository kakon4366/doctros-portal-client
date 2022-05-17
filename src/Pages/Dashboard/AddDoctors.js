import React from "react";
import { useForm } from "react-hook-form";

const AddDoctors = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async (data, e) => {
		console.log("data", data);
		e.target.reset();
	};

	return (
		<div>
			<h2 className="text-2xl">Add a New Doctor</h2>
			<form onSubmit={handleSubmit(onSubmit)} action="" className="w-1/2">
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
						Speciality
					</label>
					<input
						type="text"
						placeholder="Speciality"
						className="input input-bordered input-accent w-full"
						{...register("speciality", {
							required: {
								value: true,
								message: "Speciality is Required",
							},
						})}
					/>
					<label className="label">
						{errors.password?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.password.message}
							</span>
						)}
					</label>
				</div>

				<button type="submit" className={`btn btn-accent w-full mt-3`}>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddDoctors;
