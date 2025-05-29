// import LoadScript from "@/app/components/LoadScript";

import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  let { sport, date } = await params;
  let queryDate =
    date === "live" ? new Date().toISOString().split("T")[0] : date;
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITEBASE_URL
    }/loadwidget?dataId=171064&dataSSR=ssr&dataDate=${queryDate}&dataType=live-match-detail&dataLive=${
      date === "live" ? "true" : "false"
    }&sport=football&difference=+5&baseUrl=https://cms.footballfirst.com/api/v1&head=match&dataPath=football-live-centre`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
