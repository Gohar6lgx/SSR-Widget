"use client";
import { useEffect } from "react";

export default function LoadCSS() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ipublisher-microservices.6lgx.com/widget/index.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}
