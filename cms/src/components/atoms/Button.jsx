const Button = ({ children, type, mode, ...rest }) => {
  return (
    <button
      type={type}
      className={`btn btn-lg ${
        mode === 'secondary' ? 'btn-light' : 'btn-primary'
      } rounded-pill w-100 p-2`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
