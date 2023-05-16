import React from 'react'

function Home() {
  return (
    <div className="margin-80">
      <p className='display-6 text-xl-5 sub-ttl'>Thank you for visiting.</p>
      <div className='wrap'>
        <h2 className='display-2 text-secondary text-xl-5 fadeUp'>Minori-Takeuchi Portfolio</h2>
      </div>

      {/* プロフィール */}
      <section className='page-section' id='profile'>
        <div className="profile section">
          <div className='text-center'>
            <h2 className="section-heading display-3 text-secondary">Profile</h2>
            <h6 className="section-subheading fs-m fw-300 mb-5">私について</h6>
          </div>
        </div>
        <div class="profile-wrap mb-5">
            <img className='profile-img' src='./starfishbig.png' />
          <div className="profile-content">
            <h4 className='fs-m fw-300 mb-5'>Minori-Takeuchi</h4>
            <p>2022年よりプログラミングを学び、現在は石川県に在住しながら在宅でWebアプリケーションの制作を行っています。</p>
            <p>主にLaravelとNuxtJSを中心に使用し、フロントエンドとバックエンドの両方をカバーすることができます。</p>
            <p>以前は商社で営業事務として10年間勤めていました。その経験から、常に最新情報をキャッチアップし、お客様の要望に合ったサービスを迅速に提供することを心掛けています。</p>
            <p>私はチームとお客様とのコミュニケーションを非常に重要視しており、共に協力し合いながら最高の成果物を提供するために全力を尽くします。</p>
          </div>
        </div>
        <div className=' text-center'>
          <button type="button" class="btn btn-outline-secondary">Profile詳細はこちら</button>
        </div>
      </section>

      {/* スキル一覧 */}
      <section className='page-section' id='profile'>
        <div className="skills section">
          <div className='text-center'>
            <h2 className="section-heading display-3 text-secondary">Skills</h2>
            <h6 className="section-subheading fs-m fw-300 mb-5">私にできること</h6>
          </div>
          <div className="skill-icon-list mb-5">
            <img className='skill-icon' src="./Images/Skills/html.svg" />
            <img className='skill-icon' src="./Images/Skills/php.svg" />
            <img className='skill-icon' src="./Images/Skills/javascript.svg" />
            <img className='skill-icon' src="./Images/Skills/laravel.svg" />
            <img className='skill-icon' src="./Images/Skills/nuxt.svg" />
            <img className='skill-icon' src="./Images/Skills/vue.svg" />
            <img className='skill-icon' src="./Images/Skills/react.svg" />
            <img className='skill-icon' src="./Images/Skills/mysql.svg" />
            <img className='skill-icon' src="./Images/Skills/aws.svg" />
            <img className='skill-icon' src="./Images/Skills/docker.svg" />
            <img className='skill-icon' src="./Images/Skills/circleci.svg" />
            <img className='skill-icon' src="./Images/Skills/firebase.svg" />
            <img className='skill-icon' src="./Images/Skills/github.svg" />
          </div>
          <p className='mb-5'>上記の言語やフレームワーク、ツールを使用しています。その他勉強中の言語もございます。少しでもお役に立てるよう日々のスキルアップを目標としています。</p>
          <div className="text-center">
            <button type="button" class="btn btn-outline-secondary">Skills詳細はこちら</button>
          </div>
        </div>
      </section>

      {/* 作品一覧 */}
      <section className='page-section' id='works'>
        <div className="works section">
          <div className="text-center">
            <h2 className="section-heading display-3 text-secondary">Works</h2>
            <h6 className="section-subheading fs-m fw-300 mb-5">私が作った作品一覧です</h6>
          </div>
          <div class="row">
            <div class="col-xxl-4 col-md-6">
              <div className='card border-light'>
                <img className='card-img img-fluid' src='./Images/Works/Rese/home.png' />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div className='card border-light'>
                <img className='card-img img-fluid' src='./Images/Works/Share/home.png' />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">SHARE</h5>
                  <p class="card-text"><small class="fs-s">SNSアプリケーション</small></p>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div className='card border-light'>
                <img className='card-img img-fluid' src='./Images/Works/Rese/home.png' />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">SA</h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div className='card border-light'>
                <img className='card-img img-fluid' src='./Images/Works/Rese/home.png' />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div className='card border-light'>
                <img className='card-img img-fluid' src='./Images/Works/Rese/home.png' />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div className='card border-light'>
                <img className='card-img img-fluid' src='./Images/Works/Rese/home.png' />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home