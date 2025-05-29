import LoadScript from "./components/LoadScript";

export default async function WidgetPage({}) {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITEBASE_URL}/loadwidget?dataId=171064&dataSSR=ssr&dataDate=${today}&dataType=live-match-detail&sport=football&difference=+5&baseUrl=https://cms.footballfirst.com/api/v1&head=match`
  );
  const html = await res.text();

  return (
    <>
      <LoadScript />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
