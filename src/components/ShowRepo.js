import React from "react";

const ShowRepo = ({ repo }) => {
	return (
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-6">
					<a href={repo.html_url} target="_blank">
						{repo.name}
					</a>
				</div>
				<div className="col-md-6">
					<span className="badge badge-primary rounded mr-1">
						Stars : {repo.stargazers_count}
					</span>
					<span className="badge badge-danger rounded mr-1">
						Watchers : {repo.watchers_count}
					</span>
					<span className="badge badge-success rounded mr-1">
						Forks : {repo.forks_count}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ShowRepo;
