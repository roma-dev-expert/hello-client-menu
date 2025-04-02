import React, { useState } from 'react';
import { Settings as SettingsType } from '../../types/types';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsType>({
    theme: 'Light',
    language: 'English',
    notificationsEnabled: true,
  });

  const handleChangeTheme = (theme: 'Light' | 'Dark') => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const handleChangeLanguage = (language: 'English' | 'Russian') => {
    setSettings((prev) => ({ ...prev, language }));
  };

  const toggleNotifications = () => {
    setSettings((prev) => ({ ...prev, notificationsEnabled: !prev.notificationsEnabled }));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Выбор темы */}
      <div className="mb-4">
        <h2 className="text-lg font-medium">Theme</h2>
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => handleChangeTheme('Light')}
            className={`px-4 py-2 rounded ${settings.theme === 'Light' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Light
          </button>
          <button
            onClick={() => handleChangeTheme('Dark')}
            className={`px-4 py-2 rounded ${settings.theme === 'Dark' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Выбор языка */}
      <div className="mb-4">
        <h2 className="text-lg font-medium">Language</h2>
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => handleChangeLanguage('English')}
            className={`px-4 py-2 rounded ${
              settings.language === 'English' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleChangeLanguage('Russian')}
            className={`px-4 py-2 rounded ${
              settings.language === 'Russian' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Russian
          </button>
        </div>
      </div>

      {/* Управление уведомлениями */}
      <div className="mb-4">
        <h2 className="text-lg font-medium">Notifications</h2>
        <div className="mt-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={settings.notificationsEnabled}
              onChange={toggleNotifications}
              className="form-checkbox"
            />
            Enable notifications
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
