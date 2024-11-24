import React from "react";

const Page6_div2 = ({ item }) => {
  // Ensure `item` exists before trying to access properties
  console.log("Received item in Page6_div2:", item);
  if (!item) return <div>Invalid item</div>;

  return (
    <div>
      <h3>{item.title || "No Title Available"}</h3>
      <p>{item.content || "No Content Available"}</p>
    </div>
  );
};

export default Page6_div2;
