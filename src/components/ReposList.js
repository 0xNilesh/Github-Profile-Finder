import React from "react";
import ShowRepo from "./ShowRepo";

const ShowRepos = ({ repos }) => {
	if (repos !== "") {
		const repoList = repos.map((repo) => {
			return <ShowRepo repo={repo} key={repo.id} />;
		});
		return (
			<div>
				<h3 className="mb-3">Latest Repos</h3>
				<div className="card card-body mb-3">{repoList}</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default ShowRepos;
