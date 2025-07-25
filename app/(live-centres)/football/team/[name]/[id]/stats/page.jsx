import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  const { sport, id } = await params;
  const res = await fetch(
    `https://ipublisher-microservices.6lgx.com/loadwidget?dataId=${id}&dataDate=2025-05-19&dataType=team-stats&sport=football&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=team&dataPath=football&dataTitle1=Team Page`
  );
  const html = await res.text();

  console.log("here");
  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
