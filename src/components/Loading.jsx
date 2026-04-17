import React from "react";

const Loading = () => {
  const customStyles = `
    .security-loading {
      position: fixed;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at top, rgba(0, 255, 163, 0.12), transparent 30%),
        linear-gradient(180deg, #030706 0%, #07110f 100%);
      color: #effff7;
      z-index: 9999;
    }

    .loading-radar {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      border: 1px solid rgba(0, 255, 163, 0.2);
      position: relative;
      margin-bottom: 1rem;
      box-shadow: inset 0 0 30px rgba(0, 255, 163, 0.06);
    }

    .loading-radar::before,
    .loading-radar::after {
      content: "";
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      border: 1px solid rgba(0, 255, 163, 0.14);
    }

    .loading-sweep {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: conic-gradient(from 0deg, rgba(0, 255, 163, 0.72), transparent 35%);
      animation: rotateSweep 1.6s linear infinite;
      mask: radial-gradient(circle, transparent 58%, black 60%);
    }

    .loading-copy {
      color: #b9d2c8;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-size: 0.85rem;
    }

    @keyframes rotateSweep {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="security-loading">
        <div className="loading-radar">
          <div className="loading-sweep"></div>
        </div>
        <p className="loading-copy">Booting Secure Portfolio</p>
      </div>
    </>
  );
};

export default Loading;
