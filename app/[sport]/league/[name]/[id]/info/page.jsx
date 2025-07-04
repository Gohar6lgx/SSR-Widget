import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  const { sport, id } = await params;
  const res = await fetch(
    `https://ipublisher-microservices.6lgx.com/loadwidget?dataId=${id}&dataSSR=ssr&dataDate=2025-05-19&dataType=league-info&sport=football&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=league&dataPath=football-live-centre&dataTitle=LeagueUpcomings`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
