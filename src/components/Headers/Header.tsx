import NotificationDropdownMenu from "./NotificationDropdownMenu";
import ProfilePhoto from "./ProfilePhoto";
import SearchBar from "./SearchBar";
import SettingsDropdownMenu from "./SettingsDropdownMenu";

export default function Header() {
  return (
    <div className="flex shadow-sm p-4 justify-end">
      <div className="flex flex-col items-center space-x-4 text-gray-400 ">
        <SearchBar />
      </div>
      <div className="flex flex-col items-center space-x-4 text-gray-400 ">
        <NotificationDropdownMenu />
      </div>

      <div className="flex flex-col items-center space-x-4 ">
        <SettingsDropdownMenu />
      </div>

      <div className="flex flex-col items-center space-x-4 text-gray-400 ml-2">
        <ProfilePhoto />
      </div>
    </div>
  );
}
