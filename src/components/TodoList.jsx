import TodoItem from "./TodoItem";

function TodoList(props) {
  const { list, onDelete, onMarkDone } = props;
  return (
    <ul className="list-group">
      {list.map((item, index) => {
        const { id, label, isCompleted } = item;
        return (
          <TodoItem
            key={id}
            id={id}
            label={label}
            isCompleted={isCompleted}
            onDelete={onDelete}
            onMarkDone={onMarkDone}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
