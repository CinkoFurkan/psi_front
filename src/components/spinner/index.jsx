export default function Spinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f4efe6]  z-50">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-red-500">
            </div>
        </div>
    );
}
