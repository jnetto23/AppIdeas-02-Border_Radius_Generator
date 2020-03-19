import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { FaRegCopy } from 'react-icons/fa';
import './index.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  const [dimensions, setDimensions] = React.useState({
    w: '',
    h: '',
  });

  const refGenerator = React.useRef();
  const refBox = React.useRef();
  const refCopyTooltip = React.useRef();

  const refSCLT = React.useRef();
  const [lt, setLT] = React.useState(25);

  const refSCLB = React.useRef();
  const [lb, setLB] = React.useState(75);

  const refSCRT = React.useRef();
  const [rt, setRT] = React.useState(25);

  const refSCRB = React.useRef();
  const [rb, setRB] = React.useState(75);

  const refSCTL = React.useRef();
  const [tl, setTL] = React.useState(25);

  const refSCTR = React.useRef();
  const [tr, setTR] = React.useState(75);

  const refSCBL = React.useRef();
  const [bl, setBL] = React.useState(25);

  const refSCBR = React.useRef();
  const [br, setBR] = React.useState(75);

  const drawSliders = React.useCallback(() => {
    let {
      width,
      left,
      top,
      right,
      bottom,
    } = refGenerator.current.getBoundingClientRect();

    refSCLT.current.style.cssText = `left:${left -
      width / 2 +
      14.5}px; transform: rotate(90deg)`;
    refSCLB.current.style.cssText = `left:${left -
      width / 2 +
      14.5}px; transform: rotate(90deg)`;

    refSCTL.current.style.cssText = `top:${top - 11}px`;
    refSCTR.current.style.cssText = `top:${top - 11}px`;

    refSCRT.current.style.cssText = `left:${right -
      width / 2 +
      12.5}px; transform: rotate(90deg)`;
    refSCRB.current.style.cssText = `left:${right -
      width / 2 +
      12.5}px; transform: rotate(90deg)`;

    refSCBL.current.style.cssText = `top:${bottom - 13}px`;
    refSCBR.current.style.cssText = `top:${bottom - 13}px`;
  }, []);

  const drawBorderRadius = React.useCallback(() => {
    refBox.current.style.cssText = `
      border-radius:
        ${tl}%${100 - tr}%${100 - br}%${bl}%
        /
        ${lt}%${rt}%${100 - rb}%${100 - lb}%
    `;
  }, [lt, lb, tl, tr, rt, rb, bl, br]);

  function handleCopy() {
    let v = refBox.current.style.borderRadius;
    let txt = `-webkit-border-radius: ${v}; -moz-border-radius: ${v}; border-radius: ${v};`;

    navigator.clipboard.writeText(txt).then(
      function() {
        refCopyTooltip.current.innerHTML = `Copied:\n${txt}`;
      },
      function(err) {
        refCopyTooltip.current.innerHTML = `Error:\n${err}`;
      }
    );
  }

  React.useLayoutEffect(() => {
    drawSliders();
  }, [drawSliders, dimensions]);

  React.useLayoutEffect(() => {
    drawBorderRadius();
  }, [drawBorderRadius]);

  return (
    <>
      <Header />

      <main className="container">
        <div ref={refGenerator} className="generator">
          <div ref={refBox} className="box"></div>

          <div ref={refSCLT} className="slider-container">
            <input
              type="range"
              name="lt"
              id="lt"
              min="0"
              max="100"
              value={lt}
              onChange={e => setLT(e.target.value)}
            />
          </div>
          <div ref={refSCLB} className="slider-container">
            <input
              type="range"
              name="lb"
              id="lb"
              min="0"
              max="100"
              value={lb}
              onChange={e => setLB(e.target.value)}
            />
          </div>
          <div ref={refSCTL} className="slider-container">
            <input
              type="range"
              name="tl"
              id="tl"
              min="0"
              max="100"
              value={tl}
              onChange={e => setTL(e.target.value)}
            />
          </div>
          <div ref={refSCTR} className="slider-container">
            <input
              type="range"
              name="tr"
              id="tr"
              min="0"
              max="100"
              value={tr}
              onChange={e => setTR(e.target.value)}
            />
          </div>
          <div ref={refSCRT} className="slider-container">
            <input
              type="range"
              name="rt"
              id="rt"
              min="0"
              max="100"
              value={rt}
              onChange={e => setRT(e.target.value)}
            />
          </div>
          <div ref={refSCRB} className="slider-container">
            <input
              type="range"
              name="rb"
              id="rb"
              min="0"
              max="100"
              value={rb}
              onChange={e => setRB(e.target.value)}
            />
          </div>
          <div ref={refSCBL} className="slider-container">
            <input
              type="range"
              name="bl"
              id="bl"
              min="0"
              max="100"
              value={bl}
              onChange={e => setBL(e.target.value)}
            />
          </div>
          <div ref={refSCBR} className="slider-container">
            <input
              type="range"
              name="br"
              id="br"
              min="0"
              max="100"
              value={br}
              onChange={e => setBR(e.target.value)}
            />
          </div>
        </div>
        <div className="copy tooltip">
          <span class="tooltiptext" ref={refCopyTooltip}>
            Copy to clipboard
          </span>
          <button
            onClick={() => handleCopy()}
            onMouseOver={() => {
              refCopyTooltip.current.innerHTML = 'Copy to clipboard';
            }}
          >
            <span>{`${tl}% ${100 - tr}% ${100 -
              br}% ${bl}% / ${lt}% ${rt}% ${100 - rb}% ${100 - lb}%`}</span>
            <FaRegCopy className="icon" onClick={() => alert('Clicou!')} />
          </button>
        </div>
      </main>

      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={(width, height) => setDimensions({ w: width, h: height })}
      />

      <Footer />
    </>
  );
}
