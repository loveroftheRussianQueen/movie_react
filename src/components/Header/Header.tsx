import './Header.scss';
import { icons } from './icons';

const Header = () => {
  return (
    <div className="header">
        <h1>movie search</h1>
        <div className="icons">
          {icons.map(icon =>(
              <span>{icon}</span>
          ))}
        </div>
    </div>
  );
};

export default Header;
