import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="testimonials-sec">
      <div className="container">
        <div className="row">

          <div className="col-md-12">

            <div className="heading">
              <h5>CLIENT TESTIMONIALS</h5>
              <h2>Voices of Success</h2>
              <p>
                Hear directly from our valued partners about the tangible results
                and transformative growth they've experienced by working with
                GROLINQ.
              </p>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              className="owl-theme"
            >

              <SwiperSlide>
                <div className="item">
                  <div className="content-bx">
                    <p>
                      "GROLINQ has been instrumental in our digital expansion.
                      Their strategic link-building campaigns brought immediate
                      improvements to our search rankings and organic traffic.
                      A truly essential partner!"
                    </p>
                  </div>
                  <div className="user">
                    <h4>Sarah J.</h4>
                    <span>Marketing Director, InnovateTech</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="content-bx">
                    <p>
                      "The quality of content and the precision of backlink
                      placements from GROLINQ are unparalleled. They understood
                      our niche perfectly, delivering consistent, high-authority
                      results."
                    </p>
                  </div>
                  <div className="user">
                    <h4>David C.</h4>
                    <span>Founder & CEO, EcoSolutions</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="content-bx">
                    <p>
                      "Working with GROLINQ has significantly amplified our online
                      presence. Their efficient content distribution and dedicated
                      support have allowed us to reach new audiences and grow our
                      brand sustainably."
                    </p>
                  </div>
                  <div className="user">
                    <h4>Maria P.</h4>
                    <span>E-commerce Manager, StyleVault</span>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>

            <div className="bottomText">
              <p>
                Our commitment is to your success, reflected in every partnership
                and every story of growth.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
