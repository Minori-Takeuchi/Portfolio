import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import Rese from "../Images/Works/Rese/home.png";


function Home() {
  return (
    <div className="text-center margin-40">
      <div className='wrap'>
        <h2 className='display-2 text-secondary text-xl-5'>Minori-Takeuchi Portfolio</h2>
      </div>

      <section class="page-section" id="works">
        <div className="works">
          <div class="text-center">
            <h2 class="section-heading display-3 text-secondary">Works</h2>
            <h6 class="section-subheading fs-m fw-300 mb-5">私が作った作品一覧です</h6>
          </div>
          {/* 作品一覧 */}
          <div class="row">
            <div class="col-lg-4">
              <div className='card border-light'>
                <img className='card-img img-fluid' src={Rese} />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div className='card border-light'>
                <img className='card-img img-fluid' src={Rese} />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div className='card border-light'>
                <img className='card-img img-fluid' src={Rese} />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div className='card border-light'>
                <img className='card-img img-fluid' src={Rese} />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div className='card border-light'>
                <img className='card-img img-fluid' src={Rese} />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div className='card border-light'>
                <img className='card-img img-fluid' src={Rese} />
                <div class="card-body">
                  <h5 class="card-title display-6 text-muted fw-400">Rese </h5>
                  <p class="card-text"><small class="fs-s">飲食店予約サイト</small></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home