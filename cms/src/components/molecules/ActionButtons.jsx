import { Link } from 'react-router-dom';

const ActionButtons = ({ editPath, editImagePath, onDelete }) => {
  return (
    <span className="d-flex">
      <a role="button" className="ms-3" onClick={onDelete}>
        <span className="icon material-symbols-outlined text-danger">delete</span>
      </a>
      <Link to={editPath} className="ms-3">
        <span className="icon material-symbols-outlined text-danger">edit</span>
      </Link>
      <Link to={editImagePath} className="ms-3">
        <span className="icon material-symbols-outlined text-danger">image</span>
      </Link>
    </span>
  );
};

export default ActionButtons;
