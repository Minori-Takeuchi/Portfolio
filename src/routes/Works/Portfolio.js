import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Portfolio = () => {
  useEffect(() => {
    const scrollToTop = () => {
      const scrollOptions = {
        top: 0,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    };

    scrollToTop();
  }, []);
  return (
    <div>
      <div className="work container">
        {/* タイトルと画像 */}
        <div className="work-top">
          <div className="text-center work-ttl">
            <h2 className="section-heading display-3 text-secondary">
              Minori-Takeuchi Portfolio
            </h2>
            <h6 className="section-subheading fs-m fw-300 mb-5">
              私のポートフォリオサイト
            </h6>
          </div>
          <img
            className="d-block w-100 work-img"
            src="/Images/Works/Portfolio/top.png"
            alt="First slide"
          />
          {/* GitHubリンク */}
          <div className="work-git d-flex align-items-center justify-content-end">
            <p className="text-secondary">GitHubはこちらからご確認ください！</p>
            <div className="work-git-item d-flex justify-content-around">
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">GitHubへ</Tooltip>}
              >
                <span className="d-inline-block">
                  <a
                    href="https://github.com/Minori-Takeuchi/Portfolio.git"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      disabled
                      className="work-git-icon"
                      src="/Images/Skills/github.svg"
                      alt="GitHub"
                    />
                  </a>
                </span>
              </OverlayTrigger>
            </div>
          </div>
        </div>

        {/* 詳細 */}
        <div className="work-content">
          <Table responsive borderless>
            <thead>
              <tr>
                <th className="display-5">概要</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    今ご覧いただいているこのWebサイトです。今まで経験したことのなかったReactアプリ開発の勉強のために、あえてReactを使用しました。私のテーマカラー（と思っている）淡いスカイブルー系を前面に押し出し、楽しく開発することができました。React-bootstrap等のライブラリを使用して一からデザインしています。ごゆっくり閲覧いただければ幸いです！
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>

          <Table responsive borderless>
            <thead>
              <tr>
                <th className="display-5">使用技術（実行環境）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>React / JavaScript</p>
                  <p>Netlify</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="skill-icon"
                    src="/Images/Skills/javascript.svg"
                    alt="JavaScript"
                  />
                  <img
                    className="skill-icon"
                    src="/Images/Skills/react.svg"
                    alt="React"
                  />
                  <img
                    className="skill-icon"
                    src="/Images/Skills/netlify.svg"
                    alt="Netlify"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="text-center">
          <HashLink to="/#works">
            <button type="button" className="btn btn-outline-secondary">
              Homeへ戻る
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
