import Link from "next/link";

export default function Page() {
  return (
    <div>
      <ul>
        <li><Link href='/create'>部屋を建てる</Link></li>
        <li><Link href='/enter'>部屋に入る</Link></li>
      </ul>
      
    </div>
  );
}
