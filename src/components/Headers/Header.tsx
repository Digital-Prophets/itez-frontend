import NotificationDropdownMenu from './NotificationDropdownMenu';
import SettingsDropdownMenu from './SettingsDropdownMenu';

export default function Header() {
  return (
    <div className="flex shadow-sm p-4 justify-end">
      <div className="flex flex-col items-center space-x-4 text-gray-400 mr-3">
        <NotificationDropdownMenu />
      </div>
      <div className="flex flex-col items-center space-x-4 text-gray-400 mr-3">
        <SettingsDropdownMenu />
      </div>
    </div>
  );
}
