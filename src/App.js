import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import TodoList from './components/todoList.jsx';
import AddTodo from './components/addTodo.jsx';
import EditTodo from './components/editTodo.jsx';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem : []
    };
  }

  componentDidMount() {
    const todoitem = JSON.parse(localStorage.getItem('todos')) || [];
    this.setState({
      todoItem: todoitem
    })
  }

  addTodo = (newTodo) => {
    const todos = [...this.state.todoItem, newTodo];
    this.setState({ todoItem : todos })
    localStorage.setItem('todos', JSON.stringify(todos));
    toast.info('Todos Added Successfully.!')
  }
  
  editTodo = (todo) => {
    const todos = this.state.todoItem.map((item) => {
      if(item.id === todo.id){
        item.title = todo.title
        item.desc = todo.desc
        item.complate = todo.complate
      }
      return item;
    })
    this.setState({ todoItem: todos});
    localStorage.setItem('todos', JSON.stringify(todos));
    toast.info('Todos Updated Successfully.!')
  }

  complateTodo = (i) => {
    const todos = this.state.todoItem;
    todos[i].complate = todos[i].complate ? false : true ; 
    this.setState({ todoItem : todos })
    localStorage.setItem('todos', JSON.stringify(todos));
    toast.success('Todo Status Changed Successfully.!')
  }

  deleteTodo = (index) => {
    const todos = this.state.todoItem
    todos.splice(index, 1)
    this.setState({ todoItem : todos })
    localStorage.setItem('todos', JSON.stringify(todos));
    toast.success('Todo Deleted Successfully.!')
  }

  searchTodo = (val) => {
    const getTodos = JSON.parse(localStorage.getItem('todos'));
    const todos = getTodos.filter(item => item.title.toLowerCase().includes(val));
    this.setState({ todoItem : todos })
  }

  render() {
    return (
      <Router>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
        <Navbar />
        <div className="container mt-5">
        <Switch>
          <Route exact path="/">
            <Redirect to="/todos" />
          </Route>
          <Route exact path="/todos">
            <TodoList todoItem={this.state.todoItem} complateTodo={this.complateTodo} deleteTodo={this.deleteTodo} searchTodo={this.searchTodo}/>
          </Route>
          <Route exact path="/add" component={() => <AddTodo addTodo={this.addTodo}/>} />
          <Route exact path="/edit/:id" component={(props) => <EditTodo {...props} editTodo={this.editTodo} todoItem={this.state.todoItem} />} />
        </Switch>
        </div>
     </Router>
    );
  }
}

export default App;
