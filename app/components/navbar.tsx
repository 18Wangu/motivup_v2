"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 flex justify-around w-full py-3 border-t-2 border-[#37464f] bg-[#131f24]">
      <Link 
        href="/pages/defis"
        className={pathname === "/pages/defis" ? "border-2 border-[#3f85a7] bg-[#202f36] rounded-xl p-1 text-2xl" : "border-2 border-[#131f24] rounded-xl p-1 text-2xl"}
      >
        🎯
      </Link>
      <Link
        href="/pages/recompenses"
        className={pathname === "/pages/recompenses" ? "border-2 border-[#3f85a7] bg-[#202f36] rounded-xl p-1" : "border-2 border-[#131f24] rounded-xl p-1"}
      >
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg"
          alt="Recompenses"
          width={30}
          height={30}
        />
      </Link>
      <Link 
        href="/pages/leaderboard"
        className={pathname === "/pages/leaderboard" ? "border-2 border-[#3f85a7] bg-[#202f36] rounded-xl p-1" : "border-2 border-[#131f24] rounded-xl p-1"}
      >
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg"
          alt="Classement"
          width={30}
          height={30}
        />
      </Link>
      <Link
        href="/pages/profil"
        className={pathname === "/pages/profil" ? "border-2 border-[#3f85a7] bg-[#202f36] rounded-xl p-1" : "border-2 border-[#131f24] rounded-xl p-1"}
      >
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg"
          alt="Profil"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
