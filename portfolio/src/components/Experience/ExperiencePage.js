import React, { Component } from "react";
import Experience from "./Experience";

class ExperiencePage extends Component {
	render() {
		return (
			<div className="experience">
				<Experience {...this.props} />
			</div>
		);
	}
}

export default ExperiencePage;
