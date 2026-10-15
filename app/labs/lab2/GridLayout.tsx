
export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout</h2>

      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-yellow">
          <h3>Left half</h3>
        </div>

        <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right half</h3>
        </div>
      </div>

      <div className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
          <h3>Side bar</h3>
        </div>

        <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
          <h3>Main content</h3>
        </div>

        <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
          <h3>Side bar</h3>
        </div>
      </div>

      
{/* On Your Own - 40% / 60% Grid Layout */}
<div className="wd-grid-row">
  <div className="wd-my-grid-left wd-bg-color-yellow">
    <h3>My Left Column - 40%</h3>
  </div>

  <div className="wd-my-grid-right wd-bg-color-blue wd-fg-color-white">
    <h3>My Right Column - 60%</h3>
  </div>
</div>


{/* With AI - 33% / 67% Grid Layout */}
<div id="wd-ai-grid" className="wd-grid-row">
  <div className="wd-grid-col-third-page wd-bg-color-yellow">
    <h3>AI Left Column - 33%</h3>
  </div>

  <div className="wd-grid-col-two-thirds-page wd-bg-color-blue wd-fg-color-white">
    <h3>AI Right Column - 67%</h3>
  </div>
</div>


    </div>
  );
}
