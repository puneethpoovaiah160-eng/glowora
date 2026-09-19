import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_13.jpg";
import img_2 from "./assets/images/image_14.jpg";
import img_3 from "./assets/images/image_15.jpg";
const Slide7: React.FC = () => {
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
  return <div id="slide-7" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-7" style={{
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
        }} /></div><div key={1} style={{
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
        }} /></div><div key={2} style={{
        position: "absolute",
        left: "0px",
        top: "108px",
        width: "1920px",
        height: "383.19px"
      }}><div key={0} style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "1920px",
          height: "383.19px",
          boxSizing: "border-box",
          backgroundColor: "#E9BFB9",
          clipPath: "path('M 0 0 L 1920 0 L 1920 383.19 L 0 383.19 Z')"
        }} /><div key={1} style={{
          position: "absolute",
          left: "0px",
          top: "-15.19px",
          width: "1920px",
          height: "398.38px",
          boxSizing: "border-box"
        }} /></div><div key={3} style={{
        position: "absolute",
        left: "3.96px",
        top: "491.19px",
        width: "539.15px",
        height: "358.53px",
        boxSizing: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        clipPath: "path('M 0 0 L 539.15 0 L 539.15 358.53 L 0 358.53 L 0 0 Z')",
        backgroundImage: `url(${img_1})`
      }} /><div key={4} style={{
        position: "absolute",
        left: "836.45px",
        top: "491.19px",
        width: "366.42px",
        height: "366.42px",
        boxSizing: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        clipPath: "path('M 0 0 L 366.42 0 L 366.42 366.42 L 0 366.42 L 0 0 Z')",
        backgroundImage: `url(${img_2})`
      }} /><div key={5} style={{
        position: "absolute",
        left: "1401.09px",
        top: "491.19px",
        width: "518.91px",
        height: "345.07px",
        boxSizing: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        clipPath: "path('M 0 0 L 518.91 0 L 518.91 345.07 L 0 345.07 L 0 0 Z')",
        backgroundImage: `url(${img_3})`
      }} /><div key={6} style={{
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
          }}>{"GLOWORA"}</span></p></div><div key={7} style={{
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
          }}>{"About"}</span></p></div><div key={8} style={{
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
          }}>{"Project"}</span></p></div><div key={9} style={{
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
          }}>{"Service"}</span></p></div><div key={10} style={{
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
          }}>{"Team"}</span></p></div><div key={11} style={{
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
          }}>{"Contact us"}</span></p></div><div key={12} style={{
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
          }}>{"Buy Now"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "300.4px",
        top: "194.24px",
        width: "1319.21px",
        height: "127px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "90pt",
          fontSize: "calc(90pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(90pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Alice Bold', 'Alice', sans-serif",
            fontWeight: "700",
            color: "#486841"
          }}>{"OUR PRODUCTS"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "102.82px",
        top: "938.07px",
        width: "274.26px",
        height: "81px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "26.59pt",
          fontSize: "calc(18.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Canva Sans', sans-serif",
            color: "#000000"
          }}>{"Gentle Face Wash"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "36.4pt",
          fontSize: "calc(26pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(26pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Canva Sans', sans-serif",
            color: "#000000"
          }}>{"\u20B9299 \xB7 BUY NOW"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "871.42px",
        top: "938.07px",
        width: "296.48px",
        height: "84.73px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "26.59pt",
          fontSize: "calc(18.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Canva Sans', sans-serif",
            color: "#000000"
          }}>{"Hydrating Moisturizer"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "39.19pt",
          fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(27.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Canva Sans', sans-serif",
            color: "#000000"
          }}>{"\u20B9399 \xB7 BUY NOW"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "1515.26px",
        top: "938.07px",
        width: "243.19px",
        height: "75.4px",
        boxSizing: "border-box",
        padding: "0px 0px 0px 0px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "26.59pt",
          fontSize: "calc(18.99pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18.99pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Canva Sans', sans-serif",
            color: "#000000"
          }}>{"Daily Sunscreen"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "32.2pt",
          fontSize: "calc(23pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(23pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Canva Sans', sans-serif",
            color: "#000000"
          }}>{"\u20B9449 \xB7 BUY NOW"}</span></p></div></div></div>;
};
export default Slide7;
