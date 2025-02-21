import React from "react"
const Checkout = () => {
  return (
  <>
<div>
<div className="section big-55-height over-hide z-bigger">
        <div className="parallax parallax-top" style={{ backgroundImage: 'url("./src/assets/img/1.jpg")' }} />
        <div className="dark-over-pages" />
        <div className="hero-center-section pages">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 parallax-fade-top">
                <div className="hero-text">Checkout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Checkout Page</title>
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #1a1a1a;\n            color: white;\n            margin: 0;\n            padding: 10px;\n        }\n        .checkout-container {\n            display: flex;\n            justify-content: space-between;\n            max-width: 600px;\n            margin: 20px auto;\n            background-color: #2c2c2c;\n            padding: 10px;\n            border-radius: 8px;\n            box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);\n        }\n        .left-section, .right-section {\n            width: 45%;\n        }\n        .section-box {\n            background-color: #333;\n            padding: 8px;\n            border-radius: 6px;\n            margin-bottom: 6px;\n        }\n        .section-title {\n            font-size: 14px;\n            margin-bottom: 6px;\n        }\n        .room-info {\n            display: flex;\n            align-items: center;\n            gap: 6px;\n        }\n        .room-image {\n            width: 50px;\n            height: 40px;\n            object-fit: cover;\n            border-radius: 4px;\n        }\n        .room-details {\n            font-size: 10px;\n        }\n        .input-box, .pay-now {\n            width: 100%;\n            padding: 5px;\n            border-radius: 4px;\n            border: none;\n            margin-top: 6px;\n            font-size: 10px;\n        }\n        .pay-now {\n            background-color: white;\n            color: black;\n            cursor: pointer;\n        }\n        .pay-now:hover {\n            background-color: gray;\n            color: white;\n        }\n    " }} />
  <div className="checkout-container">
    <div className="left-section">
      <div className="section-box">
        <h2 className="section-title">Your Room</h2>
        <div className="room-info">
          <img src="room-image.jpg" alt="Luxury Super Deluxe" className="room-image" />
          <div className="room-details">
            <p>Luxury Super Deluxe</p>
            <p>📏 30 sf | 👥 3 Guests | 🛏️ 3 Beds | 🌆 City View</p>
          </div>
        </div>
      </div>
      <div className="section-box">
        <h2 className="section-title">Your Information</h2>
        <p><strong>Name:</strong> Hafizuddin Juwel</p>
        <p><strong>Email:</strong> juwelakhn@gmail.com</p>
        <p><strong>Phone:</strong> +880 1234 567890</p>
      </div>
      <div className="section-box">
        <h2 className="section-title">Payment Options</h2>
        <label><input type="radio" name="payment" /> Cash on Spot</label><br />
        <label><input type="radio" name="payment" /> Bank Transfer</label><br />
        <label><input type="radio" name="payment" /> Credit Card</label><br />
        <label><input type="radio" name="payment" /> Paypal</label>
      </div>
      <button className="pay-now">PAY NOW</button>
    </div>
    <div style={{width: '5%'}} />
    <div className="right-section">
      <div className="section-box">
        <h2 className="section-title">Subtotal</h2>
        <p className="total-price">$250 / Night</p>
        <h2 className="section-title">Check-In</h2>
        <input type="date" className="input-box" />
        <h2 className="section-title">Check-Out</h2>
        <input type="date" className="input-box" />
        <h2 className="section-title">Guests</h2>
        <input type="number" className="input-box" min={1} max={10} defaultValue={3} />
      </div>
      <div className="section-box">
        <h2 className="section-title">Extra Services</h2>
        <label><input type="checkbox" /> Enable Wifi</label><br />
        <label><input type="checkbox" /> Smoking Zone</label><br />
        <label><input type="checkbox" /> Service Guide</label><br />
        <label><input type="checkbox" /> Swimming Pool</label><br />
        <label><input type="checkbox" /> Child Corner</label>
      </div>
    </div>
  </div>
</div>


  </>
  )
}

export default Checkout
