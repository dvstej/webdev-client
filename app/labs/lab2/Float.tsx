
const STARSHIP =
  "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";

const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>

      <div>
        <img
          className="wd-float-right"
          src={STARSHIP}
          alt="Starship"
        />
        {LOREM} {LOREM}

        <img
          className="wd-float-left"
          src={STARSHIP}
          alt="Starship"
        />
        {LOREM} {LOREM}

        <img
          className="wd-float-right"
          src={STARSHIP}
          alt="Starship"
        />
        {LOREM} {LOREM}

        <img
          className="wd-float-left"
          src={STARSHIP}
          alt="Starship"
        />
        {LOREM} {LOREM}

        <div className="wd-float-done" />
      </div>

      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>

        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>

        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>

        <img
          className="wd-float-right"
          src={STARSHIP}
          alt="Starship"
        />

        <div className="wd-float-done" />

        
{/* On Your Own - Extra Floating Image */}
<div>
  <h3>My Floating Image Experiment</h3>

  <img
    className="wd-float-left"
    src={STARSHIP}
    alt="My floating Starship"
  />

  <p>
    This is my personal float experiment. The Starship image
    floats to the left while this paragraph wraps around it.
    CSS float allows text to flow beside an image instead of
    forcing the image onto a separate line.
    This demonstrates how float left works.
  </p>

  <div className="wd-float-done" />

  
{/* With AI - Floating Colored Box */}
<div>
  <h3>AI Floating Box Experiment</h3>

  <div
    id="wd-ai-float"
    className="wd-float-right wd-bg-color-blue wd-fg-color-white wd-dimension-portrait"
  >
    AI Float Box
  </div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    This paragraph wraps around the blue floating box.
    The box floats to the right while the text flows
    alongside it. This demonstrates how CSS float works
    with colored boxes instead of images.
  </p>

  <div className="wd-float-done" />
</div>

</div>


      </div>
    </div>
  );
}
