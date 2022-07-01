import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    await fetch(
      "https://conciergeapi.moveeasy.com/api/realtors/unauthenticated-vendor-list/?site_name=janesmith"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  const goToDetailPage = (details) => {
    localStorage.setItem("details", JSON.stringify(details));
    navigate("/details");
  };
  useEffect(() => {
    async function fetchAPIData() {
      await fetchData();
    }
    fetchAPIData();
  }, []);

  return (
    <>
      <div className="row">
        {data &&
          data.map((emp, index) => (
            <div className="column">
              <div className="card" key={index}>
                <div>
                  {emp.name}
                  <button
                    className="button button2"
                    onClick={() => {
                      goToDetailPage(emp);
                    }}
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;