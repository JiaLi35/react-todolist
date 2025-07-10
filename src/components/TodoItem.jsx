function TodoItem(props) {
  const { name, isCompleted } = props;
  if (isCompleted) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-sm btn-success">
            <i className="bi bi-check-square"></i>
          </button>
          <span className="ms-2 text-decoration-line-through">{name}</span>
        </div>
        <div>
          <button className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    );
  }
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button class="btn btn-sm btn-light">
          <i class="bi bi-square"></i>
        </button>
        <span class="ms-2">Task 2</span>
      </div>
      <div>
        <button class="btn btn-sm btn-danger">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
