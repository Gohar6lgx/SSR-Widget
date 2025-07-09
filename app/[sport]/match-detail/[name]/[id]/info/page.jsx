// import LoadScript from "@/app/components/LoadScript";

import LoadScript from "@/app/components/LoadScript";
export default async function WidgetPage({ params }) {
  const { sport, id } = await params;
  const res = await fetch(
    `http://localhost:3009/loadwidget?dataId=${id}&dataSSR=ssr&dataDate=2025-05-19&dataType=match-info&data-head=true&sport=football&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=match&dataPath=football-live-centre&dataTitle=Ftable`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
