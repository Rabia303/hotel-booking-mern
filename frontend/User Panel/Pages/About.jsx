import React from "react"
import { Link } from "react-router-dom"
 const About = () => {
  return (
    <>
    
<div>
  <div className="section big-55-height over-hide z-bigger">
    <div id="poster_background-about" />
    <div id="video-wrap" className="parallax-top">
      <video id="video_background" preload="auto" autoPlay loop="loop" muted="muted" poster="img/trans.png"> 
        <source src="./src/assets/video/video-about.mp4" type="video/mp4" /> 
      </video>
    </div>
    <div className="dark-over-pages" />
    <div className="hero-center-section pages">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 parallax-fade-top">
            <div className="hero-text">About Us</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section padding-top-bottom-smaller background-dark-2 over-hide">		
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">	
          <h5 className="color-grey">A new dimension of luxury.</h5>
          <p className="color-white mt-3 mb-3"><em>our presentation, 0:48 min</em></p>
          <a href="https://vimeo.com/54851233" className="video-button" data-fancybox><i className="fa fa-play" /></a>
        </div>
      </div>
    </div>	
  </div>
  <div className="section padding-top-bottom over-hide">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 align-self-center">
          <div className="subtitle with-line text-center mb-4">a bit about us</div>
          <h3 className="text-center padding-bottom-small">finest hotel</h3>
        </div>
        <div className="section clearfix" />
        <div className="col-md-4">
          <div className="services-box text-center">
            <img src="./src/assets/img/4.svg" alt />
            <h5 className="mt-2">welcome drink</h5>
            <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
            <a className="mt-1 btn btn-primary" href="services.html">read more</a>
          </div>
        </div>
        <div className="col-md-4 mt-5 mt-md-0">
          <div className="services-box text-center">
            <img src="./src/assets/img/5.svg" alt />
            <h5 className="mt-2">swimming pool</h5>
            <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
            <a className="mt-1 btn btn-primary" href="services.html">read more</a>
          </div>
        </div>
        <div className="col-md-4 mt-5 mt-md-0">
          <div className="services-box text-center">
            <img src="./src/assets/img/6.svg" alt />
            <h5 className="mt-2">food included</h5>
            <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
            <a className="mt-1 btn btn-primary" href="services.html">read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section background-grey over-hide">
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col-xl-6 px-0">
          <div className="img-wrap" id="rev-1">
            <img src="./src/assets/img/room1.jpg" alt />
            <div className="text-element-over">private pool suite</div>
          </div>
        </div>
        <div className="col-xl-6 px-0 mt-4 mt-xl-0 align-self-center">
          <div className="row justify-content-center">
            <div className="col-10 col-xl-8 text-center">
              <h3 className="text-center">Private pool suite</h3>
              <p className="text-center mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
              <a className="mt-5 btn btn-primary" href="search.html">check availability</a>
            </div>	
          </div>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-xl-6 px-0 mt-4 mt-xl-0 pb-5 pb-xl-0 align-self-center">
          <div className="row justify-content-center">
            <div className="col-10 col-xl-8 text-center">
              <h3 className="text-center">Sea view suite</h3>
              <p className="text-center mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
              <a className="mt-5 btn btn-primary" href="search.html">check availability</a>
            </div>	
          </div>
        </div>
        <div className="col-xl-6 px-0 order-first order-xl-last mt-5 mt-xl-0">
          <div className="img-wrap" id="rev-2">
            <img src="./src/assets/img/room2.jpg" alt />
            <div className="text-element-over">sea view suite</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section padding-top-bottom-big over-hide">
    <div className="parallax" style={{backgroundImage: 'url("./src/assets/img/5.jpg")'}} />
    <div className="section z-bigger">		
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div id="owl-sep-1" className="owl-carousel owl-theme">								 
              <div className="item">						
                <div className="quote-sep">	
                  <h4>&quot;Chilling out on the bed in your hotel room watching television, while wearing your own pajamas, is sometimes the best part of a vacation.&quot;</h4>
                  <h6>Jason Salvatore</h6>	
                </div>											
              </div>											
              <div className="item">					
                <div className="quote-sep">
                  <h4>&quot;Every good day starts off with a cappuccino, and there&quot;s no place better to enjoy some frothy caffeine than at the Thalia Hotel.&quot;</h4>
                  <h6>Terry Mitchell</h6>	
                </div>									
              </div>											
              <div className="item">					
                <div className="quote-sep">
                  <h4>&quot;I still enjoy traveling a lot. I mean, it amazes me that I still get excited in hotel rooms just to see what kind of shampoo they&quot;ve left me.&quot;</h4>
                  <h6>Michael Brighton</h6>
                </div>										
              </div>								 
            </div>	
          </div>
        </div>
      </div>					
    </div>
  </div>
  <div className="section background-dark over-hide">
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-sm-6 col-lg-3">
        <Link to='/Services'>Services
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-1.jpg" alt />
              <div className="services-text-over">spa salon</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-sm-0">
        <Link to='/Services'>Services
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-2.jpg" alt />
              <div className="services-text-over">restaurant</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
        <Link to='/Services'>Services
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-3.jpg" alt />
              <div className="services-text-over">pool</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
          <Link to='/Services'>Services
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-4.jpg" alt />
              <div className="services-text-over">activities</div>
            </div>
            </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
export default About
