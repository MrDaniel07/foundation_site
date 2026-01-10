import React from 'react';
import AdminLayout from './AdminLayout';
import { Users, BookOpen, Heart, Newspaper, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { icon: Users, label: 'Total Impact', value: '50,000+', color: 'bg-blue-500' },
    { icon: BookOpen, label: 'Active Programs', value: '25', color: 'bg-green-500' },
    { icon: Heart, label: 'Impact Stories', value: '150', color: 'bg-purple-500' },
    { icon: Newspaper, label: 'News Articles', value: '89', color: 'bg-orange-500' },
  ];

  const recentActivity = [
    { action: 'New program added', details: 'Education Initiative - Kenya', time: '2 hours ago' },
    { action: 'Impact story published', details: 'Healthcare Success in Bangladesh', time: '5 hours ago' },
    { action: 'News article updated', details: '50,000 Lives Milestone', time: '1 day ago' },
    { action: 'Gallery images uploaded', details: '12 new images added', time: '2 days ago' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to the Prince Goodwill Foundation Admin Panel</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <TrendingUp className="text-green-500" size={20} />
                </div>
                <div className="text-3xl mb-1 text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl mb-4 text-gray-900">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-gray-900">{activity.action}</div>
                  <div className="text-sm text-gray-600">{activity.details}</div>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl mb-4 text-gray-900">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Add New Program
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
              Publish Impact Story
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
              Create News Article
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}