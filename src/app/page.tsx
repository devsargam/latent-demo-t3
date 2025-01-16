import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import NavBar from "./_components/navbar";
import Image from "next/image";
import { MarqueeDemo } from "./_components/marquee-home";

export default async function Home() {
  const hello = await api.post.hello({ text: "from super 30" });
  const session = await auth();

  if (session?.user) {
    console.log("Fetching latest post");
    void api.post.getLatest.prefetch();
  }

  /*

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
            */

  /*

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
            */

  return (
    <HydrateClient>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center bg-white bg-gradient-to-b text-black">
        <div className="container flex flex-row items-center justify-between">
          <h1 className="text-9xl font-bold text-gray-700">
            India&apos;s Got Latent 🎤
          </h1>
          <Image
            src="/samay.jpg"
            alt="Samay Photo"
            height={300}
            width={300 * 1.8}
          />
        </div>
        <MarqueeDemo />
        {/* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          {session?.user && <LatestPost />}
        </div> */}
      </main>
    </HydrateClient>
  );
}
