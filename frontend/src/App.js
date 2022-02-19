import React, { Component } from 'react';
import Modal from './components/Modal';
import axios from "axios";

/* const todoItems = [
  {
    id: 1,
    title: "Have a Meeting",
    description: "About project management with the team.",
    completed: true,
  },
  {
    id: 2,
    title: "Go to Bookstore",
    description: "Buy some programming books.",
    completed: false,
  },
  {
    id: 3,
    title: "Help My Wife",
    description: "With her English lessons.",
    completed: false,
  },
  {
    id: 4,
    title: "Play Football",
    description: "On Friday with my friends.",
    completed: true,
  },
]; */

const localhost = "http://localhost:8000";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      // todoList: todoItems,
      modal: false,
      activeItem: {
        title: "",
        description: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get(localhost + "/api/todos/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios
        .put(`${localhost}/api/todos/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post(localhost + "/api/todos/", item)
      .then((res) => this.refreshList());
  }

  handleDelete = (item) => {
    axios
      .delete(`${localhost}/api/todos/${item.id}/`)
      .then((res) => this.refreshList());
  }

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  }

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className='nav nav-tabs'>
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter((item) => item.completed === viewCompleted);
    return newItems.map((item) => (
      <li
        key={item.id}
        className='list-group-item d-flex justify-content-between align-items-center'
      >
        <span
          className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className='btn btn-secondary btn-sm m-1'
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className='btn btn-danger btn-sm m-1'
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className='container'>
        <h1 className='text-white text-uppercase text-center my-4'>Todo App</h1>
        <div className='row'>
          <div className='col-md-6 col-sm-10 mx-auto p-0'>
            <div className='card p-3'>
              <div className='mb-4'>
                <button className='btn btn-primary' onClick={this.createItem}>Add Task</button>
              </div>
              {this.renderTabList()}
              <ul className='list-group list-group-flush border-top-0'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal activeItem={this.state.activeItem} toggle={ this.toggle } onSave={ this.handleSubmit } />
        ) : null }
      </main>
    );
  }
}


export default App;