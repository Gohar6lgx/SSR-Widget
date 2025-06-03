import React from "react";
import LoadCSS from "./LoadCss";

const page = () => {
  return (
    <>
      <LoadCSS />
      <div
        className="microservice-cont"
        data-id="185754"
        data-type="match-com"
        data-sport="football"
        data-difference="+5"
        data-base-url="https://cms.cyberstate-tech.com/api/v1"
        data-head="match"
        data-ssr="false"
        data-loadcss="true"
      ></div>
    </>
  );
};

export default page;
