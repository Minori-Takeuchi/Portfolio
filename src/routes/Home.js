import React from "react";
import WorksSection from "../components/sections/WorksSection";
import ProfileSection from "../components/sections/ProfileSection";
import SkillsSection from "../components/sections/SkillsSection";
import ContactSection from "../components/sections/ContactSection";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-top">
        <p className="display-6 text-xl-5 sub-ttl">Thank you for visiting.</p>
        <div className="wrap">
          <h2 className="ttl display-2 text-secondary text-xl-5 fadeUp">
            Minori-Takeuchi Portfolio
          </h2>
        </div>
      </div>
      <section className="page-section" id="profile">
        <ProfileSection />
      </section>
      <section className="page-section" id="skills">
        <SkillsSection />
      </section>
      <section className="page-section" id="works">
        <WorksSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default Home;
