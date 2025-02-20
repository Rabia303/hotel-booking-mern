import React from "react"
const Rooms = () => {
  return (
    <>
    <div>
  <div className="section big-55-height over-hide z-bigger">
    <div className="parallax parallax-top" style={{backgroundImage: 'url("./src/assets//img/rooms.jpg")'}} />
    <div className="dark-over-pages" />
    <div className="hero-center-section pages">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 parallax-fade-top">
            <div className="hero-text">Our Rooms</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section padding-top-bottom-smaller background-dark over-hide z-too-big">
    <div className="section">		
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-6 col-xl-4 px-sm-0">
                <div className="booking-sep-wrap">
                  <div className="input-daterange input-group" id="flight-datepicker-1">
                    <div className="form-item">
                      <span className="fontawesome-calendar" />
                      <input className="input-sm" type="text" autoComplete="off" id="start-date" name="start" placeholder="check-in" data-date-format="DD, MM d" />
                      <span className="date-text date-depart" />
                    </div>
                    <div className="form-item">
                      <span className="fontawesome-calendar" />
                      <input className="input-sm" type="text" autoComplete="off" id="end-date" name="end" placeholder="check-out" data-date-format="DD, MM d" />
                      <span className="date-text date-return" />
                    </div>
                  </div>	
                </div>
              </div>
              <div className="col-md-3 col-xl-2 px-sm-0">
                <div className="quantity">
                  <input type="number" min={1} max={9999} step={1} defaultValue={1} />
                </div>	
              </div>	
              <div className="col-md-3 col-xl-2 px-sm-0">
                <a className="booking-button-big" href="./src/search.html">check<br />availability</a>
              </div>	
            </div>	
          </div>
        </div>
      </div>					
    </div>
  </div>
  <div className="section padding-top-bottom over-hide background-grey">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="room-box background-white">
            <div className="room-name">suite tanya</div>
            <div className="room-per">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <img src="./src/assets/img/room3.jpg" alt />
            <div className="room-box-in">
              <h5 className>pool suite</h5>
              <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
              <a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 130$</a>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/5.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/3.svg" alt />
                <img src="./src/assets/img/1.svg" alt />
                <a href="./src/rooms-gallery.html">full info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="room-box background-white">
            <div className="room-name">suite helen</div>
            <div className="room-per">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <img src="./src/assets/img/room4.jpg" alt />
            <div className="room-box-in">
              <h5 className>small room</h5>
              <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
              <a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 80$</a>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/4.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/6.svg" alt />
                <img src="./src/assets/img/3.svg" alt />
                <a href="./src/rooms-gallery.html">full info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
          <div className="room-box background-white">
            <div className="room-name">suite andrea</div>
            <div className="room-per">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <img src="./src/assets/img/room5.jpg" alt />
            <div className="room-box-in">
              <h5 className>Apartment</h5>
              <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
              <a className="mt-1 btn btn-primary" href="./src/rooms-gallery.html">book from 110$</a>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/5.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/3.svg" alt />
                <img src="./src/assets/img/6.svg" alt />
                <a href="rooms-gallery.html">full info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.4s">
          <div className="room-box background-white">
            <div className="room-name">suite diana</div>
            <div className="room-per">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <img src="./src/assets/img/room6.jpg" alt />
            <div className="room-box-in">
              <h5 className>big Apartment</h5>
              <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
              <a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 160$</a>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/5.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/3.svg" alt />
                <img src="./src/assets/img/6.svg" alt />
                <a href="rooms-gallery.html">full info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
          <div className="room-box background-white">
            <div className="room-name">suite andrea</div>
            <div className="room-per">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <img src="./src/assets/img/room5.jpg" alt />
            <div className="room-box-in">
              <h5 className>Apartment</h5>
              <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
              <a className="mt-1 btn btn-primary" href="./src/rooms-gallery.html">book from 110$</a>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/5.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/3.svg" alt />
                <img src="./src/assets/img/6.svg" alt />
                <a href="rooms-gallery.html">full info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.4s">
          <div className="room-box background-white">
            <div className="room-name">suite diana</div>
            <div className="room-per">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <img src="./src/assets/img/room6.jpg" alt />
            <div className="room-box-in">
              <h5 className>big Apartment</h5>
              <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
              <a className="mt-1 btn btn-primary" href="./src/rooms-gallery.html">book from 160$</a>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/5.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/3.svg" alt />
                <img src="./src/assets/img/6.svg" alt />
                <a href="rooms-gallery.html">full info</a>
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
          <a href="services.html">
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-1.jpg" alt />
              <div className="services-text-over">spa salon</div>
            </div>
          </a>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-sm-0">
          <a href="services.html">
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-2.jpg" alt />
              <div className="services-text-over">restaurant</div>
            </div>
          </a>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
          <a href="services.html">
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-3.jpg" alt />
              <div className="services-text-over">pool</div>
            </div>
          </a>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
          <a href="services.html">
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-4.jpg" alt />
              <div className="services-text-over">activities</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>


  )
}

export default Rooms