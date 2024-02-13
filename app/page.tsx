import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[100%] h-[100vh] flex justify-center items-center gap-[100px] bg-black">
      <Link href="/component" className="px-[15px] py-[8px] rounded-[5px] bg-[#3264a1] no-underline text-[#fff]">Home work 1</Link>
      <Link href="/component2" className="px-[15px] py-[8px] rounded-[5px] bg-[#3264a1] no-underline text-[#fff]">Home work 2</Link>
    </main>
  );
}
