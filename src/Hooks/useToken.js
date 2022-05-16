import { useEffect, useState } from "react";
const useToken = (user) => {
	const [token, setToken] = useState("");

	useEffect(() => {
		const email = user?.user?.email;
		const currentUser = { email: email };

		console.log("user email", email);

		if (email) {
			console.log("asce re....");
			fetch(`http://localhost:5000/user/${email}`, {
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(currentUser),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("inserted token data", data);
				});
		}
	}, [user]);

	return [token];
};

export default useToken;