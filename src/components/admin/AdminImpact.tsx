import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { Plus, Edit, Trash2, X } from 'lucide-react';

export default function AdminImpact() {
  const [stories, setStories] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    date: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = () => {
    const stored = localStorage.getItem('impactStories');
    if (stored) {
      setStories(JSON.parse(stored));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let updatedStories;
    if (editingStory) {
      updatedStories = stories.map(s => 
        s.id === editingStory.id ? { ...formData, id: s.id } : s
      );
    } else {
      const newStory = {
        ...formData,
        id: Date.now(),
      };
      updatedStories = [...stories, newStory];
    }

    localStorage.setItem('impactStories', JSON.stringify(updatedStories));
    setStories(updatedStories);
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this impact story?')) {
      const updatedStories = stories.filter(s => s.id !== id);
      localStorage.setItem('impactStories', JSON.stringify(updatedStories));
      setStories(updatedStories);
    }
  };

  const openModal = (story?: any) => {
    if (story) {
      setEditingStory(story);
      setFormData({
        title: story.title,
        location: story.location,
        date: story.date,
        description: story.description,
        image: story.image,
      });
    } else {
      setEditingStory(null);
      setFormData({
        title: '',
        location: '',
        date: '',
        description: '',
        image: '',
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingStory(null);
    setFormData({
      title: '',
      location: '',
      date: '',
      description: '',
      image: '',
    });
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-gray-900">Impact Stories Management</h1>
            <p className="text-gray-600 mt-2">Manage your impact stories and testimonials</p>
          </div>
          <button
            onClick={() => openModal()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Plus size={20} />
            Add Story
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">
                  {story.location} • {story.date}
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(story)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Edit size={16} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(story.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl text-gray-900">
                {editingStory ? 'Edit Impact Story' : 'Add New Impact Story'}
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700">Location *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Year *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 2024"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Description *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Image URL *</label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                >
                  {editingStory ? 'Update Story' : 'Add Story'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
