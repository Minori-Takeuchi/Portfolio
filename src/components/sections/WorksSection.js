import React from "react";
import { HashLink } from "react-router-hash-link";

const WorksSection = () => {
  return (
    <div className="works section">
      <div className="text-center">
        <h2 className="section-heading display-3 text-secondary">Works</h2>
        <h6 className="section-subheading fs-m fw-300 mb-5">
          私が作った作品一覧です
        </h6>
      </div>

      <div className="row">
        <div className="col-xxl-4 col-md-6">
          <HashLink to="/works/rese/#top" style={{ textDecoration: "none" }}>
            <div className="card border-light mb-5 overflow-hidden" id="rese">
              <img
                className="card-img img-fluid shadow transition"
                src="./Images/Works/Rese/home.png"
                alt="Rese -飲食店予約サイト-"
              />
              <div className="card-body">
                <h5 className="card-title display-6 text-muted fw-400">Rese</h5>
                <p className="card-text">
                  <small className="fs-s">飲食店予約サービス</small>
                </p>
              </div>
            </div>
          </HashLink>
        </div>

        <div className="col-xxl-4 col-md-6">
          <HashLink to="/works/share/#top" style={{ textDecoration: "none" }}>
            <div className="card border-light mb-5 overflow-hidden">
              <img
                className="card-img img-fluid shadow transition"
                src="./Images/Works/Share/home.png"
                alt="SHARE -SNSアプリ-"
              />
              <div className="card-body">
                <h5 className="card-title display-6 text-muted fw-400">
                  SHARE
                </h5>
                <p className="card-text">
                  <small className="fs-s">SNSアプリケーション</small>
                </p>
              </div>
            </div>
          </HashLink>
        </div>

        <div className="col-xxl-4 col-md-6">
          <div className="card border-light mb-5 overflow-hidden">
            <img
              className="card-img img-fluid shadow transition"
              src="./Images/Works/Rese/home.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title display-6 text-muted fw-400">SA</h5>
              <p className="card-text">
                <small className="fs-s">aaaaaaaa</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card border-light mb-5 overflow-hidden">
            <img
              className="card-img img-fluid shadow transition"
              src="./Images/Works/Rese/home.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title display-6 text-muted fw-400">
                efwegwg
              </h5>
              <p className="card-text">
                <small className="fs-s">bbbbbbb</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card border-light mb-5 overflow-hidden">
            <img
              className="card-img img-fluid shadow transition"
              src="./Images/Works/Rese/home.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title display-6 text-muted fw-400">egegew</h5>
              <p className="card-text">
                <small className="fs-s">cccccccc</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card border-light mb-5 overflow-hidden">
            <img
              className="card-img img-fluid shadow transition"
              src="./Images/Works/Rese/home.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title display-6 text-muted fw-400">
                sdasfgg
              </h5>
              <p className="card-text">
                <small className="fs-s">dddddddd</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
