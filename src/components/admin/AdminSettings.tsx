import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { Save, Lock, User } from 'lucide-react';

export default function AdminSettings() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [accountData, setAccountData] = useState({
    username: 'admin',
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem('adminCredentials') || '{}');
    setAccountData({ username: credentials.username || 'admin' });
  }, []);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const credentials = JSON.parse(localStorage.getItem('adminCredentials') || '{}');
    
    if (passwordData.currentPassword !== credentials.password) {
      setError('Current password is incorrect');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    credentials.password = passwordData.newPassword;
    localStorage.setItem('adminCredentials', JSON.stringify(credentials));
    
    setSaved(true);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setTimeout(() => setSaved(false), 3000);
  };

  const handleUsernameChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    const credentials = JSON.parse(localStorage.getItem('adminCredentials') || '{}');
    credentials.username = accountData.username;
    localStorage.setItem('adminCredentials', JSON.stringify(credentials));
    
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account and security settings</p>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Settings saved successfully!
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-blue-600" size={24} />
            <h2 className="text-xl text-gray-900">Account Settings</h2>
          </div>
          <form onSubmit={handleUsernameChange} className="space-y-4">
            <div>
              <label className="block mb-2 text-gray-700">Username</label>
              <input
                type="text"
                required
                value={accountData.username}
                onChange={(e) => setAccountData({ username: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Save size={20} />
              Save Username
            </button>
          </form>
        </div>

        {/* Password Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-blue-600" size={24} />
            <h2 className="text-xl text-gray-900">Change Password</h2>
          </div>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block mb-2 text-gray-700">Current Password</label>
              <input
                type="password"
                required
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">New Password</label>
              <input
                type="password"
                required
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Confirm New Password</label>
              <input
                type="password"
                required
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Save size={20} />
              Change Password
            </button>
          </form>
        </div>

        {/* Data Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl mb-4 text-gray-900">Data Management</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="mb-1 text-gray-900">Export Data</h3>
                <p className="text-sm text-gray-600">Download all your website data as JSON</p>
              </div>
              <button
                onClick={() => {
                  const data = {
                    programs: JSON.parse(localStorage.getItem('programs') || '[]'),
                    impactStories: JSON.parse(localStorage.getItem('impactStories') || '[]'),
                    news: JSON.parse(localStorage.getItem('news') || '[]'),
                    testimonials: JSON.parse(localStorage.getItem('testimonials') || '[]'),
                    gallery: JSON.parse(localStorage.getItem('gallery') || '[]'),
                  };
                  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'foundation-data.json';
                  a.click();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Export
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div>
                <h3 className="mb-1 text-gray-900">Clear All Data</h3>
                <p className="text-sm text-gray-600">Reset all content to defaults (cannot be undone)</p>
              </div>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
                    localStorage.removeItem('programs');
                    localStorage.removeItem('impactStories');
                    localStorage.removeItem('news');
                    localStorage.removeItem('testimonials');
                    localStorage.removeItem('gallery');
                    alert('All data has been cleared. Please refresh the page.');
                  }
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Clear Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
