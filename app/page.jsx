import LoadScript from "./components/LoadScript";

export default async function WidgetPage({}) {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const res = await fetch(
    `http://localhost:3009/loadwidget?dataId=171064&dataSSR=ssr&dataDate=${today}&dataType=live-match-detail&sport=football&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=match&dataPath=football-live-centre`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
