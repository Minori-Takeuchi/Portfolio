import React from "react";
import { HashLink } from "react-router-hash-link";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Rese = () => {
  return (
    <div className="work container" id="top">
      {/* タイトルとカルーセル */}
      <div className="work-top">
        <div className="text-center work-ttl">
          <h2 className="section-heading display-3 text-secondary">Rese</h2>
          <h6 className="section-subheading fs-m fw-300 mb-5">
            飲食店予約サービス
          </h6>
        </div>
        <Carousel className="work-img">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Works/Rese/home.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Works/Rese/myPage.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/Works/Rese/detail.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        {/* GitHubリンク */}
        <div className="work-git d-flex align-items-center justify-content-end">
          <p className="text-secondary">GitHubはこちらからご確認ください！</p>
          <div className="work-git-item d-flex justify-content-around">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">本番環境</Tooltip>}
            >
              <span className="d-inline-block">
                <a
                  href="https://github.com/Minori-Takeuchi/Rese.git"
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
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">開発環境</Tooltip>}
            >
              <span className="d-inline-block">
                <a
                  href="https://github.com/Minori-Takeuchi/ReseDevelop.git"
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
                  個人開発の飲食店予約サービスです。初めてDocker,AWSを使用したプロジェクトになります。直感的な操作ができるようUIデザインを目指しました。サーバー開発環境と本番環境の二つを用意し、開発環境用はCircle
                  CIによる自動テスト・自動デプロイを実装しました。
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table responsive borderless>
          <thead>
            <tr>
              <th className="display-5">アプリケーションURL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  http://ec2-13-115-211-191.ap-northeast-1.compute.amazonaws.com/（開発環境用URL）
                </p>
                <p>※サービスは現在休止しています</p>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table responsive borderless>
          <thead>
            <tr>
              <th className="display-5">機能一覧</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h5>ユーザー向け</h5>
                <p>レスポンシブデザイン</p>
                <p>ユーザー認証機能</p>
                <p>メールログイン</p>
                <p>飲食店検索</p>
                <p>お気に入り店舗機能</p>
                <p>予約・予約日時変更・取り消し機能</p>
                <p>予約QRコード表示</p>
                <p>来店後の店舗評価機能</p>
                <p>予約リマインダーメール機能</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>管理者向け</h5>
                <p>店舗代表者の登録</p>
                <p>ユーザーへお気に入りを促すメールを送信</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>店舗代表者向け</h5>
                <p>自社店舗の登録</p>
                <p>管理店舗の予約確認</p>
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
                <p>NuxtJS</p>
                <p>Laravel</p>
                <p>Docker / Docker Compose</p>
                <p>AWS（EC2,RDS,S3）</p>
                <p>Firebase Authentication</p>
                <p>Circle CI</p>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="skill-icon"
                  src="/Images/Skills/nuxt.svg"
                  alt="NuxtJS"
                />
                <img
                  className="skill-icon"
                  src="/Images/Skills/laravel.svg"
                  alt="Laravel"
                />
                <img
                  className="skill-icon"
                  src="/Images/Skills/aws.svg"
                  alt="AWS"
                />
                <img
                  className="skill-icon"
                  src="/Images/Skills/docker.svg"
                  alt="Docker"
                />
                <img
                  className="skill-icon"
                  src="/Images/Skills/firebase.svg"
                  alt="Firebase"
                />
                <img
                  className="skill-icon"
                  src="/Images/Skills/circleci.svg"
                  alt="CircleCI"
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
  );
};

export default Rese;
