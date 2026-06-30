import Addtodo from "./components/Addtodo";
import AppName from "./components/AppName";
import ToDoitem from "./components/ToDoitem";
import ToDoitem2 from "./components/ToDoitem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <Addtodo></Addtodo>
      <div className="items-container">
        <ToDoitem></ToDoitem>
        <ToDoitem2></ToDoitem2>
      </div>
    </center>
  );
}
export default App;
