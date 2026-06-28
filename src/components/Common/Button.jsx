import { Link } from 'react-router-dom';
function Button({ to, children }) {
  return <Link to={to}>{children}</Link>;
}

export default Button;
