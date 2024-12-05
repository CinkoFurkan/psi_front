import Input from "../input";
import toast from "react-hot-toast";

export default function Form({contact, setContact, postData}) {

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setContact((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await postData({
                user_name: contact.username,
                user_email: contact.email,
                subject: contact.subject,
                message: contact.message,
            });
            toast.success("Mesajını bize iletildi", {
                duration: 3000,
            });
            setContact({
                username: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            toast.success("Mesaj göndeririken bir hata oluştu tekrar deneyin", {
                duration: 3000,
            });
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <Input type="text" placeholder='İsim' value={contact.username} onChange={changeHandler}
                   name="username"/>

            <Input
                type="email"
                placeholder="E-Posta"
                name="email"
                value={contact.email}
                onChange={changeHandler}
                required
            />

            <Input
                type="text"
                placeholder="Konu"
                name="subject"
                value={contact.subject}
                onChange={changeHandler}
                required
            />

            <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Mesajınızı buraya yazın..."
                name="message"
                value={contact.message}
                required
                onChange={changeHandler}
                style={{height: "121px"}}
            ></textarea>

            <div className="flex justify-between">
                <input
                    className="shadow bg-background text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Gönder"
                />
            </div>
        </form>
    )
}