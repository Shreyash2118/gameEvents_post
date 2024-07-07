import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Form from '../../components/CreatePost/Form'

const CreatePost = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      alert("You have to Sign in for creating the posts!");
      router.push("/");
    }
  }, []);
  return (
    <div className="flex justify-center mt-10">
          <div className="p-6 mt-8 lg:w-[35%] md:w-[50%]">
              <h2 className="text-[30px] font-extrabold text-blue-500">CREATE POST</h2>
              <p>Create posts and discover/invite new friends and players!</p>
              <Form/>
          </div>
    </div>
  );
};

export default CreatePost;
