import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      label: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      label: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      label: "Task 3",
      isCompleted: false,
    },
  ]);
  return (
    <>
      {/* start to do list code */}
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList list={list} />
          <div className="mt-4">
            <AddTodoForm
              list={list}
              setList={setList}
              onAddNew={(newValue) => {
                setList([
                  ...list,
                  { id: Math.random(), label: newValue, isCompleted: false },
                ]);
              }}
            />
          </div>
        </div>
      </div>
      {/* end to do list code */}
    </>
  );
}

export default App;
