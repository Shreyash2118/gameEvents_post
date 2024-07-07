/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import app from "../../shared/FirebaseConfig";
import {doc,deleteDoc,getDocs,getFirestore,query,where,collection,} from "firebase/firestore";
import PostItem from "../../components/Home/PostItem";
import Toast from "@/components/Toast";
import { useRouter } from "next/router";
import PostModal from "@/components/Home/PostModal";
import { FaHome } from "react-icons/fa";



function Profile() {
  const { data: session } = useSession();
  const [userPost, setUserPost] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [post, setPost] = useState();
  const db = getFirestore(app);
  const router = useRouter();
  useEffect(() => {
    getUserPost();
  }, [session]);
  
  const getUserPost = async () => {
    setUserPost([])
    if (session?.user.email) {
      const q = query(
        collection(db, "posts"),
        where("email", "==", session?.user.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        setUserPost((userPost) => [...userPost, data]);
      });
    }
  };
  const onDeletePost = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      try {
        await deleteDoc(doc(db, "posts", id));
        setUserPost((prevPosts) => prevPosts.filter(post => post.id !== id));
        setShowToast(true);
      } catch (error) {
        console.error("Error deleting post: ", error);
      }
    }
  };



  return (
    <>
      <div className="p-6 mt-8 relative flex flex-col items-center justify-center">
        <button type="btn" className="text-[20px] absolute top-10 right-0 p-4 m-4 bg-orange-500 rounded-md " onClick={() => router.push('/')}>
          <FaHome className=" text-white rounded-md text-[25px]" />
        </button>

      {showToast ? (
        <div className="absolute top-10 right-0">
          <Toast
            msg={"Post Deleted Successfully"}
            closeToast={() => setShowToast(false)}
          />
        </div>
        ) : null}
        <div className="mt-7">
      <h2 className="text-[30px] font-extrabold text-blue-500">Your Profile</h2>
      <p className="text-gray-600 mb-4">Welcome, {session?.user.name}</p>   
      </div> 
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-10">
      {userPost &&
        userPost?.map((item, index) => (
          
          <div key={index}  onClick={()=>{document.getElementById('my_modal_2').showModal();setPost(item)}}>
          <PostModal post={post} />
              <PostItem post={item} modal={true} />
              <button
              className="bg-red-400 w-full p-1 mt-1 rounded-md text-white"
              onClick={() => onDeletePost(item.id)}
              >
              Delete
              </button>
              </div>
             
          ))}
      </div>
      <div className=" mt-10 bottom-0">
      <button type="btn" className="flex items-center justify-center font-bolder text-[18px] p-3 bg-green-500 rounded-md " onClick={() => router.push('/')}>
      Go to Home Page <FaHome className="ml-2 text-3xl"/>
    </button>
        </div>
        </div>
      </>
  );
}

export default Profile;
