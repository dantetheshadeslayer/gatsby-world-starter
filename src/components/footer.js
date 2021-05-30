import * as React from "react";
import "./footer.scss";
const today = new Date();

const Footer = () => (
  <footer>
    <div class="container container-fluid">
      {/* prettier-ignore */}
      <p>Built with coffee. Copyright{" "}<a href="https://aerocreate.com/">Aero Create</a> © {today.getFullYear()}.</p>
    </div>
  </footer>
);

export default Footer;
