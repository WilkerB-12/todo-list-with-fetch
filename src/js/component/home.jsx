import { arrayOf } from "prop-types";
import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tasklist, setTasklist] = useState([]);
	const [task, setTask] = useState({
		label: "",
		done: "",
	});
	const getToDos = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/wblanco12"
		);
		const dataAsJSON = await response.json();
		if (!response.ok) {
			createUserList();
			console.log(dataAsJSON);
			return;
		}
		setTasklist(dataAsJSON);
		console.log(dataAsJSON);
	};
	const createUserList = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/wblanco12",
			{
				method: "Post",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify([]),
			}
		);
	};
	const updateTaskList = async (newTasklist) => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/wblanco12",
			{
				method: "Put",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newTasklist),
			}
		);
	};
	useEffect(() => {
		getToDos();
	}, []);
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
							value={task.label}
							onChange={(evento) => {
								setTask({
									label: evento.target.value,
									done: false,
								});
							}}
							onKeyPress={async (e) => {
								const newTasklist = tasklist.map(
									(newtask, i) => {
										return newtask;
									}
								);
								newTasklist.push(task);
								if (e.key === "Enter") {
									setTask({
										label: "",
										done: "",
									});
									await updateTaskList(newTasklist);
									getToDos();
								}
							}}
						/>
					</li>
					{tasklist.map((tarea, i) => {
						return (
							<li
								className="list-group-item border border-top-0"
								key={i}>
								{tarea.label}
								<span className="position-absolute top-50 end-0 translate-middle">
									<button
										type="button"
										className="btn btn-light text-danger show"
										onClick={async (event) => {
											const newTasklist = tasklist.filter(
												(delTask, index) => {
													if (index !== i) {
														return true;
													} else {
														return false;
													}
												}
											);
											await updateTaskList(newTasklist);
											getToDos();
										}}>
										X
									</button>
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;
