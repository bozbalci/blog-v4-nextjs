import { useEffect, useRef, useState } from "react";
import { saveSvgAsPng } from "save-svg-as-png";

export default function Green() {
  const [overlayText, setOverlayText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(async () => {
    const repsonse = await fetch("/api/usdtry");
    const data = await repsonse.json();
    const formatted = parseFloat(data.usdtry).toFixed(2);
    setOverlayText(formatted);
  }, []);

  const onDownloadImageClicked = (e) => {
    saveSvgAsPng(
      document.getElementById("outputImageSvg"),
      "dollar-picture.png",
      { excludeCss: true }
    );
  };

  return (
    <main className="mx-4 mt-8">
      <h1 className="text-6xl font-black tracking-tight">Green</h1>
      <form className="mt-8 mb-8">
        <divk className="flex items-center">
          <label htmlFor="overlayText">
            <a
              className="font-bold underline hover:no-underline text-blue-600"
              href="https://www.youtube.com/watch?v=y8kEiL81_R4"
            >
              How much a dollar cost?
            </a>{" "}
            <span className="font-bold">*</span>
          </label>
          <input
            type="text"
            name="overlayText"
            value={overlayText}
            className="ml-4 p-2 border-2 border-gray-600"
            onChange={(e) => setOverlayText(e.target.value)}
          />
        </divk>
        <div className="mt-4">
          <label htmlFor="imageUpload">
            Profile picture <span className="font-bold">†</span>
          </label>
          <input
            type="file"
            name="imageUpload"
            className="ml-4"
            onChange={(e) =>
              setImageFile(URL.createObjectURL(e.target.files[0]))
            }
          />
        </div>
      </form>
      <div>
        <svg
          id="outputImageSvg"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
        >
          <rect width={512} height={512} fill="#b1ffab" />
          <image
            xlinkHref={imageFile}
            height={512}
            width={512}
            style={{
              opacity: "50%",
            }}
          />
          <text
            x="50%"
            y="50%"
            fill="#054300"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{
              fontSize: "160px",
              lineHeight: "200px",
              fontWeight: "bold",
              fontFamily: ['"Comic Sans MS"', '"Comic Sans"', "cursive"],
              textAlign: "center",
            }}
          >
            {overlayText}
          </text>
        </svg>
      </div>
      <div className="my-8">
        <button
          className="p-4 border-2 border-green-900 bg-green-600 hover:bg-green-800 uppercase tracking-loose text-green-100 font-black hover:shadow-lg"
          onClick={onDownloadImageClicked}
        >
          Download image
        </button>
      </div>
      <div className="mt-8">
        <div className="text-sm">
          <span className="font-bold">*:</span> USD/TRY value retrieved from{" "}
          <a
            className="underline hover:no-underline text-blue-600 font-bold"
            href="https://exchangerate.host/"
          >
            exchangerate.host
          </a>{" "}
          and may be severely outdated.
        </div>
        <div className="text-sm">
          <span className="font-bold">†:</span> Works best with 512x512 images
          (you may download your profile picture directly from Slack for this).
        </div>
      </div>
    </main>
  );
}
