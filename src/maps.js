import React from "react";
import "./Maps.css";

function Maps() {
  return (
    <div>
      <div className="maps">
        <h1>Locate Us!</h1>
        <b>
          <p>1 Roxy Square, 50 E Coast Road #02-80 S428769</p>
        </b>
        <div className="GridMaps">
          <div className="grid1maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127640.95243219382!2d103.75131044725606!3d1.3073311996733283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da195d2a93e23f%3A0x8af940792d587cf3!2sRoxy%20Square%201!5e0!3m2!1sen!2ssg!4v1723307914853!5m2!1sen!2ssg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map 1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;