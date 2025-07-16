import TodoItem from "./TodoItem";

function TodoList(props) {
  const { list } = props;
  return (
    <ul className="list-group">
      {list.map((item, index) => {
        const { id, label, isCompleted } = item;
        return <TodoItem key={id} name={label} isCompleted={isCompleted} />;
      })}
    </ul>
  );
}

export default TodoList;
