import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  const { sport, id, type } = await params;

  let dataType = type === "results" ? "finished" : type;
  const res = await fetch(
    `https://ipublisher-microservices.6lgx.com/loadwidget?dataId=${id}&dataSSR=ssr&dataDate=2025-05-19&dataType=team-${type}&data-head=true&sport=football&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=team&dataPath=football-live-centre&dataTitle=Team ${dataType}`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
