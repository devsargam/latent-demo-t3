import { api } from "~/trpc/server";
import NavBar from "../_components/navbar";
import { Show } from "@prisma/client";
import Script from "next/script";

export default async function ShowPage() {
  const shows = await api.show.get();

  return (
    <main className="flex min-h-screen flex-col items-center bg-white bg-gradient-to-b text-black">
      <div className="container flex flex-col items-center justify-between">
        <NavBar />

        {shows.length > 0 ? (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {shows.map((show) => (
              <ShowComponent key={show.id} show={show} />
            ))}
          </div>
        ) : (
          <div>
            <p className="text-xl font-bold text-gray-700">
              There are no any shows to show
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

function ShowComponent({ show }: { show: Show }) {
  return (
    <div className="relative flex flex-col overflow-clip rounded-t-2xl border border-black">
      <div className="aspect-video max-h-36">
        <img
          height={200}
          width={200 * 1.6}
          className="aspect-video object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxQph8t4H-BaPQ741tTVgpu2alKa-LGivGw&s"
        />
      </div>
      <div className="absolute right-2 top-2 rounded-full bg-white px-1 text-xs">
        ₹ {show.ticketPrice}
      </div>
      <div className="p-1">
        <div className="text-sm">{show.title}</div>
        <div className="truncate text-xs">{show.description}</div>
      </div>
    </div>
  );
}
