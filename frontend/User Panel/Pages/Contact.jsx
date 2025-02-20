import React from "react"
const Contact = () => {
  return (
    <>
<div>
  <div className="section big-55-height over-hide z-bigger">
    <div className="parallax parallax-top" style={{backgroundImage: 'url("./src/assets/img/gallery/10.jpg")'}} />
    <div className="dark-over-pages" />
    <div className="hero-center-section pages">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 parallax-fade-top">
            <div className="hero-text">Get in Touch</div>
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
  <div className="section padding-top z-bigger">
    <div className="container">
      <div className="row justify-content-center padding-bottom-smaller">
        <div className="col-md-8">
          <div className="subtitle with-line text-center mb-4">get in touch</div>
          <h3 className="text-center padding-bottom-small">drop us a line</h3>
        </div>
        <div className="section clearfix" />
        <div className="col-md-4 ajax-form">
          <input name="name" type="text" placeholder="Your Name: *" autoComplete="off" />
        </div>
        <div className="col-md-4 mt-4 mt-md-0 ajax-form">
          <input name="email" type="text" placeholder="E-Mail: *" autoComplete="off" />
        </div>
        <div className="section clearfix" />
        <div className="col-md-8 mt-4 ajax-form">
          <textarea name="message" placeholder="Tell Us Everything" defaultValue={""} />
        </div>
        <div className="section clearfix" />
        <div className="col-md-8 mt-3 ajax-checkbox">
          <ul className="list">
            <li className="list__item">
              <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />
                collect my details through this form
              </label>
            </li>
          </ul>
        </div>
        <div className="section clearfix" />
        <div className="col-md-8 mt-3 ajax-form text-center">
          <button className="send_message" id="send" data-lang="en"><span>submit</span></button>
        </div>
        <div className="section clearfix" />
        <div className="col-md-8 padding-top-bottom">
          <div className="sep-line" />
        </div>
        <div className="section clearfix" />
        <div className="col-md-6 col-lg-4">
          <div className="address">
            <div className="address-in text-left">
              <p className="color-black">Address:</p>
            </div>
            <div className="address-in text-right">
              <p>Avenue Str. 328</p>
            </div>
          </div>
          <div className="address">
            <div className="address-in text-left">
              <p className="color-black">City:</p>
            </div>
            <div className="address-in text-right">
              <p>Thessaloniki</p>
            </div>
          </div>
          <div className="address">
            <div className="address-in text-left">
              <p className="color-black">Check-In:</p>
            </div>
            <div className="address-in text-right">
              <p>14:00 pm</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="address">
            <div className="address-in text-left">
              <p className="color-black">Phone:</p>
            </div>
            <div className="address-in text-right">
              <p>+21 60 374 7537</p>
            </div>
          </div>
          <div className="address">
            <div className="address-in text-left">
              <p className="color-black">Email:</p>
            </div>
            <div className="address-in text-right">
              <p>info@hotel.com</p>
            </div>
          </div>
          <div className="address">
            <div className="address-in text-left">
              <p className="color-black">Check-Out:</p>
            </div>
            <div className="address-in text-right">
              <p>11:00 am</p>
            </div>
          </div>
        </div>
        <div className="section clearfix" />
        <div className="col-md-8 text-center mt-5" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
          <p className="mb-0"><em>available at: 8am - 10pm</em></p>
          <h2 className="text-opacity">+21 60 374 7537</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="subscribe-home">
            <input type="text" placeholder="your email here" />
            <button data-lang="en">subscribe</button>
          </div>
        </div>
      </div>
    </div>	
  </div>
 
</div>

    </>
  )
}
export default Contact