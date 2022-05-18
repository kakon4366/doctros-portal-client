import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const AddDoctors = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const imageStorageKey = "6b04d9644890fb0c1445df403e1fbd5a";

	const { data: services, isLoading } = useQuery("services", () =>
		fetch("http://localhost:5000/services").then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	const onSubmit = (data, e) => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);

		const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.success) {
					const img = result.data.url;
					const doctor = {
						name: data.name,
						email: data.email,
						specialty: data.specialty,
						img: img,
					};

					//send doctor to database
					fetch("http://localhost:5000/doctor", {
						method: "POST",
						headers: {
							"content-type": "application/json",
							authorization: `Bearer ${localStorage.getItem(
								"access_token"
							)}`,
						},
						body: JSON.stringify(doctor),
					})
						.then((res) => res.json())
						.then((result) => {
							if (result.insertedId) {
								toast.success("Doctor add success");
								reset();
							} else {
								toast.error("Faild to add the doctor");
							}
						});
				}
			});
	};

	return (
		<div>
			<h2 className="text-2xl">Add a New Doctor</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				action=""
				className="w-1/2 px-2"
			>
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
						{services.map((service) => (
							<option key={service._id} value={service.name}>
								{service.name}
							</option>
						))}
					</select>
				</div>

				<div className="form-control w-full">
					<label htmlFor="" className="label">
						Photo
					</label>
					<input
						type="file"
						className="input input-bordered input-accent w-full"
						{...register("image", {
							required: {
								value: true,
								message: "Image is Required",
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

				<button type="submit" className={`btn btn-accent w-full mt-3`}>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddDoctors;
