
export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2>

      <p className="wd-border-fat wd-border-red wd-border-solid">
        Solid fat red border
      </p>

      <p className="wd-border-thin wd-border-blue wd-border-dashed">
        Dashed thin blue border
      </p>

      
{/* On Your Own - CSS Borders */}

<p className="wd-border-fat wd-border-dashed wd-border-yellow">
  This is my own example demonstrating a thick,
  dashed yellow border using existing CSS classes.
</p>


{/* With AI - CSS Borders */}

<p
  id="wd-ai-border"
  className="wd-border-fat wd-border-dashed wd-border-yellow"
>
  This is an additional example demonstrating
  a thick, dashed yellow border using reusable CSS classes.
</p>


    </div>
  );
}
