import React from "react";
import Page6_API from "./Page6_API";

const Page6_div2 = ({ item }) => {
  // Ensure `item` exists before trying to access properties
  console.log("Received item in Page6_div2:", item);
  if (!item) return <div></div>;

  return (
    <div id="Delete">
      <p id="title">{item.title}</p>
      <p id="content">{item.content}</p>
    </div>
  );
};

export default Page6_div2;
