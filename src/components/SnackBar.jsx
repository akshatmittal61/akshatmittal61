import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SnackBar = ({ text, delayTime = 5000 }) => {
	const [open, setOpen] = useState(true);
	setTimeout(() => {
		setOpen(false);
	}, delayTime);
	AOS.init();
	return (
		<>
			{open && (
				<div
					className="snackbar"
					data-aos="fade-up"
					data-aos-duration="250"
				>
					<span className="snackbar-text">{text}</span>
				</div>
			)}
		</>
	);
};

export default SnackBar;
