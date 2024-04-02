import { wait } from "@/app/lib/wait";
import Link from "next/link";

export default async function Quiz() {
  await wait(3000)
  return (
      <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">
          QUIZ

          <Link href="/dashboard/modal"> Open Modal </Link>
      </div>
  );
}
