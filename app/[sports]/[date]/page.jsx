// import LoadScript from "@/app/components/LoadScript";

import Script from "next/script";
export default async function WidgetPage({ params }) {
  const { sport, date } = await params;
  const res = await fetch(
    `https://ipublisher-microservices.6lgx.com/loadwidget?dataId=171064&dataSSR=ssr&dataDate=${date}&dataType=live-match-detail&sport=football&difference=+5&baseUrl=https://cms.footballfirst.com/api/v1&head=match`
  );
  const html = await res.text();

  return (
    <>
      <Script
        src="http://localhost:3009/widget/index.js"
        strategy="afterInteractive" // avoids blocking, still preloads
        crossOrigin="anonymous" // matches the automatic preload tag
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
