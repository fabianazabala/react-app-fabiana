import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponents from "./components/mycomponents";
import { tasks } from "./task.json";
import TasksForm from './components/TasksForm';


class App extends Component{
  constructor() {
    super();
    this.state = {
      title: "My to do list",
        tasks

    };
    this.handleAddTasks = this.handleAddTasks.bind(this);

  }

    handleAddTasks(task){
      this.setState= ({
          tasks: [...this.state.tasks, task]
      })


    }

  render() {
    const tasks = this.state.tasks.map((tasks, i) => {
    return(
       <div className="col-md-4">
         <div className="card mt-4">
           <div className="card-header">
             <h3>{tasks.title}</h3>
               <span className="badge badge-pill badge-danger ml-2">
               {tasks.where}
             </span>
           </div>
           <div className="card.body">
             <p>{tasks.description}</p>
             <p><mark>{tasks.date}</mark></p>

           </div>

         </div>
       </div>

    )

    })

    return (
        <div className="App">
            <MyComponents title="TO DO LIST"/>
            {this.state.title}
            <span className="badge badge-pill badge-light ml-2">
                <TasksForm onAddTasks={this.handleAddTasks}/>
              {this.state.tasks.length}
          </span>
          <div className="container">
            <div className="row mt-4">
              { tasks }
            </div>
          </div>
        </div>
    );
  }


}

export default App;
