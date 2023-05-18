import React from "react";
import { useNavigate } from "react-router-dom";


const ProfileSection = () => {
  const navigate = useNavigate();
  const goProfilePage = () => {
    navigate('/profile');
  }

  return (
    <div>
      <div className="profile section">
        <div className="text-center">
          <h2 className="section-heading display-3 text-secondary">Profile</h2>
          <h6 className="section-subheading fs-m fw-300 mb-5">私について</h6>
        </div>
      </div>
      <div className="profile-wrap mb-5">
        <img className="profile-img" src="./starfishbig.png" alt="StarFish" />
        <div className="profile-content">
          <h4 className="fs-m fw-300 mb-5">Minori-Takeuchi</h4>
          <p>
            2022年よりプログラミングを学び、現在は石川県に在住しながら在宅でWebアプリケーションの制作を行っています。
          </p>
          <p>
            主にLaravelとNuxtJSを中心に使用し、フロントエンドとバックエンドの両方をカバーすることができます。
          </p>
          <p>
            以前は商社で営業事務として10年間勤めていました。その経験から、常に最新情報をキャッチアップし、お客様の要望に合ったサービスを迅速に提供することを心掛けています。
          </p>
          <p>
            私はチームとお客様とのコミュニケーションを非常に重要視しており、共に協力し合いながら最高の成果物を提供するために全力を尽くします。
          </p>
        </div>
      </div>
      <div className=" text-center">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={goProfilePage}
        >
          Profile詳細はこちら
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
