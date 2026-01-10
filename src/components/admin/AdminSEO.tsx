import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { Save, Search } from 'lucide-react';

export default function AdminSEO() {
  const [formData, setFormData] = useState({
    siteTitle: 'Prince Goodwill Foundation',
    siteDescription: 'Empowering communities and transforming lives through healthcare, education, housing support, and Christian ministry programs.',
    keywords: 'Prince Uche, Prince Goodwill Foundation, charity, nonprofit, community development, education, healthcare, Christian ministry, evangelism, sustainable development, social impact',
    founderName: 'Prince Uche',
    founderBio: 'Founder and CEO of the Prince Goodwill Foundation, dedicated to creating lasting social impact through community-driven development programs, healthcare missions, and faith-based initiatives.',
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedSEO = localStorage.getItem('seoSettings');
    if (storedSEO) {
      setFormData(JSON.parse(storedSEO));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('seoSettings', JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900">SEO Settings</h1>
          <p className="text-gray-600 mt-2">Optimize your website for search engines</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Search className="text-blue-600 mt-1" size={24} />
            <div>
              <h3 className="mb-2 text-gray-900">SEO Optimization Tips</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Include "Prince Uche" in titles and descriptions to improve founder search visibility</li>
                <li>• Use relevant keywords that describe your programs and mission</li>
                <li>• Keep meta descriptions between 150-160 characters</li>
                <li>• Update content regularly to maintain search engine rankings</li>
              </ul>
            </div>
          </div>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            SEO settings saved successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div>
            <label className="block mb-2 text-gray-700">Site Title *</label>
            <input
              type="text"
              name="siteTitle"
              required
              value={formData.siteTitle}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p className="text-sm text-gray-600 mt-1">
              Appears in search results and browser tabs
            </p>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Site Description *</label>
            <textarea
              name="siteDescription"
              required
              rows={3}
              value={formData.siteDescription}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <p className="text-sm text-gray-600 mt-1">
              {formData.siteDescription.length} characters (optimal: 150-160)
            </p>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Keywords *</label>
            <textarea
              name="keywords"
              required
              rows={3}
              value={formData.keywords}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <p className="text-sm text-gray-600 mt-1">
              Comma-separated keywords for search engines
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl mb-4 text-gray-900">Founder Information (SEO)</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Founder Name *</label>
                <input
                  type="text"
                  name="founderName"
                  required
                  value={formData.founderName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Founder Bio (for Schema Markup) *</label>
                <textarea
                  name="founderBio"
                  required
                  rows={3}
                  value={formData.founderBio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <p className="text-sm text-gray-600 mt-1">
                  This helps associate "Prince Uche" with the foundation in search results
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Save SEO Settings
          </button>
        </form>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl mb-4 text-gray-900">SEO Checklist</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" defaultChecked />
              <span className="text-gray-700">Site title includes founder name</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" defaultChecked />
              <span className="text-gray-700">Meta description is optimized</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" defaultChecked />
              <span className="text-gray-700">Keywords include relevant terms</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" defaultChecked />
              <span className="text-gray-700">Founder bio is complete</span>
            </label>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}