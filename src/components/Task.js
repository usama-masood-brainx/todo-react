import { FaTimes, FaPencilAlt } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}
        <FaPencilAlt
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onEdit(task.id)}
        /></p>
    </div>
  )
}

export default Task