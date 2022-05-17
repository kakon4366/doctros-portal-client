import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const AddDoctors = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { data: services, isLoading } = useQuery("services", () =>
		fetch("http://localhost:5000/services").then((res) => res.json())
	);

	const onSubmit = async (data, e) => {
		console.log("data", data);
		e.target.reset();
	};

	if (isLoading) {
		return <Loading></Loading>;
	}

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

					<select
						{...register("specialty")}
						className="input input-bordered input-accent w-full"
					>
						<option selected>Select One</option>
						{services.map((service) => (
							<option key={service._id} value={service.name}>
								{service.name}
							</option>
						))}
					</select>
				</div>

				<button type="submit" className={`btn btn-accent w-full mt-3`}>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddDoctors;
