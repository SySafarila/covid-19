import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Global = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  const recoveredPercent = (recovered / confirmed) * 100;
  const deathPercent = (deaths / confirmed) * 100;

  useEffect(() => {
    const getGlobal = async () => {
      await axios
        .get("https://covid19.mathdro.id/api")
        .then((res) => {
          console.log(res);
          setConfirmed(res.data.confirmed.value);
          setRecovered(res.data.recovered.value);
          setDeaths(res.data.deaths.value);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getGlobal();
    document.title = "Covid-19 | Global";
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-3">
        <div className="grid md:grid-cols-3 gap-2 px-2 mb-3">
          <Card
            number={confirmed}
            type="Confirmed"
            borderColor="border-yellow-600"
            textColor="text-yellow-600"
          />
          <Card
            number={recovered}
            type="Recovered"
            borderColor="border-green-600"
            textColor="text-green-600"
          />
          <Card
            number={deaths}
            type="Deaths"
            borderColor="border-red-600"
            textColor="text-red-600"
          />
        </div>
        <div className="bg-dim-light mx-2 relative rounded">
          <div
            className="bg-green-600 mb-3 rounded"
            style={{ width: `${recoveredPercent.toFixed(0)}%` }}
          >
            <p className="text-center text-white px-2">
              {recoveredPercent.toFixed(0)}%
            </p>
          </div>
        </div>
        <div className="bg-dim-light mx-2 relative rounded">
          <div
            className="bg-red-600 mb-3 rounded"
            style={{ width: `${deathPercent.toFixed(0)}%` }}
          >
            <p className="text-center text-white px-2">
              {deathPercent.toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
