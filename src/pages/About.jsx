import React from "react";
import styled from "styled-components";

const AboutSec = styled.div`
  margin-top: 12rem;
  margin-bottom: -5rem;

  .about_grid {
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    gap: 1.5rem;
    place-items: center;
    margin: 0 auto;
    overflow: hidden;

    .box {
      .img_box {
        width: 55rem;
        height: 40rem;
        padding-bottom: 4rem;
        padding-right: 4rem;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          filter: contrast(120%);
          box-shadow: 1rem 1rem 0.3rem #b6b5b5;
        }
      }

      .content {
        height: auto;
        padding: 1rem 1rem;

        h2 {
          font-size: 3.5rem;
          text-transform: capitalize;
          font-weight: 550;
          color: #444;
          margin-bottom: 0.5rem;
        }

        .para {
          font-size: 2.2rem;
          line-height: 1.5;
        }
      }
    }
  }
`;

function About() {
  return (
    <section>
      <AboutSec>
        <div className="about_grid">
          <div className="box">
            <div className="img_box">
              <img src="./images/about.jpeg" alt="about" />
            </div>
          </div>
          <div className="box">
            <div className="content">
              <h2> about us? </h2>
              <div className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus inventore, magni recusandae quam doloremque, corrupti
                incidunt facere consequuntur omnis tempora reprehenderit quis,
                ex aliquid necessitatibus est commodi harum assumenda nam?
                Animi, eum quis omnis perferendis sint quae officia accusantium
                quasi.
              </div>
            </div>
          </div>
        </div>
      </AboutSec>
    </section>
  );
}

export default About;
