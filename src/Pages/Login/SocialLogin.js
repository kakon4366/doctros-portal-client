import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";

const SocialLogin = () => {
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);

	const navigate = useNavigate();
	const location = useLocation();

	const [token] = useToken(user);

	let from = location.state?.from?.pathname || "/";

	if (token) {
		navigate(from, { replace: true });
	}

	return (
		<div>
			<div className="divider">OR</div>
			<button
				onClick={() => signInWithGoogle()}
				className="btn btn-outline w-full"
			>
				CONTINUE WITH GOOGLE
			</button>
		</div>
	);
};

export default SocialLogin;
