import "./featured.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Featured = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // check if the screen width is less than or equal to 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  const cities = [
    {
      src: "https://www.decouvertemonde.com/wp-content/uploads/2021/07/visiter-Fes-au-Maroc-medina.jpg",
      title: "Fes",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326947925.jpg?k=821ece9e702add3096ccc084d5af5d8e8f55dd73b4e940e8cdcc05d5a4969cad&o=&hp=1",
      title: "Merzouga",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/427473589.jpg?k=2110fbf98b8fc9a13b4dbe775a571ff81458fd6509c7f5fda73f332f20c32c1e&o=&hp=1",
      title: "Dakhla",
    },
    {
      src: "https://www.marrakechbestof.com/wp-content/uploads/2022/08/08B55E43-BC48-4A02-9A24-2854D864E0AE.jpeg",
      title: "Marrakech",
    },
    {
      src: "https://www.planetware.com/wpimages/2023/01/morocco-agadir-top-attractions-things-to-do-intro-paragraph-overview.jpg",
      title: "Agadir",
    },
    {
      src: "https://loveincorporated.blob.core.windows.net/contentimages/main/52bc37a9-53f5-46fb-b30e-f2135b788e95-essaouira-morroco.jpg",
      title: "Essaouira",
    },
  ];
  const checkInDate = new Date().toISOString().split("T")[0];
  const checkOutDate = () => {
    let today = new Date();
    // Change the date by adding 1 to it (today + 1 = tomorrow)
    today.setDate(today.getDate() + 1);
    // return yyyy-mm-dd format
    return today.toISOString().split("T")[0];
  };

  console.log("today date is", checkInDate);
  console.log("tomorrow date is", checkOutDate());

  function handleClick(title) {
    navigate(`/hotels/${title}/${checkInDate}/${checkOutDate()}`)
    console.log(title);

  }
  return (
    <div className="featured">
      <h1 className="homeTitle">Find your next destination</h1>
      <Slider className="sliderous" {...(isMobile ? settings2 : settings)}>
        {cities.map((city) => (
          <div className="featuredItem">
            <img
              onClick={() => handleClick(city.title)}
              src={city.src}
              alt={city.title}
              className="featuredImg"
            />
            <div className="featuredTitels">
              <h2>{city.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Featured;
