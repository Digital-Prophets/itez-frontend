export default function Header() {
  return (
    <div className="flex shadow-sm p-4 justify-end">
      <div className="flex flex-col items-center space-x-4 text-gray-400 mr-3">
        <span className="flex flex-col ml-2 h-full">
          <span className="truncate w-30 text-black font-semibold tracking-wide leading-none">
            Bupe Mulenga
          </span>
          <span className="truncate w-30 text-black text-xs leading-none mt-1">
            Software Engineer
          </span>
        </span>
      </div>
    </div>
  );
}
