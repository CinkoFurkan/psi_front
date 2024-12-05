export default function Body({ data }) {
    return (
        <main className="mt-8">
            <div className="prose prose-lg text-black leading-relaxed max-w-none whitespace-pre-line text-justify">
                <div>{data.blogs?.text}</div>
                <p className="text-black px-3 py-3 text-right">
                    {new Date(data.blogs?.created_at).toLocaleDateString()}
                </p>
            </div>
        </main>
    )
}
