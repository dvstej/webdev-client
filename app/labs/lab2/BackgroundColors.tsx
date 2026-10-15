
export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">
        Background color
      </h2>

      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      
{/* On Your Own - Background and Foreground Colors */}

<div className="wd-bg-color-yellow wd-fg-color-black">
  This is my own example demonstrating a yellow
  background with black text for better readability.
</div>

{/* With AI - Background Colors */}

<div
  id="wd-ai-bg"
  className="wd-bg-color-yellow wd-fg-color-black"
>
  This example demonstrates how background and
  foreground color classes work together to
  create readable text.
</div>



    </div>
  );
}
