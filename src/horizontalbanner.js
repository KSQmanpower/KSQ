import React from "react";
import videosource from "./Assets/HorizontalVideo.mp4";
import videosource2 from "./Assets/HorizontalVideo2.mp4";
import "./horizontalbanner.css"; // Import the CSS file

function HorizontalBanner() {
  return (
    <div className="totalContainerClass">
      <div className="flexWrapper">
        <div className="gridContainer">
          <div className="container1">
            <video
              className="videoStyle HorizontalVideo"
              loading="lazy"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={videosource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="container2">
            <p className="textAlightLeft2 TextContent">
            we pride ourselves on providing top-notch domestic helpers who are well-trained, dedicated, and tailored to meet your specific household needs. Our personalized approach ensures that you get a helper who matches your lifestyle and requirements, making your home management stress-free. Trust us to deliver the best care for your home and loved ones. With our expertise, your satisfaction is guaranteed.
            </p>
          </div>
        </div>
      </div>
      <div className="flexWrapper">
        <div className="gridContainer2">
          <div className="container2">
            <p className="textAlightLeft3 TextContent">
              we understand that finding the right helper for your household is
              crucial. <br></br>
              Our thorough selection process ensures that every maid we
              recommend is highly skilled, trustworthy, and a perfect fit for
              your family’s unique needs. With us, you’re not just hiring a
              maid, but also a reliable partner who helps create a happier
              and more efficient home environment.
            </p>
          </div>

          <div className="container1">
            <video
              className="videoStyle HorizontalVideo"
              autoPlay
              muted
              loading="lazy"
              playsInline
              loop
            >
              <source src={videosource2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBanner;
