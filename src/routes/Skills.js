import React, { useEffect, useState } from "react";
import api from "../axios";
import { HashLink } from "react-router-hash-link";

function Skills() {
  const [skills, setSkillsData] = useState([]);
  useEffect(() => {
    const scrollToTop = () => {
      const scrollOptions = {
        top: 0,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    };
    scrollToTop();

    const getSkillsData = async () => {
      try {
        const response = await api.get(
          "/skills?fields=id,img,skill_name,type&limit=30",
          {
            headers: {
              "X-MICROCMS-API-KEY": process.env.REACT_APP_X_MICROCMS_API_KEY,
            },
          }
        );
        setSkillsData(response.data.contents);
      } catch (error) {
        console.log(error);
      }
    };
    getSkillsData();
  }, []);

  return (
    <div className="skills">
      <div className="text-center" id="top">
        <h2 className="section-heading display-3 text-secondary">Skills</h2>
        <h6 className="section-subheading fs-m fw-300 skills-content">
          使用言語・フレームワーク・ツールなど
        </h6>
        <h5 className="fs-m fw-400">得意なスキル</h5>

        <div className="d-flex justify-content-center align-items-center text-secondary most-skill-list flex-wrap">
          {skills.length > 0 ? (
            skills
              .filter((skill) => skill.type === 2)
              .slice(0, 2)
              .map((skill) => (
                <div className="d-flex justify-content-between align-items-center most-skill">
                  <img
                    key={skill.id}
                    src={skill.img.url}
                    alt={skill.skill_name}
                  />
                  <p className="display-3">{skill.skill_name}</p>
                </div>
              ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <p className="fs-s">
          Laravelをバックエンド、Nuxt.jsをフロントエンドとしたWebアプリケーションの開発を得意としています。
        </p>

        <div className="other">
          <h5 className="fs-m fw-400">言語</h5>
          <div className="d-flex justify-content-center align-items-center  text-secondary flex-wrap">
            {skills.length > 0 ? (
              skills
                .filter((skill) => skill.type === 1)
                .map((skill) => (
                  <div className="d-flex justify-content-between align-items-center text-secondary other-skill">
                    <img
                      key={skill.id}
                      src={skill.img.url}
                      alt={skill.skill_name}
                    />
                    <p className="display-5">{skill.skill_name}</p>
                  </div>
                ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <h5 className="fs-m fw-400">フレームワーク</h5>
          <div className="d-flex justify-content-center align-items-center  text-secondary flex-wrap">
            {skills.length > 0 ? (
              skills
                .filter((skill) => skill.type === 2)
                .slice(2)
                .map((skill) => (
                  <div className="d-flex justify-content-between align-items-center text-secondary other-skill">
                    <img
                      key={skill.id}
                      src={skill.img.url}
                      alt={skill.skill_name}
                    />
                    <p className="display-5">{skill.skill_name}</p>
                  </div>
                ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <h5 className="fs-m fw-400">データベース・ツール</h5>
          <div className="d-flex justify-content-center align-items-center  text-secondary flex-wrap">
            {skills.length > 0 ? (
              skills
                .filter((skill) => skill.type === 3)
                .map((skill) => (
                  <div className="d-flex justify-content-between align-items-center text-secondary other-skill">
                    <img
                      key={skill.id}
                      src={skill.img.url}
                      alt={skill.skill_name}
                    />
                    <p className="display-5">{skill.skill_name}</p>
                  </div>
                ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center">
        <HashLink to="/#skills">
          <button type="button" className="btn btn-outline-secondary">
            Homeへ戻る
          </button>
        </HashLink>
      </div>
    </div>
  );
}

export default Skills;
