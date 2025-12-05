import { useEffect } from "react";

export default function Value() {
  useEffect(() => {
    const spaceHolder = document.querySelector(".space-holder");
    const horizontal = document.querySelector(".horizontal");

    if (!spaceHolder || !horizontal) {
      console.error("Missing .space-holder or .horizontal elements.");
      return;
    }

    function calcSpaceHeight() {
      const totalWidth = horizontal.scrollWidth;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      return Math.max(totalWidth - vw + vh, 0);
    }

    function setSpaceHeight() {
      spaceHolder.style.height = calcSpaceHeight() + "px";
    }

    function updateHorizontalPosition() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const start =
        spaceHolder.getBoundingClientRect().top + window.pageYOffset;

      const maxTranslate = Math.max(
        horizontal.scrollWidth - window.innerWidth,
        0
      );
      const availableScroll = Math.max(
        spaceHolder.offsetHeight - window.innerHeight,
        1
      );

      const relative = Math.min(
        Math.max(scrollTop - start, 0),
        availableScroll
      );

      const progress = (relative / availableScroll) * maxTranslate;
      horizontal.style.transform = `translateX(-${progress}px)`;
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHorizontalPosition();
          ticking = false;
        });
        ticking = true;
      }
    }
    
    setSpaceHeight();
    updateHorizontalPosition();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      setSpaceHeight();
      updateHorizontalPosition();
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setSpaceHeight);
    };
  }, []);

  return (
    <section className="value-sec">
      <div className="wrapper">
        <div className="space-holder">
          <div className="sticky black_bg">
            <div className="heading-box ForMob">
              <h2>Our Unique Value Proposition</h2>
              <p>
                "GROLINQ empowers brands and agencies with a data-driven
                link-building marketplace, providing seamless access to
                high-authority publishers, transparent pricing, and intelligent
                automation — all from a single platform."
              </p>
              <h4>Why GROLINQ Stands Apart:</h4>
            </div>

            <div className="horizontal">
              <div role="feed" className="cards">
                <article className="sample-card">
                  <div className="heading-box">
                    <h2>Our Unique Value Proposition</h2>
                    <p>
                      "GROLINQ empowers brands and agencies with a data-driven
                      link-building marketplace, providing seamless access to
                      high-authority publishers, transparent pricing, and
                      intelligent automation — all from a single platform."
                    </p>
                    <h4>Why GROLINQ Stands Apart:</h4>
                  </div>
                </article>

                <article className="sample-card">
                  <div className="content-bx">
                    <div className="number">01</div>
                    <div className="img">
                      <img
                        src="https://mywebprovider.com/grolinq/wp-content/uploads/2025/10/img-01.png"
                        alt="Pay-As-You-Go Pricing"
                      />
                    </div>
                    <div className="text">
                      <h4>Pay-As-You-Go Pricing</h4>
                      <p>
                        Transparent, no-subscription model. Only pay for the
                        links you use.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="sample-card">
                  <div className="content-bx">
                    <div className="number">02</div>
                    <div className="img">
                      <img
                        src="https://mywebprovider.com/grolinq/wp-content/uploads/2025/10/img-02.png"
                        alt="Global Publisher Network"
                      />
                    </div>
                    <div className="text">
                      <h4>Global Publisher Network</h4>
                      <p>Instantly access 80,000+ curated media outlets worldwide.</p>
                    </div>
                  </div>
                </article>

                <article className="sample-card">
                  <div className="content-bx">
                    <div className="number">03</div>
                    <div className="img">
                      <img
                        src="https://mywebprovider.com/grolinq/wp-content/uploads/2025/10/img-03.png"
                        alt="AI-Powered Automation"
                      />
                    </div>
                    <div className="text">
                      <h4>AI-Powered Automation</h4>
                      <p>
                        Automate link matching, content optimization, and
                        performance tracking.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="sample-card">
                  <div className="content-bx">
                    <div className="number">04</div>
                    <div className="img">
                      <img
                        src="https://mywebprovider.com/grolinq/wp-content/uploads/2025/10/img-04.png"
                        alt="24/7 Expert Guidance"
                      />
                    </div>
                    <div className="text">
                      <h4>24/7 Expert Guidance</h4>
                      <p>
                        Dedicated SEO strategists offer round-the-clock support
                        for your growth.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="sample-card">
                  <div className="content-bx">
                    <div className="number">05</div>
                    <div className="img">
                      <img
                        src="https://mywebprovider.com/grolinq/wp-content/uploads/2025/10/img-05.png"
                        alt="Full Transparency"
                      />
                    </div>
                    <div className="text">
                      <h4>Full Transparency</h4>
                      <p>
                        Every step is clear, measurable, and directly aligned
                        with your objectives.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
