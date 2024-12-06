export default function BackgroundImage({data}) {
    return (
        <div
            className="bg-cover bg-center text-center overflow-hidden"
            style={{
                minHeight: "500px",
                backgroundImage: `https://psi-back.onrender.com${data.blogs?.image}`,
            }}
            title={data.blogs?.title}
        ></div>
    )
}