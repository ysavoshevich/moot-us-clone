import React from "react";
import { Helmet } from "react-helmet";

function Head({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? title : "moot.us clone"}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
}

export default Head;
