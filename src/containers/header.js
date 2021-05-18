import React from "react";

const Header = (props) => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2
          style={{
            fontFamily: "Helvetica Neue",
            color: "grey",
            fontSize: "30px",
            letterSpacing: "2px",
          }}
        >
          Faruk's E-comm shop!
        </h2>
      </div>
    </div>
  );
};

export default Header;
