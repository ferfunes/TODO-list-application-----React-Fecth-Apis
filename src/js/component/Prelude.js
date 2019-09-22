import React from "react";

export class Prelude extends React.Component {
	constructor() {
		super();

		this.state = {
			todoList: [
				{ name: "Go to 4Geeks", i: 0, done: false },
				{ name: "Practice Reac", i: 1, done: false },
				{ name: "Record Dj Set", i: 2, done: false }
			]
		};
	}
	handleFormSubmit(e) {
		if (document.querySelector("[name=todoInput]").value === "") {
			return null;
		}

		let ind = this.state.todoList.length - 1;
		this.setState({
			todoList: this.state.todoList.concat([
				{ name: e, done: false, i: ind + 1 }
			])
		});
		document.querySelector("[name=todoInput]").value = "";
	}
	deleteTodo(i) {
		this.setState({
			todoList: this.state.todoList.filter(item => item.i !== i)
		});
	}

	render() {
		let newArray = this.state.todoList.map((item, index) => {
			return (
				<li key={index}>
					{item.name}

					<button className="del">
						<i
							className="fas fa-trash"
							onClick={() => this.deleteTodo(item.i)}
						/>
					</button>
				</li>
			);
		});

		return (
			<div className="wrapper d-flex justify-content-center">
				<div className="todolist-cont">
					<h2 className="todo-text text-center">Todo List</h2>
					<form className=" text-center">
						<input
							className="input-cont"
							type="text"
							name="todoInput"
							placeholder="Todo"
						/>
						<input
							type="button"
							value="+"
							name="add"
							onClick={() =>
								this.handleFormSubmit(
									document.querySelector("[name=todoInput]")
										.value
								)
							}
						/>
					</form>
					<ul className="the-list">{newArray}</ul>
					<p>{this.state.todoList.length} item left</p>
				</div>
			</div>
		);
	}
}
