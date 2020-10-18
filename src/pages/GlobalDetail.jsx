import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import moment from "moment";

const GlobalDetail = () => {
  const [datas, setDatas] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getGlobalDetail = async () => {
      await axios
        .get("https://covid19.mathdro.id/api/confirmed")
        .then((res) => {
          console.log(res);
          setDatas(res.data);
          setLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getGlobalDetail();
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-3">
        {loaded ? (
          <div className="grid md:grid-cols-4 gap-2 mx-2">
            {datas.map((data, i) => (
              <div className="bg-dim-light p-3 rounded" key={i}>
                <div className="border-b-2 border-gray-800 grid grid-cols-2">
                  <h1 className="text-white">{data.countryRegion}</h1>
                  <h1 className="text-gray-500 text-right">
                    {data.provinceState}
                  </h1>
                </div>
                <p className="text-yellow-500">
                  Confirmed : {numberWithCommas(data.confirmed)}
                </p>
                <p className="text-green-500">
                  Recovered : {numberWithCommas(data.recovered)}
                </p>
                <p className="text-red-500 border-b-2 border-gray-800">
                  Deaths : {numberWithCommas(data.deaths)}
                </p>
                <p className="text-center text-gray-500 capitalize">
                  {moment(data.lastUpdate).fromNow()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-center text-white">Loading . . .</h1>
        )}
      </div>
    </div>
  );
};

export default GlobalDetail;
