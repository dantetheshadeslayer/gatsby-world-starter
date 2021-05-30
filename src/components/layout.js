import * as React from "react";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import layoutStyle from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={layoutStyle.container}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
