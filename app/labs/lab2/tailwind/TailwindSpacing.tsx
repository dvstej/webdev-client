
export default function TailwindSpacing() {
  return (
    <div>
      <h2 className="text-3xl">Margin</h2>

      <div className="bg-blue-200 mb-4 p-4">
        This div has a bottom margin of 4.
      </div>

      <div className="bg-blue-200 ms-4 me-8 p-4">
        This div has a start margin of 4 and an end margin of 8.
      </div>

      <h2 className="text-3xl mt-8">Padding</h2>

      <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
        This div has starting padding of 2, top padding of 4,
        and bottom padding of 8.
      </div>

      <div className="bg-green-200 p-6">
        This div has padding all around of 6.
      </div>
      
{/* On Your Own - Directional Spacing */}
<h2 className="text-3xl mt-8">On Your Own - Spacing</h2>

<div className="bg-orange-200 mt-6 ms-8 ps-4 pt-6 pb-8">
  This box has top margin of 6, start margin of 8,
  start padding of 4, top padding of 6,
  and bottom padding of 8.
</div>


{/* With AI - Directional Spacing */}
<h2 className="text-3xl mt-8">With AI - Spacing</h2>

<div
  id="wd-ai-spacing"
  className="bg-purple-200 mt-6 ps-8 pb-4"
>
  This box has a top margin of 6, start padding of 8,
  and bottom padding of 4.
</div>


    </div>
  );
}
