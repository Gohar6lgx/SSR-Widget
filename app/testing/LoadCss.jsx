"use client";
import { useEffect } from "react";

export default function LoadCSS() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://localhost:3009/widget/index.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}
