"use client";

export default function StudioLoading() {
  return (
    <>
      <style>
        {`
          @keyframes studio-loading-wave {
            0%, 60%, 100% {
              opacity: 1;
              transform: translateY(0);
            }
            30% {
              opacity: 0.3;
              transform: translateY(-10px);
            }
          }
          .studio-loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            background-color: #1a1d24;
          }
          .studio-loading-text {
            font-size: 2rem;
            font-weight: 500;
            color: #9ca3af;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }
          .studio-loading-dots {
            display: inline-block;
          }
          .studio-loading-dot {
            animation: studio-loading-wave 1.4s ease-in-out infinite;
            display: inline-block;
          }
          .studio-loading-dot:nth-child(1) {
            animation-delay: 0s;
          }
          .studio-loading-dot:nth-child(2) {
            animation-delay: 0.2s;
          }
          .studio-loading-dot:nth-child(3) {
            animation-delay: 0.4s;
          }
        `}
      </style>
      <div className="studio-loading-container">
        <div className="studio-loading-text">
          Loading studio
          <span className="studio-loading-dots">
            <span className="studio-loading-dot">.</span>
            <span className="studio-loading-dot">.</span>
            <span className="studio-loading-dot">.</span>
          </span>
        </div>
      </div>
    </>
  );
}
