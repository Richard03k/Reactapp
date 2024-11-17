import React from "react";

const Page5_div1 = () => {
  return (
    <div id="Page5_div1">
      <img src="images/rating.svg" id="Page5_div_img1" />
      <p id="Page5_div_txt1">
        Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
        Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi
        vitae lectus hac hendrerit. Montes justo turpis sit amet.
      </p>
      <div id="Page5_div4">
        <img
          src="images/pfp1.svg"
          style={{ gridRow: '1 / 3', alignSelf: 'center' }}
        />
        <p style={{ fontWeight: 'bold', margin: 0 }}>Fannie Summers</p>
        <p style={{ gridColumn: '2', margin: 0 }}>Designer</p>
      </div>
    </div>
  );
};

export default Page5_div1;
