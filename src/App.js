import React from "react";
import TaskListContextProvider from "../src/contexts/TaskListContext";
import TaskList from "../src/TaskList";
import TaskForm from "../src/TaskForm";

import "../src/App.css";
import Header from "../src/Header";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;