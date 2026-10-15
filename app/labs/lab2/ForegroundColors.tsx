
export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>

      <h3 className="wd-fg-color-blue">
        Foreground color
      </h3>

      {/* Textbook Example */}
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">
          this text is green
        </span>
      </p>

      {/* On Your Own - Mixed Foreground Colors */}
      <p className="wd-fg-color-green">
        This sentence starts with green text, but{" "}
        <span className="wd-fg-color-blue">
          these words appear in blue.
        </span>
      </p>

      {/* With AI - Foreground Colors */}
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This paragraph demonstrates blue foreground text, but{" "}
        <span className="wd-fg-color-black">
          this nested span displays black text.
        </span>
      </p>
    </div>
  );
}
