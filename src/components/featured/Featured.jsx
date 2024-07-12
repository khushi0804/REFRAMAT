import React from "react";
import "./Featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h2 className="titled">Total Revenue</h2>
        <MoreVertIcon fontSize="small" className="morevert" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>

        <p className="sales">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processiong.Last payments may not be included.
        </p>
      </div>
    </div>
  );
};

export default Featured;
