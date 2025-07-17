function AddTodoForm(props) {
  const { onAddNew } = props;
  return (
    <form className="d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Add new item..."
        id="tasklabel"
        required
      />
      <button
        className="btn btn-primary btn-sm rounded ms-2"
        onClick={(event) => {
          event.preventDefault();
          if (tasklabel.value === "") {
            alert("Please fill in the field");
          } else {
            onAddNew(tasklabel.value);
            tasklabel.value = "";
          }
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
