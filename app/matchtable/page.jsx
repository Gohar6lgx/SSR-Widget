import Link from "next/link";
import LoadScript from "../components/LoadScript";

export default async function WidgetPage() {
  const res = await fetch(
    "https://ipublisher-microservices.6lgx.com/loadwidget?dataId=171064&dataType=match-table&sport=football&difference=+5&baseUrl=https://cms.cyberstate-tech.com/api/v1&head=match"
  );
  const html = await res.text();

  return (
    <>
      <Link href="/loadwidget">Load Widget</Link>
      <LoadScript />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
