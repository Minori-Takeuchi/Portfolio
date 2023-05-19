import React from 'react'
import { HashLink } from "react-router-hash-link";

const SkillsSection = () => {
  return (
    <div className="skills section" id='skills'>
      <div className="text-center">
        <h2 className="section-heading display-3 text-secondary">Skills</h2>
        <h6 className="section-subheading fs-m fw-300 mb-5">私にできること</h6>
      </div>
      <div className="skill-icon-list mb-5">
        <img
          className="skill-icon"
          src="/Images/Skills/html.svg"
          alt="HTML/CSS"
        />
        <img className="skill-icon" src="./Images/Skills/php.svg" alt="PHP" />
        <img
          className="skill-icon"
          src="/Images/Skills/javascript.svg"
          alt="JavaScript"
        />
        <img
          className="skill-icon"
          src="/Images/Skills/laravel.svg"
          alt="Laravel"
        />
        <img
          className="skill-icon"
          src="/Images/Skills/nuxt.svg"
          alt="NuxtJS"
        />
        <img className="skill-icon" src="/Images/Skills/vue.svg" alt="Vue.js" />
        <img
          className="skill-icon"
          src="/Images/Skills/react.svg"
          alt="React"
        />
        <img
          className="skill-icon"
          src="/Images/Skills/mysql.svg"
          alt="MYSQL"
        />
        <img className="skill-icon" src="/Images/Skills/aws.svg" alt="AWS" />
        <img
          className="skill-icon"
          src="/Images/Skills/docker.svg"
          alt="Docker"
        />
        <img
          className="skill-icon"
          src="/Images/Skills/circleci.svg"
          alt="CircleCI"
        />
        <img
          className="skill-icon"
          src="/Images/Skills/firebase.svg"
          alt="Firebase"
        />
        <img
          className="skill-icon"
          src="/Images/Skills/stripe.svg"
          alt="Stripe"
        />
        <img
          className="skill-icon"
          src="/Images/Skills/github.svg"
          alt="GitHub"
        />
      </div>
      <div className="text-center">
        <p className="fs-s">
          上記の言語やフレームワーク、ツールを使用しています。また、他の言語についても学習中です。
        </p>
        <p className="skills-content fs-s">
          日々のスキルアップを目標とし、お役に立てることを心掛けています。
        </p>
        <HashLink to="/skills/#top">
          <button type="button" className="btn btn-outline-secondary">
            Skills詳細はこちら
          </button>
        </HashLink>
      </div>
    </div>
  );
}

export default SkillsSection