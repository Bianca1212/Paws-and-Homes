import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Button = ({ path, className, onClick, children }) => {
  return (
    <>
      <Link to={path} className={className} onClick={onClick}>
        {children}
      </Link>
    </>
  );
};

Button.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.object,
};
