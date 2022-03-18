import { useState } from 'react';
import './Header.scss';
import { icons } from './icons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../../../pages/Home/Home';

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
                <Link to={val.link}/>
                </li>
          ))}
        </ul>
    </div>
  );
};

export default Header;
