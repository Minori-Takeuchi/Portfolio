import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function Skills() {
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
    <div className="skills">
      <div className="text-center" id="top">
        <h2 className="section-heading display-3 text-secondary">Skills</h2>
        <h6 className="section-subheading fs-m fw-300 skills-content">
          使用言語・フレームワーク・ツールなど
        </h6>
        <h5 className="fs-m fw-400">得意なスキル</h5>
        <div className="d-flex justify-content-center align-items-center text-secondary most-skill-list flex-wrap">
          <div className="d-flex justify-content-between align-items-center most-skill">
            <img src="/Images/Skills/laravel.svg" alt="Laravel" />
            <p className="display-3">Laravel</p>
          </div>
          <div className="d-flex justify-content-between align-items-center most-skill">
            <img src="/Images/Skills/nuxt.svg" alt="Nuxt.js" />
            <p className="display-3">Nuxt.js</p>
          </div>
        </div>
        <p className="fs-s">
          Laravelをバックエンド、Nuxt.jsをフロントエンドとしたWebアプリケーションの開発を得意としています。
        </p>

        <div className="other">
          <h5 className="fs-m fw-400">言語</h5>
          <div className="d-flex justify-content-center align-items-center  text-secondary flex-wrap other-skill-list">
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/html.svg" alt="HTML/CSS" />
              <p className="display-5">HTML/CSS</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/php.svg" alt="PHP" />
              <p className="display-5">PHP</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/javascript.svg" alt="JavaScript" />
              <p className="display-5">JavaScript</p>
            </div>
          </div>
          <h5 className="fs-m fw-400">フレームワーク</h5>
          <div className="d-flex justify-content-center align-items-center  text-secondary other-skill-list">
            <div className="d-flex justify-content-between align-items-center other-skill">
              <img src="/Images/Skills/vue.svg" alt="Vue.js" />
              <p className="display-5">Vue.js</p>
            </div>
            <div className="d-flex justify-content-between align-items-center other-skill">
              <img src="/Images/Skills/react.svg" alt="React" />
              <p className="display-5">React</p>
            </div>
          </div>
          <h5 className="fs-m fw-400">データベース・ツール</h5>
          <div className="d-flex justify-content-center align-items-center flex-wrap other-skill-list">
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/mysql.svg" alt="Mysql.js" />
              <p className="display-5">Mysql</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/aws.svg" alt="AWS" />
              <p className="display-5">AWS</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/netlify.svg" alt="Netlify" />
              <p className="display-5">Netlify</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/docker.svg" alt="Docker" />
              <p className="display-5">Docker</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/firebase.svg" alt="Firebase" />
              <p className="display-5">Firebase</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/circleci.svg" alt="Circle CI" />
              <p className="display-5">Circle CI</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/stripe.svg" alt="Stripe" />
              <p className="display-5">Stripe</p>
            </div>
            <div className="d-flex justify-content-between align-items-center  text-secondary other-skill">
              <img src="/Images/Skills/github.svg" alt="GitHub" />
              <p className="display-5">GitHub</p>
            </div>
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
