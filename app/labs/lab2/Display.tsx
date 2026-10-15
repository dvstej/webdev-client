
export default function Display() {
  return (
    <div id="wd-css-display">
      <h2>Display</h2>

      <h3>Inline</h3>
      <div>
        <span className="wd-display-inline wd-bg-color-red">
          Inline 1
        </span>
        <span className="wd-display-inline wd-bg-color-yellow">
          Inline 2
        </span>
        <span className="wd-display-inline wd-bg-color-blue wd-fg-color-white">
          Inline 3
        </span>
      </div>

      <h3>Inline-block</h3>
      <div>
        <span className="wd-display-inline-block wd-bg-color-red">
          Inline-block 1
        </span>
        <span className="wd-display-inline-block wd-bg-color-yellow">
          Inline-block 2
        </span>
        <span className="wd-display-inline-block wd-bg-color-blue wd-fg-color-white">
          Inline-block 3
        </span>
      </div>

      <h3>Block</h3>
      <div>
        <span className="wd-display-block wd-bg-color-red">
          Block 1
        </span>
        <span className="wd-display-block wd-bg-color-yellow">
          Block 2
        </span>
        <span className="wd-display-block wd-bg-color-blue wd-fg-color-white">
          Block 3
        </span>

      </div>

      
{/* On Your Own - Inline Div Experiment */}
<h3>My Inline Div Experiment</h3>

<div className="wd-display-inline wd-bg-color-yellow">
  This is a div forced to display inline.
  Its 150px width is ignored!
</div>


{/* With AI - Inline Div Example */}
<h3>AI Inline Div Experiment</h3>

<div
  id="wd-ai-display"
  className="wd-display-inline wd-bg-color-red"
>
  AI example: This div uses display inline,
  so its declared width of 150px is ignored.
</div>


    </div>
  );
}
