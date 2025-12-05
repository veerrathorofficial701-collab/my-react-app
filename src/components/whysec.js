import { useEffect } from "react";

export default function WhySec() {

  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
      const clickHandler = () => {
        boxes.forEach((b) => b.classList.remove('expanded'));
        box.classList.add('expanded');
      };

      box.addEventListener('click', clickHandler);
      box._handler = clickHandler; 
    });

   
    return () => {
      boxes.forEach((box) => {
        if (box._handler) {
          box.removeEventListener('click', box._handler);
        }
      });
    };
  }, []);

  return (
    <section className="why-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="heading">
              <h2>Why GroLinq?</h2>
               <p>Choose GROLINQ to transform your digital presence into a powerful engine for sustainable success.</p>
            </div>
          </div>

          <div className="col-md-8">
            <div className="textslider">

              <div className="box expanded">
                <h4>Data-Driven Insights</h4>
                <p>Leverage millions of verified data points to make informed decisions and precisely target your audience, ensuring every strategy is optimized for maximum impact and ROI.</p>
              </div>

              <div className="box">
                <h4>Strategic Connections</h4>
            <p>Beyond simple networking, we build meaningful, collaborative partnerships that bridge technology with real-world business needs, creating lasting value and expanding market reach.</p>
              </div>

              <div className="box">
                <h4>Measurable Growth</h4>
                <p>Our commitment is to tangible results. We focus on boosting sales, enhancing customer loyalty, and accelerating sustainable growth, providing clear metrics for your success.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
