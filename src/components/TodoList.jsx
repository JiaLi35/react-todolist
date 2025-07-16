import TodoItem from "./TodoItem";

function TodoList(props) {
  const { list } = props;
  return (
    <ul className="list-group">
      {list.map((item, index) => {
        const { label, isCompleted } = item;
        return <TodoItem name={label} isCompleted={isCompleted} />;
      })}
    </ul>
  );
}

export default TodoList;
