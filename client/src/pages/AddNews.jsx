import React, { useState } from 'react';
import axios from 'axios';

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    date: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log("got the req");
    try {
      let data = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/news`, formData); // Adjust API URL if needed
      setIsSubmitted(true);
      console.log("saved success");
      setFormData({ title: '', summary: '', image: '', date: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to submit news. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-700 py-12 px-4 sm:px-6 lg:px-8 pt-40 max-sm:pt-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Add News
          </h1>
          <p className="mt-4 text-lg text-gray-50">
            Fill out this form to add a new news article.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-sm text-gray-500 mb-6">* required fields</p>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 rounded-md border border-green-200 text-green-800">
                ✅ News has been added successfully.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 rounded-md border border-red-200 text-red-800">
                ❌ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  placeholder="Enter news title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Summary *
                </label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  placeholder="Write a brief summary..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image URL *
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="mt-1 ps-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  placeholder="Enter image link"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="mt-1 ps-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                >
                  Submit News
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
