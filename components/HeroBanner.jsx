import Link from "next/link";
import bg from "../image/cosmitics-bg22.jpg";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div
      className="hero-banner-container"
      style={{
				backgroundImage: `url(${bg.src})`,
				
      }}
    >
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <h2>
          Подарите своей коже незабываемый уход и наслаждение с косметикой из
          натуральных масел.
        </h2>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          {/*<div className="media"><AiFillInstagram /> 
						<p>instagram</p>
	        </div> */}

          <div className="desc">
            <h5>Контактный тел.</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
