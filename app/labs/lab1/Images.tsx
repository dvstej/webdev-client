export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
     <br />
      Something I like:
      <br />
      <img
        id="wd-your-image"
        width="300px"
        alt="A golden retriever puppy sitting in grass"
        src="https://images.unsplash.com/photo-1552053831-71594a27632d"
      />
      <br />
      Nasa Image
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Pale Blue Dot photo of Earth taken by Voyager 1"
        src="https://images-assets.nasa.gov/image/PIA23122/PIA23122~orig.jpg"
      />
    </div>
  );
} 