import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const CarDetails = [
    {
      imagePath: "/images/Corolla.jpg",
      car_name: "Toyota Corolla",
      car_price: "50.7 - 79.5",
      car_reviews: "726",
    },
    {
      imagePath: "/images/Swift.jpg",
      car_name: "Suzuki Swift",
      car_price: "39.4 - 49.2",
      car_reviews: "497",
    },
    {
      imagePath: "/images/Cultus.png",
      car_name: "Suzuki Cultus",
      car_price: "35.6 - 47.5",
      car_reviews: "308",
    },
    {
      imagePath: "/images/Civic.jpg",
      car_name: "Honda Civic",
      car_price: "85.6 - 99.0",
      car_reviews: "463",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-2">
      {CarDetails.map((vehicle, index) => (
        <ChildComponent
          key={index}
          image={vehicle.imagePath}
          name={vehicle.car_name}
          price={vehicle.car_price}
          reviews={vehicle.car_reviews}
        />
      ))}
    </div>
  );
};

export default ParentComponent;
