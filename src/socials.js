import GoogleReviews from "./reviewCarousell";
import { ElfsightWidget } from "react-elfsight-widget";
import "./socials.css";

function Socials() {

  return (
    <div className="flex-container">
      <div className="review-widget widgetControl">
        <GoogleReviews />
      </div>
      {/* <ElfsightWidget widgetId="ef870bda-cf78-488e-85b5-109115b61d29" /> */}
      <ElfsightWidget widgetId="d2a3ee6f-09ac-4e20-b3f1-7149e3fae7ef" />
      {/* <iframe src='https://widgets.sociablekit.com/medium-publication-feed/iframe/25442466' style={{frameborder:'0',width:'95%',height:'1000px'}}></iframe> */}
    </div>
  );
}

export default Socials;