import Link from "next/link";
import LoadScript from "../components/LoadScript";

export default async function WidgetPage() {
  const res = await fetch(
    "${process.env.NEXT_PUBLIC_SITEBASE_URL}/loadwidget?dataId=171064&dataType=match-table&sport=football&difference=+5&baseUrl=https://cms.footballfirst.com/api/v1&head=match"
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
