import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div class="md:container md:mx-auto">
        <div class="space-y-4 font-mono font-bold text-xs text-white">
          <div className="flex space-x-4">
            <div className="w-[100rem] px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-1/2
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
