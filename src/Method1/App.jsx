import React from "react";
import SearchBarDesktop from "./Method1/SearchBarDesktop.jsx";
import SearchBarMobile from "./Method1/SearchBarMobile.jsx";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="App">
      {width > 768 ? <SearchBarDesktop /> : <SearchBarMobile />}
    </div>
  );
}

export default App;
