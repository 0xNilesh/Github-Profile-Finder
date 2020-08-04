import React from "react";

const Footer = ({ brand }) => {
	return (
		<footer className="mt-5 text-primary text-center bg-light border-top border-bottom border-primary p-3">
			{brand} &copy; Nilesh 2020
		</footer>
	);
};

export default Footer;
