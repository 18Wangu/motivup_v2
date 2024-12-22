import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-around w-full">
        <Link href="/">
            <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg"
                alt="Defis"
                width={50}
                height={50}
            />
        </Link>
        <Link href="pages/recompenses">
            <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg"
                alt="Recompenses"
                width={50}
                height={50}
            />
        </Link>
        <Link href="/pages/leaderboard">
            <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg"
                alt="Classement"
                width={50}
                height={50}
            />
        </Link>
        <Link href="/pages/profil">
            <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg"
                alt="Profil"
                width={50}
                height={50}
            />
        </Link>
      </div>
    );
}
