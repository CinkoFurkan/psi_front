export default function Biograhpy({bio}) {
    return (
        <div className="flex flex-col items-center mb-6">
            <p className="max-w-3xl font-light text-justify text-gray-700 lg:px-16 whitespace-pre-line ">
                {bio}
            </p>
        </div>
    )
}