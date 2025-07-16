function TodoItem(props) {
  const { name, isCompleted } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button className="btn btn-sm btn-success">
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button class="btn btn-sm btn-light">
            <i class="bi bi-square"></i>
          </button>
        )}
        <span
          style={isCompleted ? { color: "#ddd" } : { color: "black" }}
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {name}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
