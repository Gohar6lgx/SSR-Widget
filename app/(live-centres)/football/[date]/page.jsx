// import LoadScript from "@/app/components/LoadScript";

import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  let { sport, date } = await params;
  let queryDate =
    date === "live" ? new Date().toISOString().split("T")[0] : date;
  const res = await fetch(
    `https://ipublisher-microservices.6lgx.com/loadwidget?dataId=171064&dataDate=${queryDate}&dataType=live-match-detail&dataLive=${date === "live" ? "true" : "false"
    }&sport=football&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=match&dataPath=football`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
