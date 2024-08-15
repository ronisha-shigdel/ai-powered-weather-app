import React from "react";

function Header({ city }) {
  return (
    <header className="py-4 text-center">
      <h1 className="text-4xl font-bold">{city}</h1>
      <p className="text-lg">Weather Overview</p>{" "}
    </header>
  );
}

export default Header;
