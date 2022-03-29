import { useEffect, useState } from 'react';
import './Header.scss';
import { icons } from './icons';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";

const Header = () => {

  const location = useLocation();

  const {pathname} = location;
  const splitLocation = pathname.split("/");

  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() =>{
      console.log(pathname);
  }, [location])

  return (
    <div className="header">
        <h1>movie search</h1>
        <ul className="header__icons">
          {icons.map((val,key) =>(
              <li className=
              {`${"/"+ splitLocation[1] === val.link ? "active" : ""}`}
              key={key}
              onClick={() => {
                setSelectedLink(val.link);
              }}
              >
                <Link to={val.link} >{val.icon}</Link>
                </li>
          ))}
        </ul>
    </div>
  );
};

export default Header;
