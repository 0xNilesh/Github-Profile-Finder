import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import github from "../api/github";
import ShowProfile from "./ShowProfile";
import ReposList from "./ReposList";
import Alert from "./Alert";
import Footer from "./Footer";

class App extends React.Component {
	state = {
		user: "",
		repos: "",
		alertMsg: "",
		showAlert: false,
		showSpinner: false,
	};

	onSearchChange = async (term) => {
		if (term.trim() !== "") {
			this.setState({
				user: "",
				repos: "",
				alertMsg: "",
				showAlert: false,
				showSpinner: true,
			});
			const userDetail = await github.get(`/users/${term}`).catch((e) => {
				this.setState({
					user: "",
					repos: "",
					alertMsg: JSON.stringify(e.message),
					showAlert: true,
					showSpinner: false,
				});
				console.error(e.message);
			});

			const reposCount = 5;
			const reposSort = "created:asc";
			const reposDetail = await github
				.get(`/users/${term}/repos`, {
					params: {
						per_page: reposCount,
						sort: reposSort,
					},
				})
				.catch((e) => {
					console.error(e.message);
				});
			if (userDetail && reposDetail) {
				this.setState({
					user: userDetail.data,
					repos: reposDetail.data,
					showAlert: false,
					alertMsg: "",
					showSpinner: false,
				});
				//console.log(this.state.repos);
			}
		} else {
			//Clear profile
			this.setState({
				user: "",
				repos: "",
				alertMsg: "",
				showAlert: false,
				showSpinner: false,
			});
		}
	};

	render() {
		return (
			<div>
				<Navbar brand="GitHub Profile Finder" />
				<div className="container searchContainer mt-3">
					<Alert
						alertMsg={this.state.alertMsg}
						showAlert={this.state.showAlert}
					/>
					<div className="card card-body search">
						<h1 className="mb-4">Search GitHub Users </h1>
						<SearchBar onChangeInput={this.onSearchChange} />
						<Spinner showSpinner={this.state.showSpinner} />
						<ShowProfile user={this.state.user} />
						<ReposList repos={this.state.repos} />
					</div>
				</div>
				<Footer brand="GitHub Profile Finder" />
			</div>
		);
	}
}

export default App;
