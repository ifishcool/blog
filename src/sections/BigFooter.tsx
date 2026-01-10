import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const BigFooter = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current!;

      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="big-footer" ref={sectionRef}>
      <div className="big-footer-inner">
        <div className="big-footer-wordmark">VIYRS</div>
        <div className="big-footer-meta">
          <div className="big-footer-tags">
            <span className="big-footer-tag">PORTFOLIO</span>
            <span className="big-footer-tag">DEV</span>
            <span className="big-footer-tag">AI</span>
          </div>
          <div className="big-footer-copy">
            © {new Date().getFullYear()} VIYRS. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigFooter;
