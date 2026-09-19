import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_10.jpg";
const Slide5: React.FC = () => {
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
  return <div id="slide-5" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-5" style={{
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
        left: "114.96px",
        top: "108px",
        width: "428.15px",
        height: "864px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "428.15px",
          height: "864px",
          boxSizing: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "path('M 29.59 0 L 398.56 0 C 406.41 0 413.94 3.12 419.48 8.67 C 425.03 14.21 428.15 21.74 428.15 29.59 L 428.15 834.41 C 428.15 842.26 425.03 849.79 419.48 855.33 C 413.94 860.88 406.41 864 398.56 864 L 29.59 864 C 21.74 864 14.21 860.88 8.67 855.33 C 3.12 849.79 0 842.26 0 834.41 L 0 29.59 C 0 21.74 3.12 14.21 8.67 8.67 C 14.21 3.12 21.74 0 29.59 0 Z')",
          backgroundImage: `url(${img_1})`
        }} /></div><div key={10} style={{
        position: "absolute",
        left: "402.35px",
        top: "301.96px",
        width: "360.59px",
        height: "383.19px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "360.59px",
          height: "383.19px",
          boxSizing: "border-box",
          backgroundColor: "#E9BFB9",
          clipPath: "path('M 0 0 L 360.59 0 L 360.59 383.19 L 0 383.19 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "-15.19px",
          width: "360.59px",
          height: "398.38px",
          boxSizing: "border-box"
        }} /></div><div key={11} style={{
        position: "absolute",
        left: "895.72px",
        top: "203.73px",
        width: "916.28px",
        height: "127px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "90pt",
          fontSize: "calc(90pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(90pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"Natura"}</span><span style={{
            fontSize: "calc(90pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"l Beauty"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "895.72px",
        top: "365.08px",
        width: "916.28px",
        height: "33.2px",
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
          }}>{"Simple skincare inspired by nature for fresh and healthy-looking skin."}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "464.23px",
        top: "327.93px",
        width: "239.61px",
        height: "145.67px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "112pt",
          fontSize: "calc(80pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(80pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{" 45%"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "405.12px",
        top: "466.6px",
        width: "357.82px",
        height: "51.53px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "39.19pt",
          fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#486841"
          }}>{"Pu"}</span><span style={{
            fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#486841"
          }}>{"re Radiance"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "438.17px",
        top: "529.42px",
        width: "291.73px",
        height: "58.73px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "22.39pt",
          fontSize: "calc(15.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000",
            letterSpacing: "0.47pt"
          }}>{"Gentle care for naturally fresh and glowing skin."}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "895.72px",
        top: "443.01px",
        width: "239.61px",
        height: "145.67px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "112pt",
          fontSize: "calc(80pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(80pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"40% "}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "1155.82px",
        top: "553.37px",
        width: "656.18px",
        height: "77.4px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "29.4pt",
          fontSize: "calc(21pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(21pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000",
            letterSpacing: "0.63pt"
          }}>{"Natural ingredients that nourish and keep your skin soft."}</span></p></div><div key={18} style={{
        position: "absolute",
        left: "1155.82px",
        top: "472.01px",
        width: "524.87px",
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
          }}>{"B"}</span><span style={{
            fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans Bold', 'Work Sans', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"otanical Nourishment"}</span></p></div><div key={19} style={{
        position: "absolute",
        left: "895.72px",
        top: "693.14px",
        width: "239.61px",
        height: "145.67px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "112pt",
          fontSize: "calc(80pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(80pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"50% "}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "1155.82px",
        top: "803.5px",
        width: "656.18px",
        height: "81.13px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "30.79pt",
          fontSize: "calc(21.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(21.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans', sans-serif",
            color: "#000000",
            letterSpacing: "0.65pt"
          }}>{"Daily care to keep your skin hydrated, balanced, and glowing."}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "1155.82px",
        top: "722.14px",
        width: "524.87px",
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
          }}>{"He"}</span><span style={{
            fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Work Sans Bold', 'Work Sans', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"althy Glow"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "633.86px",
        top: "751.4px",
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
        }} /></div><svg key={23} style={{
        position: "absolute",
        left: "657.45px",
        top: "781.55px",
        width: "81.9px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="81.9" y2="0" stroke="#486841" strokeWidth="4" /></svg></div></div>;
};
export default Slide5;
