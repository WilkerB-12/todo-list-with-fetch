import { arrayOf } from "prop-types";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tasklist, setTasklist] = useState([]);
	const [task, setTask] = useState("");
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
							value={task}
							onChange={(evento) => {
								setTask(evento.target.value);
							}}
							onKeyPress={(e) => {
								let newTasklist = tasklist.map((newtask, i) => {
									return newtask;
								});
								newTasklist.push(task);
								if (e.key === "Enter") {
									setTasklist(newTasklist);
									setTask("");
								}
							}}
						/>
					</li>
					{tasklist.map((tarea, i) => {
						return (
							<li
								className="list-group-item border border-top-0"
								key={i}>
								{tarea}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;
