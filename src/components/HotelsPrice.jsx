import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./HotelsPrice.css";
function HotelsPrice({ hoteltitle, cityName, checkIn, checkOut }) {
  const [price, setPrice] = useState("");
  const [price1, setPrice1] = useState("");
  const params = useParams();
  console.log("the params passed in the url is:", params);

  const getPriceHotels = async () => {
    try {
      const response = await axios.get("http://localhost:3000/priceHotels", {
        params: {
          hoteltitle: hoteltitle,
          cityName: cityName,
          checkInDate: checkIn,
          checkOutDate: checkOut,
        },
      });
      console.log("Hotels data is:", response.data);
      setPrice(response.data);
      setLoading1(false);
    } catch (error) {
      console.error("The error is:", error);
    }
  };
  const getPriceExpediabyDate = async () => {
    try {
      const response = await axios.get("http://localhost:3000/priceExpbyDate", {
        params: {
          hoteltitle: hoteltitle,
          cityName: cityName,
          checkInDate: checkIn,
          checkOutDate: checkOut,
        },
      });
      console.log("Expedia Price is:", response.data);
      setPrice1(response.data);
      setLoading1(false);
    } catch (error) {
      console.error("The error is:", error);
    }
  };
  const getPriceOrbitz = async () => {
    try {
      const response = await axios.get("http://localhost:3000/priceOrbitz", {
        params: {
          hoteltitle: hoteltitle,
          cityName: cityName,
          checkInDate: checkIn,
          checkOutDate: checkOut,
        },
      });
      console.log("Orbitz Price is:", response.data);
      setPrice2(response.data);
      setLoading1(false);
    } catch (error) {
      console.error("The error is:", error);
    }
  };  
  const [price2, setPrice2] = useState([]);
  const [loading1, setLoading1] = useState(true);

  const getgooglePrice = async () => {
    try {
      const response = await axios.get("http://localhost:3000/priceGoogle", {
        params: {
          hoteltitle: hoteltitle,
          checkInDate: checkIn,
          checkOutDate: checkOut
        },
      });
      console.log("Google Price is:", response.data);
      setPrice2(response.data);
      setLoading1(false);
    } catch (error) {
      console.error("The error is:", error);
    }
  };

  useEffect(() => {
    console.log("i am searching for Prices in Hotels..");
    //getPriceOrbitz();
    getgooglePrice();
    //getPriceHotels();
    //getPriceExpediabyDate();
  }, []);
  console.log("all the prices are", price2, price1, price);
  return (
    <div className="price-diff">
      {loading1 ? (
        <span className="loader"></span>
      ) : (
<>
        {Array.isArray(price2) && price2.length > 0 ? (
          price2.map((prix) => (
            <>
              <h5> {prix.title}</h5>
              <div className="price">{prix.price}</div>
            </>
          ))
        ) : (
          <p>No prices available</p>
        )}
      </>
      )}
    </div>
  );
}

export default HotelsPrice;
