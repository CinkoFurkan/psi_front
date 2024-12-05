export default function BackgroundImage({data}) {
    return (
        <div
            className="bg-cover bg-center text-center overflow-hidden"
            style={{
                minHeight: "500px",
                backgroundImage: `url(${data.blogs?.image})`,
            }}
            title={data.blogs?.title}
        ></div>
    )
}