import React from "react";

export class Prelude extends React.Component {
	constructor() {
		super();

		this.state = {
			todoList: []
		};
	}

	formSubmit(e) {
		if (document.querySelector("[name=todoInput]").value === "") {
			return null;
		}

		let idx = this.state.todoList.length - 1;
		this.setState({
			todoList: this.state.todoList.concat([
				{ label: e, done: false, id: idx + 1 }
			])
		});
		document.querySelector("[name=todoInput]").value = "";
	}
	deleteTodo(i) {
		this.setState({
			todoList: this.state.todoList.filter(data => data.id !== i)
		});
	}

	componentDidMount() {
		const url = "https://assets.breatheco.de/apis/fake/todos/user/ferfunes";

		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ todoList: data });
			})
			.catch(error => console.log(error));
	}

	render() {
		let newArray = this.state.todoList.map((data, id) => {
			return (
				<li key={id}>
					{data.label}

					<button className="del">
						<i
							className="fas fa-trash"
							onClick={() => this.deleteTodo(data.id)}
						/>
					</button>
				</li>
			);
		});

		return (
			<div className="wrapper d-flex justify-content-center">
				<div className="todoList-cont">
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
								this.formSubmit(
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
