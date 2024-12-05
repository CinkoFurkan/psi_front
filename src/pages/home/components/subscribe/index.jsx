import { useState } from "react";
import Button from "../../../../components/button";
import usePost from "../../../../hooks/post";
import toast from "react-hot-toast";

const Subscription = () => {
  const { postData } = usePost("/email/");
  const [email, setEmail] = useState("");

  const postEmail = async (e) => {
    e.preventDefault();
    try {
      await postData({
        user_mail: email,
      });
      setEmail("");
      toast.success("Paramı geri istiyorum", {
        duration: 3000,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 lg:px-16 w-full">
      {/* Heading */}
      <h1 className="mb-6 text-3xl font-bold text-center text-black sm:text-4xl">
        Bizden Haberdar Olun
      </h1>

      {/* Form */}
      <form
        onSubmit={postEmail}
        className="flex flex-col items-center justify-center w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg px-4 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="E-mail adresiniz"
        />

        <Button
          type="submit"
          as="button"
          variant="primary"
          size="normal"
          className="w-full sm:w-auto"
        >
          Abone Ol
        </Button>
      </form>
    </div>
  );
};

export default Subscription;
