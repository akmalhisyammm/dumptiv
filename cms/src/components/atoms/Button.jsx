const Button = ({ children, type, accent, onClick, ...rest }) => {
  return (
    <button
      type={type || 'button'}
      className={`btn btn-lg ${
        accent === 'secondary' ? 'btn-light' : 'btn-primary'
      } rounded-pill w-100 p-2`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
