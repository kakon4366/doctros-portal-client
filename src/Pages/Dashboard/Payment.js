import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51L13xmSJyDRTPVy9GKERvIN1lz4K2IXJR0xUqdIQXeN9ZUOKrOx6bWapcDIHhEje2KkpUTqad0aow5YGbOjzKAeN00AooU1WAP"
);

const Payment = () => {
	const { id } = useParams();

	const url = `https://glacial-spire-41863.herokuapp.com/booking/${id}`;

	const { data: appointment, isLoading } = useQuery(["booking", id], () =>
		fetch(url, {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		}).then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}

	const { patientName, treatment, date, slot, price } = appointment;

	return (
		<div className="flex flex-col my-12">
			<div className="card max-w-md bg-base-100 shadow-xl">
				<div className="card-body">
					<h3 className="text-secondary font-semibold">
						Hello, {patientName}
					</h3>
					<h2 className="card-title">Pay for {treatment}</h2>
					<p>
						Your appointment <span className="bg-yellow-200">{date}</span>{" "}
						at <span className="bg-yellow-200">{slot}</span>
					</p>
					<p>Please pay: ${price}</p>
				</div>
			</div>
			{/* payment details */}
			<div className="card max-w-md bg-base-100 shadow-xl mt-8">
				<div className="card-body">
					<h2 className="text-2xl font-semibold mb-4">Payment</h2>
					<Elements stripe={stripePromise}>
						<CheckoutForm appointment={appointment} />
					</Elements>
				</div>
			</div>
		</div>
	);
};

export default Payment;
