import { useState } from "react";
import "./styles.css";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";

const items = [
  {
    header: "Yangon",
    image: image2,
    text: `You and me`,
  },

  {
    header: "Yangon",
    image: image1,
    text: `You and me`,
  },

  {
    header: "Bangkok",
    image: image4,
    text: `You and me`,
  },
  {
    header: "Bangkok",
    image: image5,
    text: `You and me`,
  },
  {
    header: "Bangkok",
    image: image3,
    text: `You and me`,
  },
];

export const ImageAccordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <>
      <div
        className="image-accordion-background"
        style={{ backgroundImage: `url(${items[active].image})` }}
      ></div>
      <div className="image-accordion">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={item.image}
              className={`image-accordion-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <img src={item.image} />
              <div className="content">
                <span className="material-symbols-outlined">photo_camera</span>
                <div>
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
