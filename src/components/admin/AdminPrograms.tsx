import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { Plus, Edit, Trash2, X } from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export default function AdminPrograms() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    impact: '',
    iconName: '',
  });

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/programs`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        setPrograms(data.programs || []);
      } else {
        console.error('Failed to fetch programs:', await response.text());
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  const saveProgramsToServer = async (updatedPrograms: any[]) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/programs`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ programs: updatedPrograms }),
        }
      );
      
      if (!response.ok) {
        console.error('Failed to save programs:', await response.text());
      }
    } catch (error) {
      console.error('Error saving programs:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let updatedPrograms;
    if (editingProgram) {
      updatedPrograms = programs.map(p => 
        p.id === editingProgram.id ? { ...formData, id: p.id } : p
      );
    } else {
      const newProgram = {
        ...formData,
        id: Date.now(),
      };
      updatedPrograms = [...programs, newProgram];
    }

    setPrograms(updatedPrograms);
    await saveProgramsToServer(updatedPrograms);
    closeModal();
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      const updatedPrograms = programs.filter(p => p.id !== id);
      setPrograms(updatedPrograms);
      await saveProgramsToServer(updatedPrograms);
    }
  };

  const openModal = (program?: any) => {
    if (program) {
      setEditingProgram(program);
      setFormData({
        title: program.title,
        category: program.category,
        description: program.description,
        image: program.image,
        impact: program.impact,
        iconName: program.iconName,
      });
    } else {
      setEditingProgram(null);
      setFormData({
        title: '',
        category: '',
        description: '',
        image: '',
        impact: '',
        iconName: '',
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProgram(null);
    setFormData({
      title: '',
      category: '',
      description: '',
      image: '',
      impact: '',
      iconName: '',
    });
  };

  const resetToDefault = async () => {
    if (window.confirm('Are you sure you want to reset all programs to default? This will delete all custom programs.')) {
      const defaultPrograms = [
        {
          id: 1,
          title: 'Healthcare Support',
          category: 'Health', 
          description: 'Providing free medical missions and essential medical supplies for vulnerable populations including the homeless in Africa, ensuring access to critical healthcare services.',
          image: 'https://images.unsplash.com/photo-1627555704146-5c4ffa8149f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbWlzc2lvbiUyMGFmcmljYSUyMGNsaW5pY3xlbnwxfHx8fDE3Njc0ODE1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          impact: '3,500+ patients treated annually',
          iconName: 'Heart',
        },
        {
          id: 2,
          title: 'Shelter Assistance',
          category: 'Housing',
          description: 'Supporting individuals with housing needs through cash incentives and comprehensive resources to help them find stable, safe living accommodations and rebuild their lives.',
          image: 'https://images.unsplash.com/photo-1758755791011-0720d654b8d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwYXNzaXN0YW5jZSUyMHN1cHBvcnR0ZW58MXx8fHwxNzY3NDgxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          impact: '800+ families housed',
          iconName: 'Home',
        },
        {
          id: 3,
          title: 'Scholarships & Tuition Support',
          category: 'Education',
          description: 'Providing financial support to qualified individuals who need assistance with tuition and education expenses, enabling them to pursue their academic dreams and build better futures.',
          image: 'https://images.unsplash.com/photo-1604336480714-ed7fa506014e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzY2hvbGFyc2hpcCUyMHN0dWRlbnR8ZW58MXx8fHwxNzY3NDgxNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          impact: '1,200+ students supported',
          iconName: 'GraduationCap',
        },
        {
          id: 4,
          title: 'Christian Evangelism',
          category: 'Faith',
          description: 'Sponsoring Christian evangelism initiatives and providing spiritual guidance to encourage people to know our Creator and understand His purpose and love for His children.',
          image: 'https://images.unsplash.com/photo-1714381636560-47bca37b5054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwJTIwY2h1cmNofGVufDF8fHx8MTc2NzQ4MTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          impact: '50+ evangelism events supported',
          iconName: 'Cross',
        },
        {
          id: 5,
          title: 'Church & Ministry Support',
          category: 'Faith',
          description: 'Providing financial support to churches and religious organizations to enhance biblical teachings, strengthen ministry outreach, and win souls for God\'s kingdom.',
          image: 'https://images.unsplash.com/photo-1760319726429-fcda77d3cb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjBjb21tdW5pdHl8ZW58MXx8fHwxNjc0ODE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          impact: '25+ churches and ministries supported',
          iconName: 'Church',
        },
        {
          id: 6,
          title: 'Pastoral Ministry Support',
          category: 'Faith',
          description: 'Providing financial incentives to clergy members and pastoral leaders to strengthen their ministries, support gospel advancement, and enable effective spiritual leadership in their communities.',
          image: 'https://images.unsplash.com/photo-1623081553676-8b658405761a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjBwcmVhY2hpbmclMjBtaW5pc3RyeXxlbnwxfHx8fDE3Njc2NTUzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          impact: '40+ pastoral leaders supported',
          iconName: 'Users',
        },
      ];
      setPrograms(defaultPrograms);
      await saveProgramsToServer(defaultPrograms);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-gray-900">Programs Management</h1>
            <p className="text-gray-600 mt-2">Manage your foundation's programs</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={resetToDefault}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Reset to Default
            </button>
            <button
              onClick={() => openModal()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Plus size={20} />
              Add Program
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{program.category}</div>
                <h3 className="text-xl mb-2 text-gray-900">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Impact:</strong> {program.impact}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(program)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Edit size={16} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(program.id)}
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
                {editingProgram ? 'Edit Program' : 'Add New Program'}
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
              <div>
                <label className="block mb-2 text-gray-700">Category *</label>
                <input
                  type="text"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Description *</label>
                <textarea
                  required
                  rows={4}
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
              <div>
                <label className="block mb-2 text-gray-700">Impact *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., 15,000 students supported"
                  value={formData.impact}
                  onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Icon Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Heart, Home, GraduationCap, Cross, Church, Users"
                  value={formData.iconName}
                  onChange={(e) => setFormData({ ...formData, iconName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <p className="text-sm text-gray-500 mt-1">Available icons: Heart, Home, GraduationCap, Cross, Church, Users</p>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                >
                  {editingProgram ? 'Update Program' : 'Add Program'}
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