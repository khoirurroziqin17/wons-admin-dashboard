export default function CardwithIcon({
  text,
  desc,
  icon,
  bgColorTw,
  bgIconTw,
}) {
  return (
    <div
      className={`max-w-sm flex items-center p-6 ${bgColorTw} rounded-lg shadow dark:bg-gray-800 `}
    >
      <div className={`p-3 ${bgIconTw} rounded-full`}>{icon}</div>

      <div className="ml-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {text}
        </h5>
        <p className="text-sm text-gray-400 dark:text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
