import React from "react";
import ComponentePrueba from "./ComponentePrueba";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  let objeto = {
    apellido: "Gonzalez",
  };
  const cardData = [
    {
      title: "Card 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aspernatur rerum deleniti eveniet quasi soluta perferendis et molestias hic repellat?",
      image: rigoImage,
    },
    {
      title: "Card 2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aspernatur rerum deleniti eveniet quasi soluta perferendis et molestias hic repellat?",
      image: rigoImage,
    },
    {
      title: "Card 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aspernatur rerum deleniti eveniet quasi soluta perferendis et molestias hic repellat?",

      image: rigoImage,
    },
    {
      title: "Card 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aspernatur rerum deleniti eveniet quasi soluta perferendis et molestias hic repellat?",

      image: rigoImage,
    },
  ];

  return (
    <div className="text-center">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Jumbotron />
        </div>
        <div className="d-flex flex-row gap-3 justify-content-center">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              titulo={card.title}
              descripcion={card.description}
            />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/* <ComponentePrueba apellido={objeto.apellido} /> */}
    </div>
  );
};

export default Home;
