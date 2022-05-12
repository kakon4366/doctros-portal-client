import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);

	if (user) {
		console.log(user);
	}

	return (
		<div>
			<div class="divider">OR</div>
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
