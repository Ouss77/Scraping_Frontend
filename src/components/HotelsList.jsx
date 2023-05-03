import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation, useParams } from "react-router-dom";
import "./Hotelslist.css";
import HotelsDetails from "./HotelsDetails";
import Navbar from "./Navbar";
import HotelsPrice from "./HotelsPrice";

export default function List() {
  const { city, checkin, checkout } = useParams();
  const [date, setDate] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState("");
  const [showPrice, setShowPrice] = useState(false);
  const [key, setKey] = useState(0);
  const [hotelName, sethotelName]=useState("")
  const [cityName, setcityName]=useState("")
  const [checkIn, setcheckIn] = useState("")
  const [checkOut, setcheckOut] = useState("")
  const handleClick = (a, aa, b, c) => {
    console.log("the params for searching prices", a, aa, b, c);
    sethotelName(a)
    setcityName(aa)
    setcheckIn(b)
    setcheckOut(c)
    setShowPrice(true);
    setKey(key + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={city} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span className="date-check">{checkin} </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Check-Out Date</label>
              <span className="date-check"> {checkout}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options:</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Childre </span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room </span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <HotelsDetails onClick={handleClick} />
          </div>
          {showPrice && (
            <div className="listPrice">
              <HotelsPrice key={key}  hoteltitle={hotelName} cityName={cityName} checkIn={checkIn} checkOut={checkOut} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
