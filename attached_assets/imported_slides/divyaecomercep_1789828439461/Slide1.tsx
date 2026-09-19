import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_1.jpg";
import img_2 from "./assets/images/image_2.jpg";
import img_3 from "./assets/images/image_3.jpg";
import img_4 from "./assets/images/image_4.jpg";
const Slide1: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    s: 1,
    x: 0,
    y: 0
  });
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const s = Math.min(w / 1920, h / 1080);
      setLayout({
        s,
        x: (w - 1920 * s) / 2,
        y: (h - 1080 * s) / 2
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div id="slide-1" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-1" style={{
      position: "absolute",
      width: "1920px",
      height: "1080px",
      overflow: "hidden",
      transformOrigin: "top left",
      color: "#000000",
      backgroundColor: "#BBCEAE",
      transform: `scale(${layout.s})`,
      left: layout.x + "px",
      top: layout.y + "px"
    }}><div key={0} style={{
        position: "absolute",
        left: "927.04px",
        top: "108px",
        width: "884.96px",
        height: "864px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "884.96px",
          height: "864px",
          boxSizing: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "path('M 312.63 50.95 L 267.18 164.57 C 254.88 195.34 225.07 215.52 191.93 215.52 L 81.05 215.52 C 36.29 215.52 0 251.81 0 296.58 L 0 782.95 C 0 827.71 36.29 864 81.05 864 L 803.91 864 C 848.67 864 884.96 827.71 884.96 782.95 L 884.96 81.05 C 884.96 36.29 848.67 0 803.91 0 L 387.89 0 C 354.75 0 324.94 20.17 312.63 50.95 Z')",
          backgroundImage: `url(${img_1})`
        }} /></div><div key={1} style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "626.07px",
        height: "1080px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "626.07px",
          height: "1080px",
          boxSizing: "border-box",
          backgroundColor: "#E9BFB9",
          clipPath: "path('M 0 0 L 626.07 0 L 626.07 1080 L 0 1080 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "-15.19px",
          width: "626.07px",
          height: "1095.19px",
          boxSizing: "border-box"
        }} /></div><div key={2} style={{
        position: "absolute",
        left: "108px",
        top: "108px",
        width: "791.04px",
        height: "383.19px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "791.04px",
          height: "383.19px",
          boxSizing: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "path('M 16.02 0 L 775.02 0 C 779.27 0 783.34 1.69 786.35 4.69 C 789.36 7.69 791.04 11.77 791.04 16.01 L 791.04 367.18 C 791.04 376.02 783.87 383.19 775.02 383.19 L 16.02 383.19 C 7.17 383.19 0 376.02 0 367.18 L 0 16.01 C 0 7.17 7.17 0 16.02 0 Z')",
          backgroundImage: `url(${img_2})`
        }} /></div><div key={3} style={{
        position: "absolute",
        left: "108px",
        top: "518.04px",
        width: "381.54px",
        height: "453.96px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "381.54px",
          height: "453.96px",
          boxSizing: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "path('M 33.2 0 L 348.34 0 C 357.14 0 365.59 3.5 371.81 9.72 C 378.04 15.95 381.54 24.4 381.54 33.2 L 381.54 420.76 C 381.54 439.09 366.68 453.96 348.34 453.96 L 33.2 453.96 C 24.4 453.96 15.95 450.46 9.73 444.24 C 3.5 438.01 0 429.56 0 420.76 L 0 33.2 C 0 24.4 3.5 15.95 9.73 9.72 C 15.95 3.5 24.4 0 33.2 0 Z')",
          backgroundImage: `url(${img_3})`
        }} /></div><div key={4} style={{
        position: "absolute",
        left: "517.49px",
        top: "518.04px",
        width: "381.54px",
        height: "453.96px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "381.54px",
          height: "453.96px",
          boxSizing: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "path('M 33.2 0 L 348.34 0 C 357.14 0 365.59 3.5 371.81 9.72 C 378.04 15.95 381.54 24.4 381.54 33.2 L 381.54 420.76 C 381.54 439.09 366.68 453.96 348.34 453.96 L 33.2 453.96 C 24.4 453.96 15.95 450.46 9.73 444.24 C 3.5 438.01 0 429.56 0 420.76 L 0 33.2 C 0 24.4 3.5 15.95 9.73 9.72 C 15.95 3.5 24.4 0 33.2 0 Z')",
          backgroundImage: `url(${img_4})`
        }} /></div><div key={5} style={{
        position: "absolute",
        left: "927.04px",
        top: "754.99px",
        width: "884.96px",
        height: "217.01px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "168pt",
          fontSize: "calc(120pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(120pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#BBCEAE"
          }}>{"SKINCARE"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "1621.45px",
        top: "714.87px",
        width: "129.08px",
        height: "60.31px"
      }}><svg key={0} viewBox="0 0 129.08 60.31" preserveAspectRatio="none" style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "129.08px",
          height: "60.31px",
          overflow: "visible"
        }}><path d="M 30.15 0 L 98.93 0 C 115.58 0 129.08 13.5 129.08 30.16 L 129.08 30.16 C 129.08 38.15 125.9 45.82 120.25 51.48 C 114.59 57.13 106.92 60.31 98.93 60.31 L 30.15 60.31 C 13.5 60.31 0 46.81 0 30.16 L 0 30.16 C 0 13.5 13.5 0 30.15 0 Z" fill="none" stroke="#E9BFB9" strokeWidth={3} strokeLinejoin="round" /></svg><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "-15.19px",
          width: "129.08px",
          height: "75.5px",
          boxSizing: "border-box"
        }} /></div><svg key={7} style={{
        position: "absolute",
        left: "1645.04px",
        top: "745.02px",
        width: "81.9px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="81.9" y2="0" stroke="#E9BFB9" strokeWidth="4" /></svg><div key={8} style={{
        position: "absolute",
        left: "108px",
        top: "50.31px",
        width: "138.19px",
        height: "21.8px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "16.79pt",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans Bold', 'Work Sans', sans-serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"GLOWORA"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "298.77px",
        top: "50.31px",
        width: "97.67px",
        height: "21.79px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "16.79pt",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000"
          }}>{"About"}</span></p></div><div key={10} style={{
        position: "absolute",
        left: "420.94px",
        top: "50.31px",
        width: "97.67px",
        height: "21.79px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "16.79pt",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000"
          }}>{"Project"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "543.1px",
        top: "50.31px",
        width: "97.67px",
        height: "21.79px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "16.79pt",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000"
          }}>{"Service"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "665.27px",
        top: "50.31px",
        width: "97.67px",
        height: "21.79px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "16.79pt",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000"
          }}>{"Team"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "1708.08px",
        top: "49.65px",
        width: "103.92px",
        height: "26.11px"
      }}><svg key={0} viewBox="0 0 103.92 26.11" preserveAspectRatio="none" style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "103.92px",
          height: "26.11px",
          overflow: "visible"
        }}><path d="M 13.06 0 L 90.86 0 C 94.33 0 97.65 1.38 100.1 3.82 C 102.54 6.27 103.92 9.59 103.92 13.06 L 103.92 13.06 C 103.92 20.27 98.07 26.11 90.86 26.11 L 13.06 26.11 C 5.85 26.11 0 20.27 0 13.06 L 0 13.06 C 0 5.84 5.85 0 13.06 0 Z" fill="none" stroke="#486841" strokeWidth={2} strokeLinejoin="round" /></svg><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "-15.19px",
          width: "103.92px",
          height: "41.3px",
          boxSizing: "border-box"
        }} /></div><div key={14} style={{
        position: "absolute",
        left: "1708.08px",
        top: "50.31px",
        width: "103.92px",
        height: "21.79px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "16.79pt",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000"
          }}>{"Contact us"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "1584.9px",
        top: "49.65px",
        width: "103.92px",
        height: "26.11px"
      }}><svg key={0} viewBox="0 0 103.92 26.11" preserveAspectRatio="none" style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "103.92px",
          height: "26.11px",
          overflow: "visible"
        }}><path d="M 13.06 0 L 90.86 0 C 94.33 0 97.65 1.38 100.1 3.82 C 102.54 6.27 103.92 9.59 103.92 13.06 L 103.92 13.06 C 103.92 20.27 98.07 26.11 90.86 26.11 L 13.06 26.11 C 5.85 26.11 0 20.27 0 13.06 L 0 13.06 C 0 5.84 5.85 0 13.06 0 Z" fill="none" stroke="#486841" strokeWidth={2} strokeLinejoin="round" /></svg><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "-15.19px",
          width: "103.92px",
          height: "41.3px",
          boxSizing: "border-box"
        }} /></div><div key={16} style={{
        position: "absolute",
        left: "1584.9px",
        top: "50.31px",
        width: "103.92px",
        height: "21.79px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "16.79pt",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000"
          }}>{"Buy Now"}</span></p></div></div></div>;
};
export default Slide1;
