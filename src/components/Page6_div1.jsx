import React from "react";

const Page6_div1 = () => {
  return (
    <div id="Page6_div1">
      <p id="Page6_txt1">
        Any questions?
        <br />
        Check out the FAQs
      </p>
      <p id="Page6_txt2">
        Still have unanswered questions and need to get in touch?
      </p>
      <div style={{ display: "flex" }}>
        <div id="Page6_div2">
          <img src="images/Phone.svg" />
          <p>Still have questions?</p>
          <div style={{ display: "flex" }}>
            <p style={{ paddingRight: "15px", color: "#6366F1" }}>Contact us</p>
            <img src="images/P_arrow.svg" />
          </div>
        </div>
        <div id="Page6_div3">
          <img src="images/Msg.svg" />
          <p>Don't like phone calls?</p>
          <div style={{ display: "flex" }}>
            <p style={{ paddingRight: "15px", color: "#22C55E" }}>Contact us</p>
            <img src="images/G_arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6_div1;
