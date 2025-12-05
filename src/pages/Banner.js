export default function About({ 
  title = "About page",
  description = "Providing essential services for improving search engine rankings through effective link building, helping businesses grow their online visibility.",
  buttonText = "Grow Your Agency Now",
  buttonLink = "https://app.grolinq.com"
}) {
  return (
    <section id="home-slider">
      <div className="slider-wrap">

        <div className="text">
          <h1>{title}</h1>

          <p>{description}</p>

          <div className="buttons">
            <div className="default_btn">
              <a href={buttonLink}>{buttonText}</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
