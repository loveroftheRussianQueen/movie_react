import { useState } from 'react';
import './Header.scss';
import { icons } from './icons';

const Header = () => {

  const [selectedLink, setSelectedLink] = useState("");

  return (
    <div className="header">
        <h1>movie search</h1>
        <ul className="header__icons">
          {icons.map((val,key) =>(
              <li className=
              {`${selectedLink === val.link ? "active" : ""}`}
              key={key}
              onClick={() => {
                setSelectedLink(val.link);
              }}
              >
                {val.icon}
                </li>
          ))}
        </ul>
    </div>
  );
};

export default Header;
