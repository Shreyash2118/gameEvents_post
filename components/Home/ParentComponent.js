import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase"; // Ensure this is correctly pointing to your Firebase setup
import Search from "./Search";
import PostItem from "./PostItem"; // Import your PostItem component

const ParentComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchFilteredData = async () => {
      if (searchText === "") {
        const querySnapshot = await getDocs(collection(db, "posts"));
        setFilteredData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } else {
        const fields = ["title", "desc", "zipcode", "location", "image", "date"];
        let queries = fields.map(field => query(collection(db, "posts"), where(field, "==", searchText)));
        let promises = queries.map(q => getDocs(q));
        let results = await Promise.all(promises);
        let allResults = [];
        results.forEach(result => {
          result.forEach(doc => {
            allResults.push({ id: doc.id, ...doc.data() }));
          });
        });
        setFilteredData(allResults);
      }
    };

    fetchFilteredData();
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
