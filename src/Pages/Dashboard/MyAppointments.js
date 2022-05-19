import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
	const [appointments, setAppointments] = useState();
	const [user, Loading] = useAuthState(auth);

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			fetch(
				`https://glacial-spire-41863.herokuapp.com/booking?patient=${user.email}`,
				{
					method: "GET",
					headers: {
						authorization: `bearer ${localStorage.getItem(
							"access_token"
						)}`,
					},
				}
			)
				.then((res) => {
					if (res.status === 401 || res.status === 403) {
						signOut(auth);
						localStorage.removeItem("access_token");
						navigate("/home");
					}
					return res.json();
				})
				.then((data) => {
					setAppointments(data);
				});
		}
	}, [user, navigate]);

	if (Loading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>SL</th>
							<th>Name</th>
							<th>Date</th>
							<th>Time</th>
							<th>Treatment</th>
							<th>Payment</th>
						</tr>
					</thead>
					<tbody>
						{appointments?.map((a, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{a.patientName}</td>
								<td>{a.date}</td>
								<td>{a.slot}</td>
								<td>{a.treatment}</td>
								<td>
									{a.price && !a.paid && (
										<Link to={`/dashboard/payment/${a._id}`}>
											<button className="btn btn-sm btn-success">
												Pay
											</button>
										</Link>
									)}
									{a.price && a.paid && (
										<span className="btn btn-sm btn-success">
											Paid
										</span>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyAppointments;
