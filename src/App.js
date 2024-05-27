import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Topics covered</h1>
      <p>
        The following is a list of all the topics we cover in the MDN learning
        area.
      </p>
      <section>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
          target="_blank"
        >
          Getting started with the web
        </a>
        <p className="content">
          Provides a practical introduction to web development for complete
          beginners.
        </p>
      </section>
      <section>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
          target="_blank"
        >
          HTML — Structuring the web
        </a>
        <p className="content">
          HTML is the language that we use to structure the different parts of
          our content and define what their meaning or purpose is. This topic
          teaches HTML in detail.
        </p>
      </section>
      <section>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
          target="_blank"
        >
          CSS — Styling the web
        </a>
        <p className="content">
          CSS is the language that we use to control our web content's style and
          layout, as well as adding behavior like animation. This topic provides
          comprehensive coverage of CSS.
        </p>
      </section>
    </div>
  );
}
