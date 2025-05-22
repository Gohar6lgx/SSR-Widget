"use client";
import React, { useEffect } from "react";

export default function LoadScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ipublisher-microservices.6lgx.com/client.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}
