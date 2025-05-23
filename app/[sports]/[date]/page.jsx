// import LoadScript from "@/app/components/LoadScript";

import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  const { sport, date } = await params;
  const res = await fetch(
    `http://localhost:3009/loadwidget?dataId=171064&dataSSR=ssr&dataDate=${date}&dataType=live-match-detail&sport=football&difference=+5&baseUrl=https://cms.footballfirst.com/api/v1&head=match`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
