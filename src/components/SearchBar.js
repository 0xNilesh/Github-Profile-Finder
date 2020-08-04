import React from "react";

class SearchBar extends React.Component {
	state = { value: "" };

	onInputChange = (e) => {
		this.props.onChangeInput(this.state.value);
	};

	render() {
		return (
			<div>
				<p className="lead">
					Enter a username to fetch a user profile and repos
				</p>
				<input
					type="text"
					id="UserName"
					className="form-control"
					placeholder="GitHub Username..."
					value={this.state.value}
					onChange={(e) => this.setState({ value: e.target.value })}
					onKeyUp={this.onInputChange}
				/>
			</div>
		);
	}
}

export default SearchBar;
