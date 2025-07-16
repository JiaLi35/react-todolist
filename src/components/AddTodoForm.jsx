function AddTodoForm(props) {
  const { list, setList, onAddNew } = props;
  return (
    <form className="d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Add new item..."
        id="label"
        required
      />
      <button
        className="btn btn-primary btn-sm rounded ms-2"
        onClick={(event) => {
          event.preventDefault();
          if (label.value === "") {
            alert("Please fill in the field");
          } else {
            onAddNew(label.value);
            label.value = "";
          }
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
