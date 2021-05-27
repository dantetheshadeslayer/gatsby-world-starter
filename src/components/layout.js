import * as React from "react";
import Header from "./header.js";
import Footer from "./footer.js";

export default function Layout({ children }) {
  return (
    <div class="container container-fluid">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
