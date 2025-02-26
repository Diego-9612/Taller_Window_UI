export default function Home() {
  return (
    <div className="h-screen w-screen grid bg items-center justify-center bg-gray-100">

      <main className="w-96 rounded-xl overflow-hidden shadow-lg border-2 border-gray-300 bg-white">

        <section className="py-2 border-b-2 border-gray-300 mx-4 my-2">
          <h1 className="text-xl  text-gray-700 font-bold">Appearance</h1>
          <p className="text-xs text-gray-400 font-medium">Set or customize your preferences for the system</p>
        </section>
        <section className="py-2 border-b-2 border-gray-300 mx-4 flex justify-between">
          <section>
            <h3 className="text-sm text-gray-600 font-semibold">Language</h3>
            <p className="text-xs text-gray-400 font-normal">Select the language of the platform</p>
          </section>
          <section className="ml-6">
            <select className="border-2 border-gray-200 rounded-xl bg-slate-50 py-2 px-4 text-xs text-gray-400">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </section>
        </section>
        <section className="py-2 border-b-2 border-gray-300 mx-4 my-2">
          <section>
            <h3 className="text-sm text-gray-600 font-semibold">Interface theme</h3>
            <p className="text-xs text-gray-400 font-normal">Customize your application appearance</p>
          </section>
          <section className="p-3 grid grid-cols-3 gap-4">
            <span className="h-20 bg-gray-200 rounded-md"></span>
            <span className="h-20 bg-gray-200 rounded-md border-2 border-blue-400"></span>
            <span className="h-20 bg-gray-200 rounded-md"></span>
          </section>
        </section>
        <section className="py-2 border-b-2 border-gray-300 mx-4 my-2 flex justify-between">
          <section>
            <h3 className="text-sm text-gray-600 font-semibold">Accent color</h3>
            <p className="text-xs text-gray-400 font-normal">Pick your platforms main color</p>
          </section>
          <section className="flex space-x-1">
            <div className="w-5 h-5 bg-red-400 rounded-full cursor-pointer hover:scale-110 transition"></div>
            <div className="w-5 h-5 bg-yellow-400 rounded-full cursor-pointer hover:scale-110 transition"></div>
            <div className="w-5 h-5 bg-green-400 rounded-full cursor-pointer hover:scale-110 transition"></div>
            <div className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer hover:scale-110 transition"></div>
            <div className="w-5 h-5 bg-pink-400 rounded-full cursor-pointer hover:scale-110 transition"></div>
          </section>
        </section>
        <section className="py-2 border-b-2 border-gray-300 mx-4 my-2 flex justify-between">
          <h3 className="text-sm text-gray-600 font-semibold">  Reduce motion</h3>
        </section>
        <section className="py-2 border-b-2 border-gray-300 mx-4 my-2 flex justify-between">
          <h3 className="text-sm text-gray-600 font-semibold">Auto play</h3>
        </section>
        <section className="py-2 border-b-2 border-gray-300 mx-4 my-2 flex justify-between">
          <h3 className="text-sm text-gray-600 font-semibold">High quality photo</h3>
        </section>
        <section className="py-2 border-b-2 border-gray-300 mx-4 my-2 flex justify-between"></section>



      </main>

    </div>
  );
}
