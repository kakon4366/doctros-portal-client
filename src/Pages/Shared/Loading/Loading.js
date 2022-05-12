import React from "react";

const Loading = () => {
	return (
		<div className="flex justify-center items-center w-full h-[500px]">
			<div
				style={{ borderTopColor: "transparent" }}
				className="w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin"
			></div>
		</div>
	);
};

export default Loading;
