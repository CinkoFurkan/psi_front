import { useState } from "react";
import Button from "../../../../components/button";
import usePost from "../../../../hooks/post";
import toast from "react-hot-toast";

const Subscription = () => {
  const { postData } = usePost("email/");
  const [email, setEmail] = useState("");

  const postEmail = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      toast.error("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    try {
      await postData({
        user_mail: trimmedEmail,
      });
      setEmail("");
      toast.success("Abonelik başarılı!", { duration: 3000 });
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.", { duration: 3000 });
      console.error("Abonelik Hatası:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 lg:px-16 w-full">
      <h1 className="mb-6 text-3xl font-bold text-center text-black sm:text-4xl">
        Bizden Haberdar Olun
      </h1>

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
          placeholder="E-posta adresiniz"
          onInvalid={(e) => e.target.setCustomValidity("Lütfen geçerli bir e-posta adresi girin.")}
          onInput={(e) => e.target.setCustomValidity("")}
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
