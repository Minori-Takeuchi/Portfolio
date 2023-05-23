import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../axios";

const WorksSection = () => {
  const [works, setWorksData] = useState([]);
  useEffect(() => {
    const getWorksData = async () => {
      try {
        const response = await api.get("/works", {
          headers: {
            "X-MICROCMS-API-KEY": process.env.REACT_APP_X_MICROCMS_API_KEY,
          },
        });
        setWorksData(response.data.contents);
      } catch (error) {
        console.log(error);
      }
    };

    getWorksData();
  }, []);
  return (
    <div className="works section">
      <div className="text-center">
        <h2 className="section-heading display-3 text-secondary">Works</h2>
        <h6 className="section-subheading fs-m fw-300 mb-5">
          私が作った作品一覧です
        </h6>
      </div>

      <div className="row">
        {works.length > 0 ? (
          works.map((work) => (
            <div className="col-xxl-4 col-md-6" key={work.id}>
              <Link to={`/works/${work.id}`} style={{ textDecoration: "none" }}>
                <div className="card border-light mb-5 overflow-hidden">
                  <img
                    className="card-img img-fluid shadow transition"
                    src={work.img[0].url}
                    alt="Rese -飲食店予約サイト-"
                  />
                  <div className="card-body">
                    <h5 className="card-title display-6 text-muted fw-400">
                      {work.title}
                    </h5>
                    <p className="card-text">
                      <small className="fs-s">{work.sub_title}</small>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WorksSection;
