import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ appointment }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [success, setSuccess] = useState("");

	const { price, patient, patientName } = appointment;

	useEffect(() => {
		fetch("http://localhost:5000/create-payment-intent", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
			body: JSON.stringify({ price }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.clientSecret) {
					setClientSecret(data.clientSecret);
				}
			});
	}, [price]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		setCardError(error?.message || "");
		setSuccess("");
		// if (error) {
		// 	setCardError(error.message);
		// 	console.log("error asce..");
		// } else {
		// 	setCardError("");
		// 	console.log("not error");
		// }

		// confirm cart payment
		const { paymentIntent, error: intentError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: patientName,
						email: patient,
					},
				},
			});

		if (intentError) {
			setCardError(intentError?.message);
			setSuccess("");
		} else {
			setCardError("");
			console.log(paymentIntent);
			setSuccess("Congrats! Your payment is complited.");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#424770",
							"::placeholder": {
								color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			/>
			<p className="text-red-500 mt-2">
				<small>{cardError && cardError}</small>
			</p>
			<p className="text-green-500 mt-2">
				<small>{success && success}</small>
			</p>
			<button
				className="btn btn-success w-full mt-4 text-white text-lg"
				type="submit"
				disabled={!stripe || !clientSecret}
			>
				Pay
			</button>
		</form>
	);
};

export default CheckoutForm;
