import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Detail = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem("details");
    if (data) {
      data = JSON.parse(data);
      debugger;
      setData(data);
      localStorage.removeItem("details");
    }
  }, []);

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <button onClick={() => goBack()}>Back</button>
      </div>

      {data && (!data.vendors || data.vendors.length <= 0) && (
        <div>No Data Available.</div>
      )}
      {data &&
        data.vendors &&
        data.vendors.length > 0 &&
        data.vendors.map((vendor, index) => {
          return (
            <div className="card" key={'card' + index}>
              {Object.keys(vendor).map((vkey, index) => {
                return (
                  <div className="sub-card" key={index}>
                    <div>
                      <span>{vkey} : </span>
                      <span> {vendor[vkey]} </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
};

export default Detail;