import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_11.jpg";
import img_2 from "./assets/images/image_12.jpg";
const Slide6: React.FC = () => {
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
  return <div id="slide-6" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-6" style={{
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
          }}>{"GLOWORA"}</span></p></div><div key={1} style={{
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
          }}>{"About"}</span></p></div><div key={2} style={{
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
          }}>{"Project"}</span></p></div><div key={3} style={{
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
          }}>{"Service"}</span></p></div><div key={4} style={{
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
          }}>{"Team"}</span></p></div><div key={5} style={{
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
        }} /></div><div key={6} style={{
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
          }}>{"Contact us"}</span></p></div><div key={7} style={{
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
        }} /></div><div key={8} style={{
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
          }}>{"Buy Now"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "0px",
        top: "108px",
        width: "1261.32px",
        height: "383.19px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "1261.32px",
          height: "383.19px",
          boxSizing: "border-box",
          backgroundColor: "#E9BFB9",
          clipPath: "path('M 0 0 L 1261.32 0 L 1261.32 383.19 L 0 383.19 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "-15.19px",
          width: "1261.32px",
          height: "398.38px",
          boxSizing: "border-box"
        }} /></div><div key={10} style={{
        position: "absolute",
        left: "1279.81px",
        top: "108px",
        width: "532.19px",
        height: "383.19px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "532.19px",
          height: "383.19px",
          boxSizing: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "path('M 23.8 0 L 508.39 0 C 521.53 0 532.19 10.66 532.19 23.8 L 532.19 359.39 C 532.19 372.53 521.53 383.19 508.39 383.19 L 23.8 383.19 C 10.66 383.19 0 372.53 0 359.39 L 0 23.8 C 0 10.66 10.66 0 23.8 0 Z')",
          backgroundImage: `url(${img_1})`
        }} /></div><div key={11} style={{
        position: "absolute",
        left: "108px",
        top: "171.31px",
        width: "884.96px",
        height: "162px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "125.99pt",
          fontSize: "calc(90pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(90pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"Healthy S"}</span><span style={{
            fontSize: "calc(90pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"kin"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "108.58px",
        top: "571.17px",
        width: "556.69px",
        height: "400.83px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "556.69px",
          height: "400.83px",
          boxSizing: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "path('M 23.8 0 L 532.89 0 C 546.03 0 556.69 10.66 556.69 23.81 L 556.69 377.02 C 556.69 390.17 546.03 400.83 532.89 400.83 L 23.8 400.83 C 10.66 400.83 0 390.17 0 377.02 L 0 23.81 C 0 10.66 10.66 0 23.8 0 Z')",
          backgroundImage: `url(${img_2})`
        }} /></div><div key={13} style={{
        position: "absolute",
        left: "762.94px",
        top: "674.66px",
        width: "1044.85px",
        height: "99.2px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "25.2pt",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000",
            letterSpacing: "0.53pt"
          }}>{"Deep hydration helps replenish moisture and keeps your skin feeling soft, smooth and refreshed. It supports healthy-looking skin and gives it a natural, fresh glow throughout the day."}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "762.94px",
        top: "593.3px",
        width: "835.77px",
        height: "51.53px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "39.19pt",
          fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans Bold', 'Work Sans', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"Deep Hydration"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "767.15px",
        top: "876.08px",
        width: "1044.85px",
        height: "92.47px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "23.8pt",
          fontSize: "calc(17pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(17pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000",
            letterSpacing: "0.51pt"
          }}>{"Skin protection helps shield your skin from daily environmental stress. Using sunscreen and gentle skincare regularly can help maintain healthy-looking skin, prevent dryness, and keep your skin feeling fresh and comfortable."}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "767.15px",
        top: "793.72px",
        width: "835.77px",
        height: "51.53px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "39.19pt",
          fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans Bold', 'Work Sans', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"Sk"}</span><span style={{
            fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans Bold', 'Work Sans', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"in Protection"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "1029.25px",
        top: "239.29px",
        width: "129.08px",
        height: "60.31px"
      }}><svg key={0} viewBox="0 0 129.08 60.31" preserveAspectRatio="none" style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "129.08px",
          height: "60.31px",
          overflow: "visible"
        }}><path d="M 30.15 0 L 98.93 0 C 115.58 0 129.08 13.5 129.08 30.16 L 129.08 30.16 C 129.08 38.15 125.9 45.82 120.25 51.48 C 114.59 57.13 106.92 60.31 98.93 60.31 L 30.15 60.31 C 13.5 60.31 0 46.81 0 30.16 L 0 30.16 C 0 13.5 13.5 0 30.15 0 Z" fill="none" stroke="#486841" strokeWidth={3} strokeLinejoin="round" /></svg><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "-15.19px",
          width: "129.08px",
          height: "75.5px",
          boxSizing: "border-box"
        }} /></div><svg key={18} style={{
        position: "absolute",
        left: "1052.84px",
        top: "269.44px",
        width: "81.9px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="81.9" y2="0" stroke="#486841" strokeWidth="4" /></svg></div></div>;
};
export default Slide6;
