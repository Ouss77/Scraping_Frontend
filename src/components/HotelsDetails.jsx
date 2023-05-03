import "./HotelsDetails.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function HotelsDetails({onClick}) {
  const [hotels, setHotels] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { city, checkin, checkout } = useParams();
  console.log("the checkIn Date is", checkin);

  const sendData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/booking", {
        params: {
          checkInDate: checkin,
          checkOutDate: checkout,
          city: city,
        },
      });
      setHotels(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log("i am searching for hotels in Booking..");
    sendData();
  }, []);
  return (

    <div>
      <div className="">
        {loading ? (
          <>
            <span class="loader1"></span>
            <span class="loader1"></span>
            <span class="loader1"></span>
            <span class="loader1"></span>
          </>
        ) : (
          Array.isArray(hotels) &&
          hotels.map((hotel, index) => (
            <div className="searchItem" key={index}>
              <img src={hotel.image} alt={hotel.title} className="siImg" />
              <div className="siDesc">
                <h1 className="siTitle">{hotel.title}</h1>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                  Studio Apartment with Air conditioning
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                  You can cancel later, so lock in this great price today!
                </span>
              </div>
              <div className="siDetails">
                <div className="siRating">
                  <span>Excellent</span>
                  <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                  <span className="siPrice"> {hotel.price}</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                  <a href={hotel.url} target="_blank" className="siCheckButton">
                    See availability
                  </a>
                  {/* <Link to={"/Price/" + hotel.title + "/" + checkin + "/" + checkout
                    } className="siCheckButton"
                  >
                    Other Prices
                  </Link> */}

                  {/* //i should send the data to the other component  (title, checkin, checkout) */}
                  <button onClick={() => onClick(hotel.title, city, checkin, checkout)} className="siCheckButton">Other Prices</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default HotelsDetails;
