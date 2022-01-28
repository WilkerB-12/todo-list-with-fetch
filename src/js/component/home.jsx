import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [Task, setTask] = useState([]);
	return (
		<div className="container-fluid text-center bground vh-100">
			<h1 className="pt-3 fw-lighter">todos</h1>
			<div className="abs-center text-start">
				<ul className="list-group list-group-flush w-75">
					<li className="list-group-item border">
						<input
							className="w-100"
							type="text"
							placeholder="what needs to be done?"
							value={Task}
							onKeyPress={(e) => {
								e.key === "Enter"
									? setTask(e.target.value)
									: console.log("pulsa enter");
							}}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
