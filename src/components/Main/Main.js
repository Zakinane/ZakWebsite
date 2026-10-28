import { useEffect, useRef } from "react";
import DotGrid from "../DotGrid/DotGrid";
import "./Main.css";

function Main() {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    const elements = content.querySelectorAll("[data-parallax]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let animationFrame;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    function handleMouseMove(event) {
      if (reducedMotion.matches) return;

      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    }

    function animate() {
      currentX += (mouseX - currentX) * 0.06;
      currentY += (mouseY - currentY) * 0.06;

      elements.forEach((element) => {
        const strength = Number(element.dataset.parallax) || 4;

        element.style.transform = `translate3d(
          ${currentX * strength}px,
          ${currentY * strength}px,
          0
        )`;
      });

      animationFrame = requestAnimationFrame(animate);
    }

    function resetParallax() {
      mouseX = 0;
      mouseY = 0;

      if (reducedMotion.matches) {
        elements.forEach((element) => {
          element.style.transform = "none";
        });
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("blur", resetParallax);
    reducedMotion.addEventListener("change", resetParallax);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", resetParallax);
      reducedMotion.removeEventListener("change", resetParallax);
    };
  }, []);

  return (
    <main className="Main" id="about">
      <DotGrid />

      <div className="main-content" ref={contentRef}>
        <h1 data-parallax="3">Hi, my name is</h1>

        <h2 data-parallax="5">Zaki DJABA.</h2>

        <h3 data-parallax="8">I build things for the web.</h3>

        <p data-parallax="4">
          I'm a software engineering student focused on building accessible,
          interactive, and visually engaging digital experiences. I enjoy
          turning ideas into reality through code and design.
        </p>

        <a className="main-cta" data-parallax="3" href="#projects">
          Check out my work!
        </a>
      </div>
    </main>
  );
}

export default Main;
