import React from "react";
import Image from "next/image";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const USER_IMAGE =
  "https://lh3.googleusercontent.com/ogw/AF2bZyhApSkaYEsHHS5PrWhxgLNv3Ka0rdrSEW6Irl318IDyjw=s32-c-mo";
function Header() {
  const { data: session } = useSession();
  console.log("Session", session);
  const router = useRouter();
  return (
    <div className="fixed top-0 z-50 w-full bg-white flex justify-between p-3 border-b-[2px] border-[#ff3366]">
      <Image src="/images/logo.png" alt="logo" width={40} height={40}/>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/create-post")}
          className="bg-black px-3 p-2 text-white rounded-full"
        >
          <span className="hidden sm:block">CREATE POST</span>{" "}
          <HiMiniPencilSquare className="sm:hidden text-[20px]" />
        </button>

        {!session ? (
          <button
            className="bg-white px-3 p-2 text-grey rounded-full border-[1px]"
            onClick={() => signIn()}
          >
            <span className="hidden sm:block">SIGN IN</span>{" "}
            <FaSignInAlt className="sm:hidden text-[20px]" />
          </button>
        ) : (
          <button
            className="bg-white px-3 p-2 text-grey rounded-full border-[1px]"
            onClick={() => signOut()}
          >
            <span className="hidden sm:block">SIGN OUT</span>{" "}
            <FaSignOutAlt className="sm:hidden text-[20px]" />
          </button>
        )}
        {session?  
          <Image src={session?session?.user?.image:USER_IMAGE} alt='user image'
           className='rounded-full cursor-pointer' onClick={()=>router.push('/profile')}
           width={40} height={40} />:null}
      </div>
    </div>
  );
}
export default Header;
