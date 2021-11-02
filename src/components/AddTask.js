import { useState } from "react";

const AddTask = ({ onAdd, editTaskObj }) => {
  const [text, setText] = useState(editTaskObj.text ? editTaskObj.text : "");
  const [day, setDay] = useState(editTaskObj.day ? editTaskObj.day : "");
  const [reminder, setReminder] = useState(
    editTaskObj.reminder ? editTaskObj.reminder : false
  );

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    const id = editTaskObj.id ? editTaskObj.id : null;

    onAdd({ text, day, reminder, id });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        type="submit"
        value={editTaskObj.id ? "Update" : "Save Task"}
        className="btn btn-block"
      />
    </form>
  );
};

export default AddTask;
