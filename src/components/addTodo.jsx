import React, { Component } from 'react';
import { toast } from 'react-toastify';

class addTodo extends Component {
  
  onSubmit = (e) => {
    e.preventDefault();
    if(!e.target.title.value){
      toast.warning('Todo title field is required')
      return false
    }

    const todo = {
      id: new Date().getTime(),
      title: e.target.title.value,
      desc: e.target.desc.value,
      complate: false
    }
    e.target.reset();
    this.props.addTodo(todo);
  }

  render() {
    return (
      <div className="col-4 mx-auto">
        <div className="mb-5">
          <h2 className="text-center">Add Todo</h2>
        </div>
        <form onSubmit={this.onSubmit} method="POST">
          <div className="mb-4">
            <label htmlFor="todo-title" className="form-label">Todo Title</label>
            <input type="text" className="form-control" name="title" id="todo-title" placeholder="Enter Todo Title" />
          </div>
          <div className="mb-4">
            <label htmlFor="todo-desc" className="form-label">Todo Description</label>
            <textarea name="desc" id="todo-desc" className="form-control" rows="2" placeholder="Enter Todo Description"></textarea>
          </div>
          <div className="float-end">
            <button type="submit" className="btn btn-outline-success">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default addTodo;