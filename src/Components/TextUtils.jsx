import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TextUtils(props) {
  let [text, setText] = useState("");
  let [vowels, setVowels] = useState(0);
  let [summary, setSummary] = useState([]);

  function onChangeHandle(e) {
    vowelCheck(e.target.value);
    setText(e.target.value);
  }

  function tToUppercase() {
    setText(text.trim().toUpperCase());
  }

  function tToLowercase() {
    setText(text.trim().toLowerCase());
  }

  function tClear() {
    if (confirm("Are you sure?") && text.trim().length > 0) {
      setText("");
    }
  }

  function cnvSecToMin(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${minutes} min(s) ${remainingSeconds} sec(s)`;
  }

  function tCopy() {
    navigator.clipboard.writeText(text);
    alert("Text Copied Successfully!");
  }

  function removeExtSpace() {
    setText(text.trim().replace(/\s+/g, " "));
  }

  function tCapitalize() {
    if (text.length > 0) {
      let newText = text.trim().replace(/\s+/g, " ").split(" ");
      newText = newText
        .map((word) =>
          word.replace(word.charAt(0), word.charAt(0).toUpperCase())
        )
        .join(" ");
      setText(newText);
    }
  }

  function vowelCheck(textTCheck) {
    let countVowels = 0;
    let VOWELS = "aeiouAEIOU";
    setVowels(countVowels);
    for (const letter of textTCheck) {
      if (VOWELS.includes(letter)) {
        setVowels(++countVowels);
      }
    }
  }

  async function autoCorrect() {
    let url = "https://api.textgears.com/correct?";
    let key = "CJZR02ZrwJ26G7Gw";
    let textToCorrect = text.trim().replace(/\s+/g, " ");
    let jsonResponse = await fetch(`${url}text=${textToCorrect}&key=${key}`);
    let response = await jsonResponse.json();
    response = response.response.corrected;
    return response;
  }

  async function tAutoCorrect() {
    setText(await autoCorrect());
  }

  async function tSummarize() {
    let url = "https://api.textgears.com/summarize?";
    let key = "CJZR02ZrwJ26G7Gw";
    let textToSummarize = text.trim().replace(/\s+/g, " ");
    let jsonResponse = await fetch(
      `${url}text=${textToSummarize}&key=${key}&max_sentences=4`
    );
    let response = await jsonResponse.json();
    response = response.response.summary;
    setSummary(response);
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div
        className={`min-h-[calc(100vh-2.5rem-4rem)] w-full text-${props.textColor}`}
      >
        <div className="mx-auto py-4 w-[90vw] md:w-[75vw]">
          <div className="flex flex-col justify-evenly items-center gap-3">
            <label
              htmlFor="text"
              className="text-lg md:text-xl font-bold italic"
            >
              Enter Text Here
            </label>
            <textarea
              type="text"
              id="text"
              value={text}
              placeholder="Enter Your Text Here To Manipulate..."
              onChange={onChangeHandle}
              className="h-56 md:h-72 w-full md:w-3/4 focus-visible:outline-none rounded-lg p-2 !text-black"
            ></textarea>
            <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
              <p className="text-sm md:text-base">
                <span className="font-bold">Reading Time :</span>&nbsp;
                {cnvSecToMin(
                  Math.ceil(
                    (text.trim().includes(" ")
                      ? text.trim().split(" ").length
                      : text.trim().length > 0
                      ? 1
                      : 0) * 0.8
                  )
                )}
              </p>
              <p className="text-sm md:text-base">
                Your Text Contains&nbsp;{" "}
                {text.trim().includes(" ") || text.trim().includes("\n")
                  ? text.trim().split(/\s+/).length
                  : text.trim().length > 0
                  ? 1
                  : 0}
                &nbsp; Words, &nbsp;{text.trim().length} Characters and {vowels}{" "}
                vowels.
              </p>
            </div>
            <div className="action w-full md:w-3/4 flex flex-wrap justify-center gap-2">
              <button
                className="bg-blue-500 text-white font-semibold p-1 rounded-md focus-visible:outline-none"
                onClick={tToUppercase}
              >
                Uppercase
              </button>
              <button
                className="bg-blue-500 text-white font-semibold p-1 rounded-md focus-visible:outline-none"
                onClick={tToLowercase}
              >
                Lowercase
              </button>
              <button
                className="bg-blue-500 text-white font-semibold p-1 rounded-md focus-visible:outline-none"
                onClick={tClear}
              >
                Clear
              </button>
              <button
                className="bg-blue-500 text-white font-semibold p-1 rounded-md focus-visible:outline-none"
                onClick={tCopy}
              >
                Copy
              </button>
              <button
                className="bg-blue-500 text-white font-semibold p-1 rounded-md focus-visible:outline-none"
                onClick={removeExtSpace}
              >
                Remove Extra Spaces
              </button>
              <button
                className="bg-blue-500 text-white font-semibold p-1 rounded-md focus-visible:outline-none"
                onClick={tCapitalize}
              >
                Capitalize
              </button>
              <button
                className="bg-blue-500 text-white font-semibold p-1 rounded-md focus-visible:outline-none"
                onClick={tAutoCorrect}
              >
                Auto Correct
              </button>
              <button
                className="bg-blue-500 text-white font-semibold p-1 rounded-md focus-visible:outline-none"
                onClick={() => {
                  tSummarize();
                }}
              >
                Summarize
              </button>
            </div>
          </div>
          <div className="m-auto my-4 w-full md:w-3/5">
            <h2 className="text-lg font-bold">Text Preview</h2>
            <div className="break-words">{text}</div>
          </div>
          <div className="summary w-full md:w-3/5 m-auto my-2">
            <h2 className="text-lg font-bold">Text Summary</h2>
            <ul>
              {summary.length > 0 &&
                summary.map((point, i) => {
                  return <li key={uuidv4}>{i + 1 + "." + point}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextUtils;
