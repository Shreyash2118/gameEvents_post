import Hero from "../components/Home/Hero";
import Search from "../components/Home/Search";
import GameList from "../components/Home/GameList";
import Posts from "../components/Home/Posts";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import app from '../shared/FirebaseConfig'
import {useState, useEffect } from "react";

export default function Home() {

  const db = getFirestore(app);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  },[])

  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {

      setPosts(posts=>[...posts,doc.data()])
    })
  }

  

  return (
    <div className="px-5 sm:px-7 md:pd-10 mt-7">
        <Hero />
        <Search />
        <GameList />
      {posts?<Posts posts={posts} /> :null}
    </div>
  );
}
