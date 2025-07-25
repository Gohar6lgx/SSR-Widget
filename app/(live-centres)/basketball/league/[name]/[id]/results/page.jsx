import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  const { sport, id } = await params;
  const res = await fetch(
    `https://ipublisher-microservices.6lgx.com/loadwidget?dataId=${id}&dataDate=2025-05-19&dataType=league-finished&sport=basketball&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=league&dataPath=basketball&dataTitle1=Basketball Results`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
