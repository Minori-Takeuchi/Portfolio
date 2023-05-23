import React, { useEffect, useState } from "react";
import api from "../../axios";
import { HashLink } from "react-router-hash-link";

const SkillsSection = () => {
  const [skills, setSkillsData] = useState([]);
  useEffect(() => {
    const getSkillsData = async () => {
      try {
        const response = await api.get("/skills?fields=id,img&limit=30", {
          headers: {
            "X-MICROCMS-API-KEY": process.env.REACT_APP_X_MICROCMS_API_KEY,
          },
        });
        setSkillsData(response.data.contents);
      } catch (error) {
        console.log(error);
      }
    };
    getSkillsData();
  }, []);

  return (
    <div className="skills section" id="skills">
      <div className="text-center">
        <h2 className="section-heading display-3 text-secondary">Skills</h2>
        <h6 className="section-subheading fs-m fw-300 mb-5">私にできること</h6>
      </div>
      <div className="skill-icon-list mb-5">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <img
              key={skill.id}
              src={skill.img.url}
              alt={skill.skill_name}
              className="skill-icon"
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="text-center">
        <p className="fs-s">
          上記の言語やフレームワーク、ツールを使用しています。また、他の言語についても学習中です。
        </p>
        <p className="skills-content fs-s">
          日々のスキルアップを目標とし、お役に立てることを心掛けています。
        </p>
        <HashLink to="/skills#top">
          <button type="button" className="btn btn-outline-secondary">
            Skills詳細はこちら
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default SkillsSection;
