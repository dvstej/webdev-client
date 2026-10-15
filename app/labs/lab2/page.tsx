
import "./index.css";

import ForegroundColors from "./ForegroundColors";

import BackgroundColors from "./BackgroundColors";

import Borders from "./Borders";


import Padding from "./Padding";


import Margins from "./Margins";


import BoxModel from "./BoxModel";


import Corners from "./Corners";

import Dimensions from "./Dimensions";


import Display from "./Display";


import Positions from "./Positions";


import Zindex from "./Zindex";


import Float from "./Float";



import GridLayout from "./GridLayout";


import Flex from "./Flex";


import MediaQueriesDemo from "./MediaQueriesDemo";



import ReactIconsSampler from "./ReactIconsSampler";




export default function Lab2() {
  return (
<div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      
<h3>Styling with the STYLE attribute</h3>


<p>
  Style attribute allows configuring look and feel right on the
  element. Although it&apos;s very convenient it is considered bad
  practice and you should avoid using the style attribute
</p>



<p style={{ backgroundColor: "green", color: "yellow" }}>
  This is my own paragraph with a green background
  and yellow text.
</p>


<p
  id="wd-ai-style-attr"
  style={{ backgroundColor: "purple", color: "white" }}
>
  This paragraph demonstrates styling with a purple
  background and white text.
</p>


<div id="wd-css-id-selectors">
  <h3>ID selectors</h3>

  <p id="wd-id-selector-1">
    Instead of changing the look and feel of all the
    elements of the same name, e.g., P, we can refer to a
    specific element by its ID
  </p>

  <p id="wd-id-selector-2">
    Here&apos;s another paragraph using a different ID and a
    different look and feel
  </p>

  
<p id="wd-id-selector-3">
  This is my third paragraph using a unique ID
  with a light blue background and dark blue text.
</p>


<p id="wd-ai-id-selector">
  This is an additional example demonstrating how
  CSS ID selectors can style individual paragraphs.
</p>

 <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>

        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>

        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>

        
<p className="wd-your-class">
  This is my own paragraph using a custom CSS class
  with a light green background and dark green text.
</p>

<h4 className="wd-your-class">
  This heading uses the same CSS class as the paragraph above.
</h4>


<p className="wd-ai-class-selector">
  This paragraph demonstrates using a CSS class
  with a light pink background and dark red text.
</p>

<h4 className="wd-ai-class-selector">
  This heading shares the same CSS class as
  the paragraph above.
</h4>

{/* Section 2.1.5 - Document Structure Selectors */}

<div id="wd-css-document-structure">
  <div className="wd-selector-1">
    <h3>Document structure selectors</h3>

    <div className="wd-selector-2">
      Selectors can be combined to refer elements in particular
      places in the document

      <p className="wd-selector-3">
        This paragraph&apos;s red background is referenced as
        <br />
        .wd-selector-1 .wd-selector-3
        <br />
        meaning the descendant of some ancestor.
        <br />

        <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span>
        
<br />

<span className="wd-my-selector">
  This is my own nested span with a light green
  background and dark green text.
</span>

<br />

<span className="wd-ai-selector-5">
  This is an AI-generated example demonstrating
  descendant selectors with a light blue background
  and dark blue text.
</span>



        <br />
        You can combine these relationships to create specific
        styles depending on the document structure
      </p>
    </div>
  </div>
</div>


 </div>
</div>

{/* Section 2.1.6 - CSS Selection Rule Mechanism */}

<div id="wd-css-specificity">
  <h3>CSS Selection Rule Mechanism</h3>

  <p id="wd-my-cascade" className="wd-my-cascade">
    This paragraph matches three CSS rules:
    a tag selector, a class selector, and an ID selector.
    The ID selector wins, so the background is red.
  </p>
  
{/* With AI - CSS Specificity Example */}

<div id="wd-ai-cascade-example">
  <h4>With AI - CSS Specificity</h4>

  <p id="wd-ai-cascade" className="wd-ai-cascade">
    This paragraph matches three CSS rules:
    a tag selector, a class selector, and an ID selector.
    The ID selector wins, so the background is red.
  </p>
</div>

</div>
 {/* Section 2.1.7 - Foreground Colors */}
      <ForegroundColors />
      
{/* Section 2.1.8 - Background Colors */}
<BackgroundColors />


{/* Section 2.1.9 - CSS Borders */}
<Borders />


{/* Section 2.1.10 - CSS Padding */}
<Padding />


{/* Section 2.1.10 - CSS Margins */}
<Margins />


{/* Section 2.1.10 - CSS Box Model */}
<BoxModel />


{/* Section 2.1.11 - Rounded Corners */}
<Corners />


{/* Section 2.1.12 - CSS Dimensions */}
<Dimensions />


{/* Section 2.1.12 - CSS Display */}
<Display />


{/* Section 2.1.13 - Relative Position */}
<Positions />


{/* Section 2.1.16 - Z Index */}
<Zindex />


{/* Section 2.1.17 - CSS Float */}
<Float />


{/* Section 2.1.18 - Grid Layout */}
<GridLayout />


{/* Section 2.1.19 - CSS Flexbox */}
<Flex />


{/* Section 2.1.20 - Media Queries */}
<MediaQueriesDemo />


{/* Section 2.2 - React Icons */}
<ReactIconsSampler />


{/* Section 2.3 - Tailwind CSS */}
<p>
  <a href="/labs/lab2/tailwind">
    Open Tailwind CSS lab →
  </a>
</p>




 

    </div>
  );
}

