import React from "react";
import { useNavigate } from "react-router-dom";
import ContactBox from "./ContactBox";
//import washingMachine from '../assets/washingMachine.png'
import fridge from "../assets/OIP.jpg";
import washingMachine from "../assets/home_app.png";
import television from "../assets/television.png";

export const MainSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const products = [
    {
      name: "Washing Machine",
      price: "$99.99",
      originalPrice: "$299.99",
      image: fridge,
    },
    {
      name: "Refrigerator",
      price: "$99.99",
      originalPrice: "$299.99",
      image: washingMachine,
    },
    {
      name: "Television",
      price: "$99.99",
      originalPrice: "$299.99",
      image: television,
    },
    // { name: 'Washing Machine 7kg', price: '$99.99', originalPrice: '$299.99', image: washingMachine },
  ];

  return (
    <div className="main">
      <div className="left">
        <div
          className="hot-deals-container"
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          {/* Left Section - Dark Background */}
          <div
            style={{
              backgroundColor: "#2a2a2a",
              color: "white",
              padding: "30px",
              borderRadius: "15px 0 0 15px",
              minWidth: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: "0 0 20%",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Hot Deals{" "}
                <span
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "3px",
                    backgroundColor: "#e84c7d",
                    marginLeft: "10px",
                  }}
                ></span>
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#999",
                  marginBottom: "20px",
                }}
              >
                Our lowest prices EVER!
              </p>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.6",
                  color: "#ccc",
                  marginBottom: "20px",
                }}
              >
                Get premium washing machine repair services at unbeatable
                prices. Professional technicians, 30-day warranty, and quick
                response times!
              </p>
            </div>
            <button
              onClick={() => navigate("/service")}
              style={{
                backgroundColor: "#e84c7d",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "12px",
                cursor: "pointer",
                alignSelf: "flex-start",
                marginBottom: "20px",
              }}
            >
              SMART SERVICES
            </button>
            <div style={{ display: "flex", gap: "10px", marginLeft: "30px" }}>
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) => (prev - 1 + products.length) % products.length,
                  )
                }
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "#555",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % products.length)
                }
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "#e84c7d",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ›
              </button>
            </div>
          </div>

          {/* Right Section - Product Cards */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              flex: "1",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "0 15px 15px 0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "15px",
                transform: `translateX(-${currentSlide * 220}px)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "15px",
                    minWidth: "200px",
                    textAlign: "left",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                      height: "180px",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "160px",
                        height: "160px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                      color: "#333",
                      textAlign: "center",
                    }}
                  >
                    {product.name}
                  </h4>

                  <div
                    style={{
                      marginBottom: "12px",
                      fontSize: "14px",
                      color: "#ffc107",
                      textAlign: "center",
                    }}
                  >
                    ★★★★★
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <p>
            Are you looking for washing machine, air conditioner, refrigerator,
            television, microwave oven, or dishwasher service in Chennai? You're
            in the right place! Just fill the form or call us, and we'll do the
            rest. Our inspection charges are very low compared to other service
            providers in Chennai. Our service support is designed to make you
            feel comfortable and reliable.
          </p>
          <p>
            We offer the best services in Chennai for all areas, and we attend
            to calls within 2 hours. Once you place a service request, you'll be
            notified via SMS or WhatsApp with service request order details,
            along with the technician's mobile number who will attend to your
            service request.
          </p>
          <p>
            Our service request system is very secure and convenient. We offer a
            30-day warranty on our services, ensuring the best work done by our
            technicians. Our customer service team guarantees continued support
            and follow-ups, as we care for your units.
          </p>

          <div className="video-section">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/X8Ew-bDF2KE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* <h3 className='service-title'>Washing Machine Repair Services</h3>
        <div className='service-row'>
        <ul className='service-list'>
           <li>Washing Machine 8 kg Semi Automatic Top Loading</li>
           <li>Washing Machine 6.2kg Fully Automatic Top Loading</li>
           <li>Washing Machine 6.5kg Automatic Front Loading</li>
           <li>Washing Machine 7kg Fully Automatic Top Loading</li>
           <li>Washing Machine 8kg Fully Automatic Front Loading</li>
           <li>Washing Machine 6.2kg Fully Automatic Top Loading </li>
           <li>All Other Models</li>

        </ul>
        <div className='service-image'>
          <img src={washingMachine} alt="Washing Machine" className='service-img'></img>
        </div>
        </div> */}
          {/* <h3 className='service-title'>Refrigerator Repair Services</h3>
        <div className='service-row'>
        <ul className='service-list'>
           <li>Fridge 185 Litre Single Door</li> 
           <li>Fridge 80 Litre Single Door</li> 
           <li>Fridge 604 Litre Side By Side</li> 
           <li>Fridge 407 Litre Double Door</li> 
           <li>Fridge 45 Litre Single Door</li>
           <li>Fridge 390 Litre Triple Door</li>
           <li>Fridge 638 Litre Side by Side</li> 
        </ul>
        <div>
            <img src={fridge} alt="Fridge" className='service-img-fridge'></img>
        </div>
        </div> */}
          <div>
            <h2 className="title">
              For More information For Direct Vist, Estimate, Repair Services.
            </h2>
            <p>
              If you are searching for “Home appliances service near me”, we are
              just one call away!
            </p>
            <p>
              <strong>WhatsApp/call - 9342232571 /9344600166</strong>
            </p>
          </div>
        </div>
      </div>
      <ContactBox />
    </div>
  );
};
