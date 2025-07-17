function TodoItem(props) {
  const { id, label, isCompleted, onDelete, onMarkDone } = props;

  const handleDelete = () => {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      onDelete(id);
    }
  };

  const handleMarkDone = () => {
    onMarkDone(id, isCompleted);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button className="btn btn-sm btn-success" onClick={handleMarkDone}>
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm btn-light" onClick={handleMarkDone}>
            <i className="bi bi-square"></i>
          </button>
        )}
        <span
          style={isCompleted ? { color: "#ddd" } : { color: "black" }}
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {label}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
