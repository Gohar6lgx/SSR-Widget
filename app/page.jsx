import LoadScript from "./components/LoadScript";

export default async function WidgetPage({ }) {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const res = await fetch(
    `https://ipublisher-microservices.6lgx.com/loadwidget?dataId=171064&dataDate=${today}&dataType=live-match-detail&sport=football&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=match&dataPath=football`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
