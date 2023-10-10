import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Product
          id={1}
          title="Amazon Alexa (3rd generation) | Smart speaker with Alexa, Charcol Fabric"
          rating={3}
          price={20}
          image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_05_3362887_440x440_en_US.jpg"
        />
        <Product
          id={2}
          title="The Hobbit (Film tie-in edition)"
          rating={4}
          price={16.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black"
          rating={4}
          price={55.99}
          image="https://d3rlgjrg24xpvv.cloudfront.net/wp-content/uploads/2017/12/26095141/Amazon-A-Product-Image-Service-021.jpg"
        />
        <Product
          id={4}
          title="All-new Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video | No power and volume buttons | 2020 release"
          price={45.99}
          rating={3}
          image="https://cdn-cx-images.dynamite.myharmony.com/mh/ssv2/devices/amazon-firetvstick-glamour-v1.png"
        />
        <Product
          id={5}
          title="Redmi Note 9 Pro (Aurora Blue, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free | Upto 6 Months No Cost EMI"
          price={199.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71muFgw3oPL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
          price={499.99}
          rating={4}
          image="https://cdn.newsapi.com.au/image/v1/6687e353fd8b9d04f7e45634ce15008d"
        />
      </div>
    </div>
  );
}

export default Home;
