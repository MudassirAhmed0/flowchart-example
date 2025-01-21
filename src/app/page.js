import BeCareful from "@/components/be-careful/Index";
import getBeCarefulData from "@/lib/data-hooks/getBeCarefulData";

export const revalidate = 432000;

export default async function HomePage() {
  const data = await getBeCarefulData("becareful", "arabic");

  return (
    <div className="rtl">
      <BeCareful data={data?.page} />
    </div>
  );
}
