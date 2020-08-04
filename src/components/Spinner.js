import React from "react";

const Spinner = ({ showSpinner }) => {
	if (showSpinner) {
		return (
			<div className="d-flex justify-content-center m-5">
				<div className="spinner-grow text-dark">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default Spinner;
