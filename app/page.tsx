import Newhome from "./components/newhome";
import Popular from "./components/popular";
import Listing from "./components/listing";
import Homeownership from "./components/homeownership";
import Map from "./components/map";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="w-full flex justify-center items-center">
      <div className="max-w-[1400px] w-full">
        <Newhome />
        <Popular />
        <Listing />
        <Homeownership />
        <Map />
      </div>
    </main>
  );
}

export default Home;