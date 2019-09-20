import React from "react";

export class Prelude extends React.Component {
	constructor() {
		super();

		this.state = {
			todoList: [
				{ title: "Go to 4Geeks", id: 0, done: false },
				{ title: "Practice Reac", id: 1, done: false },
				{ title: "Record Dj Set", id: 2, done: false }
			]
		};
	}

	deleteTodo(i) {
		this.setState({
			todoList: this.state.todoList.filter(item => item.id !== i)
		});
	}

	render() {
		let newArray = this.state.todoList.map((item, index) => {
			return (
				<li key={index}>
					{item.title}

					<button className="del">
						<i
							className="fas fa-trash"
							onClick={() => this.deleteTodo(item.id)}
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
							name="taskInput"
							placeholder="Todo"
						/>
						<input type="button" value="+" name="add" />
					</form>
					<ul className="the-list">{newArray}</ul>
					<p>{this.state.todoList.length} item left</p>
				</div>
			</div>
		);
	}
}
