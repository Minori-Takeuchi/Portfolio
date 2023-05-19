import React from "react";
import Table from "react-bootstrap/Table";
import { HashLink } from "react-router-hash-link";

const Profile = () => {
  return (
    <div className="profile" id="top">
      <div className="d-flex justify-content-center mb-5">
        <Table responsive borderless>
          <thead>
            <tr>
              <th>
                <h2 className="display-5 text-center text-secondary">
                  Profile
                </h2>
                <h3 className="fs-m text-center text-secondary fw-300 mb-5">
                  ご覧いただきありがとうございます！
                </h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3 className="mb-5 fw-400">Minori Takeuchi</h3>
                <p className="mb-4">
                  はじめまして！富山県出身、石川県在住のWebエンジニアです。子供の成長に合わせて働き方を変えたいと思いエンジニアの道を選びました。新しいことに挑戦するのが好きです。お仕事をいただけることに感謝し、報連相・迅速なレスポンス・コミュニケーションを心掛けてプロジェクトに取り組みます。
                </p>
                <h5>性格</h5>
                <p>新しいもの好き・真面目・物事をまず考える・決めたら即実行</p>
                <h5>趣味</h5>
                <p>歌を歌うこと・読書</p>
                <h5>特技</h5>
                <p>
                  新しい環境に適応すること・同時進行で複数のことを考えることができる
                </p>
                <h5>資格</h5>
                <p>基本情報技術者・ITパスポート・日商簿記3級</p>
              </td>
            </tr>
          </tbody>
        </Table>
        <img className="profile-img-s" src="/starfishbig.png" alt="StarFish" />
        <img className="profile-img-m" src="/starfishbig.png" alt="StarFish" />
      </div>
      <div className="text-center">
        <HashLink to="/#profile">
          <button type="button" className="btn btn-outline-secondary">
            Homeへ戻る
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default Profile;
