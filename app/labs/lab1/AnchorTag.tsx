export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="https://www.reddit.com" id="wd-your-link">
        Reddit
      </a>
      <br />
       <a
        href="https://www.linkedin.com/in/sai-teja-dvs/"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My LinkedIn
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
        target="_blank"
        rel="noreferrer"
      >
        MDN: table element
      </a>
    </>
  );
}