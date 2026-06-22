import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white h-19">
  <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <Link href="/">
 <Image
  src="/images/logo1.png"
  alt="ADFIL"
  width={155}
  height={80}
  className="object-contain"
/>
</Link>

        <div className="flex gap-6">
          <Link href="/">Početna</Link>
          <Link href="/o-nama">O nama</Link>
          <Link href="/brend">ADFIL</Link>
          <Link href="/katalog">Katalog</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
}