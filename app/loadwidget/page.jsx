import Link from "next/link";
import LoadScript from "../components/LoadScript";

export default async function WidgetPage() {
  const res = await fetch(
    "http://localhost:3009/loadwidget?dataId=171064&dataSSR=ssr&dataType=live-match-detail&sport=football&difference=+5&baseUrl=https://cms.footballfirst.com/api/v1&head=match"
  );
  const html = await res.text();
  return (
    <>
      <Link href="/matchtable">Match Table</Link>
      <LoadScript />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
