export function Popup({ message, visible }) {
    if (!visible) return null;

    return (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded shadow-lg">
            {message}
        </div>
    );
}