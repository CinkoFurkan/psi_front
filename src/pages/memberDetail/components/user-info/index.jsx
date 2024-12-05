export default function UserInfo({first_name , last_name , title_member , university , team}) {
    return (
        <div className="pb-4 mb-4 text-center border-b">
            <h1 className="text-5xl font-bold text-gray-800">{`${first_name} ${last_name}`}</h1>
            {team && <p className="mt-1 text-lg text-gray-500">{team}</p>}
            {title_member && (
                <p className="mt-1 text-lg text-gray-600">{title_member}</p>
            )}
            {university && (
                <p className="mt-1 text-lg text-gray-600">{university}</p>
            )}
        </div>
    )
}