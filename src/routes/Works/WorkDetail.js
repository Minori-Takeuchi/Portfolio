import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import api from "../../axios";

const WorkDetail = () => {
  const { id } = useParams();
  const [work, setWorkData] = useState([]);
  useEffect(() => {
    const scrollToTop = () => {
      const scrollOptions = {
        top: 0,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    };
    scrollToTop();

    const getWorkData = async () => {
      try {
        const response = await api.get(
          `/works/${id}?fields=title,sub_title,content,url,img,skills,functions,git,used`,
          {
            headers: {
              "X-MICROCMS-API-KEY": process.env.REACT_APP_X_MICROCMS_API_KEY,
            },
          }
        );
        setWorkData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWorkData();
  }, [id]);

  return (
    <div className="work container">
      {/* タイトルとカルーセル */}
      <div className="work-top">
        <div className="text-center work-ttl">
          <h2 className="section-heading display-3 text-secondary">
            {work.title}
          </h2>
          <h6 className="section-subheading fs-m fw-300 mb-5">
            {work.sub_title}
          </h6>
        </div>
        <Carousel className="work-img">
          {work.img && work.img.length > 0 ? (
            work.img.map((img) => (
              <Carousel.Item key={img.url}>
                <img
                  className="d-block w-100"
                  src={img.url}
                  alt="First slide"
                />
              </Carousel.Item>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Carousel>

        {/* GitHubリンク */}
        {work.git && work.git.length > 0 && (
          <div className="work-git d-flex align-items-center justify-content-end">
            <p className="text-secondary">GitHubはこちらからご確認ください！</p>
            <div className="work-git-item d-flex justify-content-around">
              {work.git.map((git) => (
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">{git.name}</Tooltip>}
                >
                  <span className="d-inline-block">
                    <a href={git.url} target="_blank" rel="noreferrer noopener">
                      <img
                        disabled
                        className="work-git-icon"
                        src="/github.svg"
                        alt="GitHub"
                      />
                    </a>
                  </span>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 詳細 */}
      <div className="work-content">
        <Table responsive borderless>
          <thead>
            <tr>
              <th className="display-6">概要</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>{work.content}</p>
              </td>
            </tr>
          </tbody>
        </Table>
        {work.url && (
          <Table responsive borderless>
            <thead>
              <tr>
                <th className="display-6">アプリケーションURL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>{work.url}</p>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
        {work.functions &&
          work.functions.length > 0 &&
          work.functions.some((func) => func.function) && (
            <Table responsive borderless>
              <thead>
                <tr>
                  <th className="display-6">機能一覧</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {work.functions.map((func) => (
                      <p key={func.function}>{func.function}</p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        {work.used && work.used.length > 0 && (
          <Table responsive borderless>
            <thead>
              <tr>
                <th className="display-6">使用技術（実行環境）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {work.used.map((used) => (
                    <p key={used}>{used}</p>
                  ))}
                </td>
              </tr>
              <tr>
                {work.skills && work.skills.length > 0 && (
                  <td>
                    {work.skills.map((skill) => (
                      <img
                        key={skill.id}
                        className="skill-icon"
                        src={skill.img.url}
                        alt={skill.skill_name}
                      />
                    ))}
                  </td>
                )}
              </tr>
            </tbody>
          </Table>
        )}
      </div>
      <div className="text-center">
        <HashLink to="/#works">
          <button type="button" className="btn btn-outline-secondary">
            Homeへ戻る
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default WorkDetail;
