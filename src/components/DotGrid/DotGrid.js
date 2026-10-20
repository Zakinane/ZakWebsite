import { useEffect, useRef } from "react";
import "./DotGrid.css";

function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let dots = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const spacing = 25;
    const radius = 1;
    const influenceRadius = 130;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];

      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          dots.push({
            x,
            y,
            offsetX: 0,
            offsetY: 0,
          });
        }
      }
    }

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        let targetX = 0;
        let targetY = 0;
        let opacity = 0.15;
        let currentRadius = radius;

        if (mouse.active) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < influenceRadius) {
            const force = 1 - distance / influenceRadius;
            const easedForce = force * force;

            const angle = Math.atan2(dy, dx);
            const displacement = easedForce * 12;

            targetX = Math.cos(angle) * displacement;
            targetY = Math.sin(angle) * displacement;

            opacity = 0.15 + easedForce * 0.65;
            currentRadius = radius + easedForce * 0.7;
          }
        }

        dot.offsetX += (targetX - dot.offsetX) * 0.12;
        dot.offsetY += (targetY - dot.offsetY) * 0.12;

        ctx.beginPath();
        ctx.arc(
          dot.x + dot.offsetX,
          dot.y + dot.offsetY,
          currentRadius,
          0,
          Math.PI * 2,
        );

        ctx.fillStyle = `rgba(100, 255, 218, ${opacity})`;
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="DotGrid" aria-hidden="true" />;
}

export default DotGrid;
