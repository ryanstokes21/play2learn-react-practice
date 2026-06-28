import { Link } from 'react-router-dom';
function Button({ to, children }) {
  return (
    <div>
      <Link to={to}>{children}</Link>
    </div>
  );
}

export default Button;
