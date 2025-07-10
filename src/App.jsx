import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div>
      {/* start to do list code */}
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList />
          <div className="mt-4">
            <AddTodoForm />
          </div>
        </div>
      </div>
      {/* end to do list code */}
    </div>
  );
}

export default App;
