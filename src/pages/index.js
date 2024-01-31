import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();
  const websiteRef = useRef();

  useGSAP(
    () => {
      container.current.style.height = `300vh`;

      gsap.to(".letters:first-child", {
        x: -innerWidth * 3,
        scale: 10,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });

      gsap.to(".letters:last-child", {
        x: innerWidth * 3,
        scale: 10,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });

      gsap.to("#img-holder", {
        rotation: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });

      gsap.to("#img-holder img", {
        scale: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });
    },
    {
      scope: container,
      dependencies: [websiteRef],
    }
  );

  return (
    <main ref={container} className={`h-full`}>
      {/* header */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full z-20">
        <div className="letters flex uppercase">
          <div className="letter">a</div>
          <div className="letter">r</div>
          <div className="letter">t</div>
          <div className="letter">w</div>
        </div>

        <div className="letters flex uppercase">
          <div className="letter">o</div>
          <div className="letter">r</div>
          <div className="letter">k</div>
          <div className="letter">s</div>
        </div>
      </div>
      {/* content */}
      <div
        ref={websiteRef}
        className="website-content fixed top-0 w-full min-h-screen"
      >
        {/* img holder */}
        <div
          id="img-holder"
          className="relative top-0 w-full h-screen bg-white rotate-[30deg]"
          style={{
            clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
          }}
        >
          <img
            className="relative scale-[2] h-full w-full object-cover"
            src="/statue.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
