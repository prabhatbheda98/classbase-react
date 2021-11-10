import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

class editTodo extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    const todo = JSON.parse(localStorage.getItem('todos'));
    this.state = {
      id: todo[id].id,
      title: todo[id].title,
      desc: todo[id].desc,
      complate: todo[id].complate
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  checkTodo() {
    this.setState({
      complate: this.state.complate ? false : true
    })
  }

  onSubmit(e) {
    e.preventDefault();
    if(!e.target.title.value){
      toast.warning('Todo title field is required')
      return false
    }

    e.target.reset();
    this.props.editTodo(this.state);
    this.props.history.push('/todos');
  }

  render() {
    return (
      <div className="col-4 mx-auto">
        <div className="mb-5">
          <h2 className="text-center">Update Todo</h2>
        </div>
        <form onSubmit={this.onSubmit} method="POST">
          <div className="mb-4">
            <label htmlFor="title" className="form-label">Todo Title</label>
            <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange} className="form-control" placeholder="Enter Todo Title" />
          </div>
          <div className="mb-4">
            <label htmlFor="desc" className="form-label">Todo Description</label>
            <textarea name="desc" id="desc" value={this.state.desc} onChange={this.handleInputChange} className="form-control" rows="2" placeholder="Enter Todo Description"></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" id="complate" name="complate" checked={this.state.complate} onChange={this.checkTodo} className="form-check-input" />
            <label className="form-check-label" htmlFor="complate"> Todo Complate </label>
          </div>
          <div className="float-end">
            <button type="submit" className="btn btn-outline-success">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(editTodo);