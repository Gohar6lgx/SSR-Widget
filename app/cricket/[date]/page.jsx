// import LoadScript from "@/app/components/LoadScript";

import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  let { date } = await params;
  let queryDate =
    date === "live" ? new Date().toISOString().split("T")[0] : date;
  const res = await fetch(
    `http://localhost:3009/loadwidget?dataId=171064&dataSSR=ssr&dataDate=${queryDate}&dataType=live-match-detail&dataLive=${
      date === "live" ? "true" : "false"
    }&sport=cricket&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=match&dataPath=cricket`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
