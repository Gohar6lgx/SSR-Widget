"use client";
import React, { useEffect } from "react";

export default function LoadScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://localhost:3009/widget/index.js";
    script.defer = true;
    document.body.append(script);
    // const link = document.createElement("link");
    // link.href ="https://ipublisher-microservices.6lgx.com/public/assets/css/matchpage.min.css";
    // link.rel = "stylesheet";
    // document.head.append(link);
    return () => {
      document.body.removeChild(script);
      //   document.head.remove(link);
    };
  }, []);
  return null;
}
