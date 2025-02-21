import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
        setIsScrolling(true);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const headerStyle = {
    background: "rgba(240, 240, 240, 0.95)", // Slightly gray and transparent
    color: "#000", // Black text
    padding: "15px 30px",
    position: "fixed", // Ensures the header is fixed at the top
    top: "0",
    width: "100%",
    zIndex: 1000, // Higher z-index to prevent it from being hidden by other elements
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.3s ease, top 0.3s ease", // Smooth scrolling effect
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Border for visual separation
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow to distinguish it from content
    fontFamily: "'Poppins', sans-serif",
  };
  
  const menuStyle = {
    display: "flex",
    listStyle: "none",
    padding: 0,
    margin: 0,
    alignItems: "center",
  };

  const menuItemStyle = {
    position: "relative",
    marginLeft: "25px",
  };

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "600",
    padding: "10px 20px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease, color 0.3s ease",
    cursor: "pointer",
  };

  const dropdownStyle = {
    display: "none",
    position: "absolute",
    backgroundColor: "#f8f8f8",
    padding: "10px 0",
    listStyle: "none",
    margin: 0,
    top: "100%",
    left: 0,
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    minWidth: "180px",
  };

  const dropdownItemStyle = {
    padding: "10px 20px",
  };

  const dropdownLinkStyle = {
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const visibleDropdownStyle = {
    ...dropdownStyle,
    display: "block",
  };

  return (
    <nav style={headerStyle}>
      <Link to="/" style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>
        MyLogo
      </Link>
      <ul style={menuStyle}>
        <li style={menuItemStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>

        {/* Rooms Dropdown */}
        <li
          style={menuItemStyle}
          onMouseEnter={() => setActiveDropdown("rooms")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span style={linkStyle}>Rooms</span>
          <ul style={activeDropdown === "rooms" ? visibleDropdownStyle : dropdownStyle}>
            <li style={dropdownItemStyle}>
              <Link to="/rooms" style={dropdownLinkStyle}>
                Our Rooms
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link to="/rooms_gallery" style={dropdownLinkStyle}>
                Room Gallery
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link to="/rooms_video" style={dropdownLinkStyle}>
                Room Video
              </Link>
            </li>
          </ul>
        </li>

        {/* Pages Dropdown */}
        <li
          style={menuItemStyle}
          onMouseEnter={() => setActiveDropdown("pages")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span style={linkStyle}>Pages</span>
          <ul style={activeDropdown === "pages" ? visibleDropdownStyle : dropdownStyle}>
            <li style={dropdownItemStyle}>
              <Link to="/explore" style={dropdownLinkStyle}>
                Explore
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link to="/booking" style={dropdownLinkStyle}>
                Search
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link to="/services" style={dropdownLinkStyle}>
                Services
              </Link>
            </li>
          </ul>
        </li>

        {/* Reservation Dropdown */}
        <li
          style={menuItemStyle}
          onMouseEnter={() => setActiveDropdown("reservation")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span style={linkStyle}>Reservation</span>
          <ul style={activeDropdown === "reservation" ? visibleDropdownStyle : dropdownStyle}>
            <li style={dropdownItemStyle}>
              <Link to="/room_booking" style={dropdownLinkStyle}>
                Booking
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link to="/checkout" style={dropdownLinkStyle}>
                Checkout
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link to="/confirmation" style={dropdownLinkStyle}>
                Confirmation
              </Link>
            </li>
          </ul>
        </li>

        {/* More Dropdown */}
        <li
          style={menuItemStyle}
          onMouseEnter={() => setActiveDropdown("more")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span style={linkStyle}>More</span>
          <ul style={activeDropdown === "more" ? visibleDropdownStyle : dropdownStyle}>
            <li style={dropdownItemStyle}>
              <Link to="/test" style={dropdownLinkStyle}>
                Testimonials
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link to="/gallery" style={dropdownLinkStyle}>
                Gallery
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link to="/tandc" style={dropdownLinkStyle}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </li>

        {/* Individual Links */}
        <li style={menuItemStyle}>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/booking" style={linkStyle}>
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
