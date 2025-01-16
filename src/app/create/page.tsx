import NavBar from "../_components/navbar";
import CreateShowForm from "./_components/form";

export default function CreateShow() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white bg-gradient-to-b text-black">
      <div className="container flex flex-col items-center justify-between">
        <NavBar />
        {/* Create Show */}

        <div className="w-full max-w-[500px]">
          <CreateShowForm />
        </div>

        {/* Preview */}
      </div>
    </main>
  );
}
