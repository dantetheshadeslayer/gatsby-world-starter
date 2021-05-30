import * as React from "react";
import { Link } from "gatsby";
import "./header.scss";

const Header = () => (
  <header>
    <div className="inner-header">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
