import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState("");

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

		// if (error) {
		// 	setCardError(error.message);
		// 	console.log("error asce..");
		// } else {
		// 	setCardError("");
		// 	console.log("not error");
		// }
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
			<button
				className="btn btn-success w-full mt-4 text-white text-lg"
				type="submit"
				disabled={!stripe}
			>
				Pay
			</button>
		</form>
	);
};

export default CheckoutForm;
