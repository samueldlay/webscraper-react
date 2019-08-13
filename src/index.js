import React, { useEffect, useState, createElement as e } from "react";
import ReactDOM from "react-dom";
import parseHTML from "./parse-html"; // webscrape.js --> parse-html.js
import HilightedCode from "./highlight-code";
import { useFetch } from "./custom-hooks";
import "./styles.css";
import {
  // CacheProvider,
  // ClassNames,
  // Global,
  // ThemeContext,
  css,
  jsx,
  keyframes
  // withEmotionCache,
} from "@emotion/core";

function JSONText(props) {
  if (props.isLoading)
    return (
      <div className="JSONContent">
        <h2>Creating JSON data...</h2>
        <LoadingSpinner />
      </div>
    );

  if (props.error)
    return (
      <div className="JSONContent">
        <h2>{props.error.message}</h2>
      </div>
    );
  //work on hover effect for json data
  return (
    <div className="JSONContent">
      <h3 style={{ color: "rgb(221, 28, 141)" }}>
        Hover over images for JSON data
      </h3>
      {parseHTML(props.data).map(teacher => {
        return (
          <div key={teacher.name}>
            <div className="tooltip">
              <img
                style={{ borderRadius: "5px" }}
                src={teacher.imgThumbnail}
                alt={teacher.name}
              />
              <p>
                {teacher.name}: {teacher.type}
              </p>
              <div className="tooltiptext">
                <HilightedCode json={JSON.stringify(teacher, null, 2)} />
                {/* {JSON.stringify(teacher, null, 2)} */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// optional for ellipses loading
function Loading(props) {
  const dot = ".";
  const [ellipses, setEllipses] = useState(dot);

  useEffect(() => {
    const timerID = setInterval(() => {
      const length = ellipses.length;
      if (length < 3) {
        const newEllipses = new Array(length + 1).fill(dot).join("");
        setEllipses(newEllipses);
      } else setEllipses(dot);
    }, 150);
    return () => clearInterval(timerID);
  }, [ellipses]);

  return (
    <h2>
      {props.string}
      {ellipses}
    </h2>
  );
}

function LoadingSpinner(props) {
  const styles = {
    get frames() {
      return keyframes`
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      `;
    },
    get spinner() {
      return css`
        --size: 4rem;
        height: var(--size);
        width: var(--size);
        animation: 1s linear 0s infinite ${this.frames};
      `;
    }
  };

  return e(
    "div",
    null,
    jsx("img", {
      css: styles.spinner,
      src: "https://loading.io/s/asset/preview/279517.png"
    })
  );
}

function HTMLtext(props) {
  if (props.isLoading) {
    return (
      <div className="otherContent loading">
        <h2>Scraping HTML...</h2>
        <LoadingSpinner />
      </div>
    );
  }

  if (props.error)
    return (
      // if (props.error.response) {
      //   // examine response and write appropriate logic
      // }
      <div className="otherContent">
        <h2>{props.error.message}</h2>
      </div>
    );

  return (
    <div className="otherContent">
      <h3 style={{ color: "rgb(221, 28, 141)" }}>HTML Data:</h3>
      <HilightedCode html={props.data} />
      {/* {JSON.stringify(props.data)} */}
    </div>
  );
}

function JScode() {
  return (
    <div className="otherContent">
      <h3 style={{ color: "rgb(221, 28, 141)" }}>Webscraper Function:</h3>
      <HilightedCode />
    </div>
  );
}

function App() {
  function createProxyRequest({ url = "", init } = {}) {
    if (init === null || init === undefined || typeof init !== "object")
      init = {};
    const proxyUrl = "https://cors-proxy.samueldlay.now.sh";
    let headers = {};
    if (init.headers) headers = init.headers;
    return new Request(proxyUrl, {
      ...init,
      ...{ headers: { ...headers, ...{ "x-proxied-url": url } } }
    });
  }

  const request = createProxyRequest({
    url: "https://www.pacehighschool.net/faculty-and-staff"
  });
  const { data, error, isLoading } = useFetch(request);

  return (
    <div className="App" style={{ display: "flex" }}>
      <div>
        <HTMLtext data={data} error={error} isLoading={isLoading} />
        <JScode />
      </div>
      <div>
        {/* <input
          style={{ marginBottom: "14px" }}
          onChange={e => console.log("test", e.target.value)}
          // ***I want to use useEffect with onChange here
          type="search"
        />{" "} */}
        <JSONText data={data} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
