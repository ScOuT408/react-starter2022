import React from "react";
import styled from "styled-components";
import { MdFiberNew } from "react-icons/md";
import { TbBrandBing } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";

const ServiceSec = styled.div`
  border-top: 0.1rem solid #555;
  border-bottom: 0.1rem solid #555;

  .service__gridbox {
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    place-items: center;
    gap: 2rem;
    margin-top: 2rem;
    margin: 2rem auto;
    text-align: center;

    .service__mainbox {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      width: 100%;
      padding: 1.4rem;
      background: #feffff;

      .logo_box {
        height: 9rem;
        width: 9rem;
        background: #ffffff;
        padding: 1rem;
        margin: 0 auto;
        box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;
        border-radius: 5rem;

        .icon {
          color: #d1d0cb;
          height: 100%;
          width: 100%;
        }
      }

      h3 {
        font-size: 2.5rem;
        text-transform: capitalize;
        margin-top: 2rem;
        font-weight: 550;
      }
    }
  }
`;

function Service() {
  return (
    <section>
      <ServiceSec>
        <div className="service__gridbox">
          <div className="service__mainbox">
            <div className="logo_box">
              <MdFiberNew className="icon" />
            </div>
            <h3> new arrivals </h3>
          </div>
          <div className="service__mainbox">
            <div className="logo_box">
              <TbBrandBing className="icon" />
            </div>
            <h3> top brands </h3>
          </div>
          <div className="service__mainbox">
            <div className="logo_box">
              <GiPriceTag className="icon" />
            </div>
            <h3> upto 30% off </h3>
          </div>
        </div>
      </ServiceSec>
    </section>
  );
}

export default Service;
