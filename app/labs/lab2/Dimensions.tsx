
export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>

      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">
          Portrait
        </div>

        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>

        <div className="wd-dimension-square wd-bg-color-red">
          Square
        </div>

        
{/* On Your Own - Custom Dimension Box */}
<div className="wd-my-dimension">
  My custom box has a fixed width of 180px
  and a fixed height of 100px.
</div>


{/* With AI - Fixed Dimension Box */}
<div id="wd-ai-dimension" className="wd-ai-dimension">
  This is a long sentence demonstrating how a box
  keeps its declared width of 120px and height of
  60px even when the text inside is very long.
</div>



      </div>
    </div>
  );
}
