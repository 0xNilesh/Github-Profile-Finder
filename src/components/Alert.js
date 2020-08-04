import React from "react";

const Alert = ({ alertMsg, showAlert }) => {
	if (alertMsg === '"Request failed with status code 404"') {
		alertMsg = '"User Not Found!!!"';
	}

	if (showAlert) {
		return (
			<div>
				<div className="alert alert-danger">
					{alertMsg.substr(1, alertMsg.length - 2)}
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default Alert;
