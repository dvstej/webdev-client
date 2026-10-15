
export default function TailwindGrids() {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Tailwind Grids
      </h2>

      <div>
        <h4 className="mt-6 text-lg font-bold">
          4 Columns Grid
        </h4>

        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className="text-center bg-blue-300 p-3"
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mt-6 text-lg font-bold">
          3 Columns Grid
        </h4>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center bg-blue-300 p-3">01</div>
          <div className="text-center bg-blue-300 p-3">02</div>
          <div className="text-center bg-blue-300 p-3">03</div>
          <div className="text-center bg-blue-300 p-3 col-span-2">04</div>
          <div className="text-center bg-blue-300 p-3">05</div>
          <div className="text-center bg-blue-300 p-3">06</div>
          <div className="text-center bg-blue-300 p-3 col-span-2">07</div>
        </div>
      </div>

      <div id="wd-tailwind-grid-system" className="mt-6">
        <h2 className="text-2xl font-bold">
          Grid system
        </h2>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-red-500 text-white">
            <h3 className="text-lg font-bold">Left half</h3>
          </div>

          <div className="bg-blue-500 text-white">
            <h3 className="text-lg font-bold">Right half</h3>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-4 bg-yellow-500">
            <h3 className="text-lg font-bold">One third</h3>
          </div>

          <div className="col-span-8 bg-green-500 text-white">
            <h3 className="text-lg font-bold">Two thirds</h3>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-2 bg-black text-white">
            <h3 className="text-lg font-bold">Sidebar</h3>
          </div>

          <div className="col-span-8 bg-gray-500 text-white">
            <h3 className="text-lg font-bold">Main content</h3>
          </div>

          <div className="col-span-2 bg-blue-400">
            <h3 className="text-lg font-bold">Sidebar</h3>
          </div>
        </div>
        
{/* On Your Own - Three Equal Columns */}
<h3 className="text-lg font-bold mt-6 mb-2">
  My Personal Grid
</h3>

<div className="grid grid-cols-12 gap-2 mt-2">
  <div className="col-span-4 bg-purple-300 p-4 text-center">
    Column 1
  </div>

  <div className="col-span-4 bg-pink-300 p-4 text-center">
    Column 2
  </div>

  <div className="col-span-4 bg-orange-300 p-4 text-center">
    Column 3
  </div>
</div>


{/* With AI - 3/9 Grid */}
<h3 className="text-lg font-bold mt-6 mb-2">
  AI Grid - 3/9 Split
</h3>

<div
  id="wd-ai-grid"
  className="grid grid-cols-12 gap-2 mt-2"
>
  <div className="col-span-3 bg-indigo-300 p-4 text-center">
    3 Columns
  </div>

  <div className="col-span-9 bg-teal-300 p-4 text-center">
    9 Columns
  </div>
</div>


      </div>
    </div>
  );
}
