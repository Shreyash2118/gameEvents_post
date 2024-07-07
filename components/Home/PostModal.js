import React from "react";
import PostItem from "./PostItem";
import { HiOutlineXCircle } from "react-icons/hi2";

const PostModal = ({ post }) => {
  return (
    <div>
      <dialog id="my_modal_2" className="modal p-0 rounded-b-lg">
        <form method="dialog" className="modal-box">
          <button className="absolute right-2 top-2 text-red-500">
            <HiOutlineXCircle className="text-[30px]" />
          </button>
          <PostItem post={post} />
        </form>
      </dialog>
    </div>
  );
};

export default PostModal;
