import React from "react";
import { HashLink } from "react-router-hash-link";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Share = () => {
  return (
    <div>
      <div className="work container" id="top">
        {/* タイトルとカルーセル */}
        <div className="work-top">
          <div className="text-center work-ttl">
            <h2 className="section-heading display-3 text-secondary">SHARE</h2>
            <h6 className="section-subheading fs-m fw-300 mb-5">
              SNSアプリケーション
            </h6>
          </div>
          <Carousel className="work-img">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/Works/Share/home.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/Works/Share/comment.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/Works/Share/register.png"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>

          {/* GitHubリンク */}
          <div className="work-git d-flex align-items-center justify-content-end">
            <p className="text-secondary">GitHubはこちらからご確認ください！</p>
            <div className="work-git-item d-flex justify-content-around">
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">フロントエンド</Tooltip>
                }
              >
                <span className="d-inline-block">
                  <a
                    href="https://github.com/Minori-Takeuchi/Share-frontend.git"
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
                overlay={<Tooltip id="tooltip-disabled">バックエンド</Tooltip>}
              >
                <span className="d-inline-block">
                  <a
                    href="https://github.com/Minori-Takeuchi/Share-backend.git"
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
                  <p>日々感じたことをその場で発信し、人と繋がるためのWebアプリケーションです。簡単につぶやくことができるよう、投稿・コメントは120文字までに設定しています。FireBase Authenticationによるメール・パスワード認証を取り入れています。</p>
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
                  <p>ユーザー認証機能</p>
                  <p>投稿の一覧表示・追加・削除機能</p>
                  <p>いいね機能</p>
                  <p>投稿に対するコメント機能</p>
                  <p>コメント一覧表示機能</p>
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
                  <p>Firebase Authentication</p>
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
                    src="/Images/Skills/firebase.svg"
                    alt="Firebase"
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

export default Share;
