export default function Header({data}) {
    return (
        <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                {data.blogs?.title}
            </h1>
        </header>
    )
}