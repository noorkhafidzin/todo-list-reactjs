import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <div className="footer">
        <p>
          &copy; Copyright 2022, <span> </span>
          <a href="https://github.com/noorkhafidzin/todo-list-reactjs">
            Github repository
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
