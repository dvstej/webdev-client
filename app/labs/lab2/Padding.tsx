
export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>

      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>

      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>

      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>

      
{/* On Your Own - Custom Per-Side Padding */}
<div className="wd-my-custom-padding wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
  My custom padding: 70px top, 20px right,
  30px bottom, and 60px left.
</div>


{/* With AI - Padding Top Only */}
<div
  id="wd-ai-padded"
  className="wd-ai-padding-top wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
>
  AI padding example: 80px padding at the top only.
</div>


    </div>
  );
}
