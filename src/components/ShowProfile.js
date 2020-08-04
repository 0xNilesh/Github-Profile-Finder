import React from "react";

class ShowProfile extends React.Component {
	render() {
		const user = this.props.user;
		if (this.props.user !== "") {
			return (
				<div>
					<div className="card card-body mt-3 mb-3">
						<h1 className="card-header text-center bg-white mb-3">
							{user.name}
						</h1>
						<div className="row">
							<div className="col-md-3">
								<img
									className="img-fluid mb-3"
									src={user.avatar_url}
									alt="Not available"
								/>
								<a
									href={user.html_url}
									className="btn btn-primary btn-block mb-5"
									target="_blank"
								>
									View Profile
								</a>
							</div>
							<div className="col-md-9">
								<span className="badge badge-primary rounded mr-1">
									Public Repos : {user.public_repos}
								</span>
								<span className="badge badge-danger rounded mr-1">
									Public Gists : {user.public_gists}
								</span>
								<span className="badge badge-success rounded mr-1">
									Followers : {user.followers}
								</span>
								<span className="badge badge-info rounded mr-1">
									Following : {user.following}
								</span>
								<br />
								<br />
								<ul className="list-group">
									<li className="list-group-item">Company : {user.company}</li>
									<li className="list-group-item">Blog : {user.blog}</li>
									<li className="list-group-item">
										Location : {user.location}
									</li>
									<li className="list-group-item">Email : {user.email}</li>
									<li className="list-group-item">
										Member Since : {user.created_at}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return "";
		}
	}
}

export default ShowProfile;
