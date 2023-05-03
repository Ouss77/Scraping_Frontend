import React from 'react'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./SearchBar.css"
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom'

function SearchMobile() {
  const navigate = useNavigate()
  const [city, setCity] = useState("")
  const [checkInDate, setCheckInDate] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        // ... options ?
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      key: 'selection'
    }
  ]);

  function convertDate(date) {
    const checkInDate = date[0].startDate.toISOString().substr(0, 10)
    const checkOutDate = date[0].endDate.toISOString().substr(0, 10)
    // Log the formatted dates to the console
    console.log(`Start Date: ${checkInDate}`);
    console.log(`End Date: ${checkOutDate}`);
    //send the data to the new page
    navigate('/hotels/' + city + "/" + checkInDate + "/" + checkOutDate)
  }

  const handleInputChange = e => {
    setCity(e.target.value);
  };
  
  function handleClick() {
    if (city.trim() !== '') {
      convertDate(date);
    } else {
      alert("enter a valid destnation");
    }
  }

  return (
    <div className="headerSeacrch">
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className="headerIcon" />
        <input type="text"
          placeholder="Where are you going"
          value={city}
          onChange={(e) => handleInputChange(e)}
          className='searchCity' />
      </div>
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
        <span onClick={() => setOpenDate(!openDate)} className="headerSearchTest">{format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")} </span>
        {openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className='date'
        />}
      </div>  
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchTest">{options.adult} adult . {options.children} children. {options.room} room</span>
        {openOptions && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">

              <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optionCounter">
              <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
              <span className="optionCounterNumber">{options.children}</span>
              <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionCounter">
              <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
              <span className="optionCounterNumber">{options.room}</span>
              <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
            </div>
          </div>
        </div>}
      </div>
      <div className="headerSearchItem">
        <button onClick={() => handleClick() } className="headerBtn">Search</button>
      </div>
    </div>
  )
}

export default SearchMobile