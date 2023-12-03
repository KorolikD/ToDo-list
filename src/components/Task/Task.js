import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTask(id));
  };

  const handleToggle = id => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className={css.wrapper}>
      <input
        onClick={() => {
          handleToggle(task.id);
        }}
        type="checkbox"
        className={css.checkbox}
        defaultChecked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button
        className={css.btn}
        onClick={() => {
          handleDelete(task.id);
        }}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
