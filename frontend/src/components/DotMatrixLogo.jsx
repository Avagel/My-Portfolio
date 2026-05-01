import React, { useRef, useEffect } from "react";

const DotMatrixLogo = ({
  svgUrl = "Avagel SVG.svg",
  dotColor = "#ffffff",
  gap = 3,
  velocity = 0.05,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let animationFrameId;
    let particles = [];
    let frame = 0;

    const image = new Image();
    image.src = svgUrl;

    image.onload = () => {
      // Set internal canvas resolution
      canvas.width = 400;
      canvas.height = 400;

      // Scan the SVG
      ctx.drawImage(image, 0, 0, 400, 400);
      const data = ctx.getImageData(0, 0, 400, 400).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create particle grid based on non-transparent pixels
      const newParticles = [];
      for (let y = 0; y < 400; y += gap) {
        for (let x = 0; x < 400; x += gap) {
          const index = (y * 400 + x) * 4;
          if (data[index + 3] > 128) {
            newParticles.push({ x, y, baseSize: 1.5 });
          }
        }
      }
      particles = newParticles;
      render();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame += velocity;

      ctx.fillStyle = dotColor;

      particles.forEach((p) => {
        // The "Wave" math
        const wave = Math.sin(frame + p.x * 0.02 + p.y * 0.01) * 3;

        ctx.beginPath();
        // Adjust Y position and Size based on the wave
        ctx.arc(p.x, p.y + wave, p.baseSize + wave * 0.2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [svgUrl, dotColor, gap, velocity]);

  return <canvas ref={canvasRef} className="w-[30%] h-auto bg-transparent " />;
};

export default DotMatrixLogo;
