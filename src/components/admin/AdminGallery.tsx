import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { Plus, Edit, Trash2, X } from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export default function AdminGallery() {
  const [gallery, setGallery] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    // Fetch gallery from server
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/gallery`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          setGallery(data.gallery || []);
        } else {
          console.error('Failed to fetch gallery:', await response.text());
          setGallery([]);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
        setGallery([]);
      }
    };

    fetchGallery();
  }, []);

  const saveGalleryToServer = async (updatedGallery: any[]) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/gallery`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ gallery: updatedGallery }),
        }
      );
      
      if (!response.ok) {
        console.error('Failed to save gallery:', await response.text());
      }
    } catch (error) {
      console.error('Error saving gallery:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingImage) {
      // Update existing image
      const updatedGallery = gallery.map(img =>
        img.id === editingImage.id ? { ...formData, id: img.id } : img
      );
      setGallery(updatedGallery);
      await saveGalleryToServer(updatedGallery);
    } else {
      // Add new image
      const newImage = {
        ...formData,
        id: Date.now(),
      };
      const updatedGallery = [...gallery, newImage];
      setGallery(updatedGallery);
      await saveGalleryToServer(updatedGallery);
    }
    
    handleCloseModal();
  };

  const handleEdit = (image: any) => {
    setEditingImage(image);
    setFormData({
      title: image.title,
      description: image.description,
      image: image.image,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedGallery = gallery.filter(img => img.id !== id);
      setGallery(updatedGallery);
      await saveGalleryToServer(updatedGallery);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingImage(null);
    setFormData({
      title: '',
      description: '',
      image: '',
    });
  };

  const resetToDefault = async () => {
    if (window.confirm('Are you sure you want to reset all gallery images to default? This will delete all custom images.')) {
      const defaultGallery: any[] = [];
      setGallery(defaultGallery);
      await saveGalleryToServer(defaultGallery);
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-gray-900">Gallery Management</h1>
            <p className="text-gray-600 mt-2">Manage images displayed on the Founder page gallery</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={resetToDefault}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Reset to Default
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Add Image
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl mb-2 text-gray-900">{image.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{image.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(image)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <Edit size={16} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl text-gray-900">
                    {editingImage ? 'Edit Image' : 'Add New Image'}
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
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

                  <div>
                    <label className="block mb-2 text-gray-700">Description *</label>
                    <textarea
                      required
                      rows={3}
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
                      placeholder="https://example.com/image.jpg"
                    />
                    {formData.image && (
                      <div className="mt-2">
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      {editingImage ? 'Update Image' : 'Add Image'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}