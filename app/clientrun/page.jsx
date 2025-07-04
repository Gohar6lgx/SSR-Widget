"use client";

import { useEffect } from "react";

export default function WidgetPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ipublisher-microservices.6lgx.com/widget/index.js";
    script.defer = true;
    document.head.append(script);
  }, []);
  return (
    <div
      class="microservice-cont"
      data-id="171064"
      data-type="match-page"
      data-sport="football"
      data-difference="+5"
      data-base-url="https://cms.cyberstate-tech.com/api/v1"
      data-head="match"
      data-ssr="false"
      data-loadcss="false"
    ></div>
  );
}
