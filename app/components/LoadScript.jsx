"use client";
import React, { useEffect } from "react";

export default function LoadScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `http://localhost:3009/client.js`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}
