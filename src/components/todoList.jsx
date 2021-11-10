import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class todoList extends Component {
  render() {
    const { todoItem, complateTodo, deleteTodo, searchTodo } = this.props;

    const todolist = todoItem.length === 0 ?
      <div className="list-group">
        <div className="list-group-item">
          <div className="text-center m-3">
            <h5>No todo avaliable in list</h5>
          </div>
        </div>
      </div>
    : todoItem.map((todos, index) => {
      return <div className="list-group" key={index}>
        <div className="list-group-item">
          <div className={todos.complate ? 'complate' : ''}>
            <h5 className=""> {todos.title} </h5>
            <p className="todo-desc"> {todos.desc} </p>
          </div>
          <div>
            {!todos.complate ? <button className="btn btn-sm btn-info me-3" onClick={()=>complateTodo(index)}> Complate </button>
            : <button className="btn btn-sm btn-dark me-3" onClick={()=>complateTodo(index)}> Uncomplate </button> }
            <Link to={"edit/"+ index} className="btn btn-sm btn-warning me-3"> Edit </Link>
            <button className="btn btn-sm btn-danger" onClick={()=>deleteTodo(index)}> Delete </button>
          </div>
        </div>
      </div>
    })

    return (
      <div>
        <div className="col-6 mx-auto mb-5">
          <div className="mb-5 d-flex justify-content-between">
            <h2 className="text-center">Todo List</h2>
            <div>
              <input type="text" name="search" id="search" onKeyUp={(e) => searchTodo(e.target.value)} className="form-control" placeholder="Enter for Search Todo..." />
            </div>
          </div>
          {todolist}
        </div>
      </div>
    );
  }
}

export default todoList;