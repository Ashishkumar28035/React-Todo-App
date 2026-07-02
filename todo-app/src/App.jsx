import Addtodo from "./components/Addtodo";
import AppName from "./components/AppName";
import ToDoitem from "./components/ToDoitem";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <Addtodo></Addtodo>
      <div className="items-container">
        <ToDoitem tododate={"4/10/2023"} todoName={"Buy Milk"}></ToDoitem>
        <ToDoitem tododate={"4/10/2023"} todoName={"Go to college"}></ToDoitem>
      </div>
    </center>
  );
}
export default App;
