import React, { useState, useEffect } from "react";
import Page6_div2 from "./Page6_div2";

const Page6_API = () => {
  const [serviceItems, setServiceItems] = useState([]); // Holds the API response
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Tracks error state

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://win24-assignment.azurewebsites.net/api/faq"
      );
      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      console.log("Fetched Data:", data);

      // Ensure only valid items are set in state
      if (Array.isArray(data)) {
        setServiceItems(
          data.filter((item) => typeof item === "object" && item !== null)
        );
      } else {
        console.error("Unexpected API response structure");
        setServiceItems([]);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  useEffect(() => {
    console.log("Updated serviceItems:", serviceItems); // Debug serviceItems
  }, [serviceItems]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {Array.isArray(serviceItems) && serviceItems.length > 0 ? (
        serviceItems
          .filter((item) => typeof item === "object" && item !== null) // Skip invalid items
          .map((item) => (
            <Page6_div2 key={item.id} item={item} />
          ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default Page6_API;
