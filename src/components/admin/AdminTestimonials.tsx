import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { Plus, Edit, Trash2, X } from 'lucide-react';

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    image: '',
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
      setTestimonials(JSON.parse(stored));
    } else {
      const defaultTestimonials = [
        {
          id: 1,
          name: 'Maria Santos',
          role: 'Community Leader, Ethiopia',
          content: 'The Prince Goodwill Foundation changed our community forever. Now our children can go to school instead of walking miles for water every day.',
          image: 'https://images.unsplash.com/photo-1552127966-d24b805b9be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
        },
        {
          id: 2,
          name: 'Rajesh Kumar',
          role: 'Program Graduate, India',
          content: 'Thanks to the vocational training program, I now have a stable job and can support my family. This foundation gave me hope and opportunity.',
          image: 'https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
        },
      ];
      setTestimonials(defaultTestimonials);
      localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let updatedTestimonials;
    if (editingTestimonial) {
      updatedTestimonials = testimonials.map(t => 
        t.id === editingTestimonial.id ? { ...formData, id: t.id } : t
      );
    } else {
      const newTestimonial = {
        ...formData,
        id: Date.now(),
      };
      updatedTestimonials = [...testimonials, newTestimonial];
    }

    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    setTestimonials(updatedTestimonials);
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const updatedTestimonials = testimonials.filter(t => t.id !== id);
      localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
      setTestimonials(updatedTestimonials);
    }
  };

  const openModal = (testimonial?: any) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData({
        name: testimonial.name,
        role: testimonial.role,
        content: testimonial.content,
        image: testimonial.image,
      });
    } else {
      setEditingTestimonial(null);
      setFormData({
        name: '',
        role: '',
        content: '',
        image: '',
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTestimonial(null);
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-gray-900">Testimonials Management</h1>
            <p className="text-gray-600 mt-2">Manage testimonials from beneficiaries and partners</p>
          </div>
          <button
            onClick={() => openModal()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Plus size={20} />
            Add Testimonial
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(testimonial)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Edit size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
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
                {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Role/Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Community Leader, Ethiopia"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Testimonial Content *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
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
                  {editingTestimonial ? 'Update Testimonial' : 'Add Testimonial'}
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