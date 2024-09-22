import GoogleReviews from "./reviewCarousell";
import { ElfsightWidget } from "react-elfsight-widget";
import React, { useEffect } from "react";
import "./socials.css";

function Socials() {

  useEffect(() => {
    // Load Facebook Page Posts script
    const facebookScript = document.createElement('script');
    facebookScript.src = 'https://widgets.sociablekit.com/facebook-page-posts/widget.js';
    facebookScript.async = true;
    facebookScript.defer = true;
    document.body.appendChild(facebookScript);

    // Load Medium Publication Feed script
    const mediumScript = document.createElement('script');
    mediumScript.src = 'https://widgets.sociablekit.com/medium-publication-feed/widget.js';
    mediumScript.async = true;
    mediumScript.defer = true;
    document.body.appendChild(mediumScript);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(facebookScript);
      document.body.removeChild(mediumScript);
    };
  }, []);

  return (
    <div className="flex-container">
      <div className="review-widget widgetControl">
        <GoogleReviews />
      </div>
      <ElfsightWidget widgetId="d2a3ee6f-09ac-4e20-b3f1-7149e3fae7ef" />
      <div class='sk-ww-medium-publication-feed' data-embed-id='25465384'></div>
    </div>
  );
}

export default Socials;