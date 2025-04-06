import React, { useState } from 'react';
import profilePic from '../assets/images/profile.png'; // default user profile
import { FaRegHeart, FaRegCommentDots } from 'react-icons/fa';

function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    bio: 'MERN Stack Dev | I love coding & coffee ☕',
    profilePic: profilePic,
    location: 'New York, USA',
    profession: 'Software Engineer',
    phone: '+1 234 567 8901',
  });

  const [posts, setPosts] = useState([
    { id: 1, content: 'Excited to share my new project! 🚀', date: '2025-04-01', likes: 12 },
    { id: 2, content: 'Just had the best coffee ever! ☕❤️', date: '2025-03-29', likes: 7 }
  ]);

  const [reminders, setReminders] = useState([]);
  const [reminderInput, setReminderInput] = useState({ title: '', date: '' });

  const [newPost, setNewPost] = useState('');

  const handleNewPost = () => {
    if (newPost.trim()) {
      setPosts([{ id: Date.now(), content: newPost, date: new Date().toISOString().split('T')[0], likes: 0 }, ...posts]);
      setNewPost('');
    }
  };

  const handleReminderSubmit = (e) => {
    e.preventDefault();
    if (reminderInput.title && reminderInput.date) {
      setReminders([...reminders, { ...reminderInput, id: Date.now() }]);
      setReminderInput({ title: '', date: '' });
    }
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] py-10 px-4 md:px-16">
      {/* Profile Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-center mb-10">
        <img src={user.profilePic} alt="profile" className="w-32 h-32 rounded-full object-cover shadow" />
        <div>
          <h2 className="text-2xl font-bold text-[#ff3131]">{user.name}</h2>
          <p className="text-gray-600">{user.bio}</p>
          <p className="text-sm text-gray-500 mt-1">📍 {user.location} | 💼 {user.profession}</p>
          <p className="text-sm text-gray-500">📞 {user.phone}</p>
        </div>
      </div>

      {/* Add New Post */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <textarea
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-[#ff3131] resize-none"
          rows="3"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button
          onClick={handleNewPost}
          className="mt-3 bg-[#ff3131] text-white px-6 py-2 rounded-full hover:bg-[#bb1e1e] font-semibold"
        >
          Post
        </button>
      </div>

      {/* Posts Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-[#ff3131] mb-4">Your Posts</h3>
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-4 rounded-xl shadow relative">
              <p className="text-gray-800">{post.content}</p>
              <div className="flex justify-between mt-2 items-center text-gray-500 text-sm">
                <span>{post.date}</span>
                <div className="flex gap-4 items-center">
                  <button onClick={() => handleLike(post.id)} className="flex items-center gap-1 hover:text-[#ff3131]">
                    <FaRegHeart /> {post.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#ff3131]">
                    <FaRegCommentDots /> Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reminders Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-[#ff3131] mb-4">Set a Reminder</h3>
        <form onSubmit={handleReminderSubmit} className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            name="title"
            value={reminderInput.title}
            onChange={(e) => setReminderInput({ ...reminderInput, title: e.target.value })}
            placeholder="Reminder Title"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-[#ff3131]"
          />
          <input
            type="date"
            name="date"
            value={reminderInput.date}
            onChange={(e) => setReminderInput({ ...reminderInput, date: e.target.value })}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-[#ff3131]"
          />
          <button
            type="submit"
            className="bg-[#ff3131] text-white px-6 py-2 rounded-full hover:bg-[#bb1e1e] font-semibold"
          >
            Add
          </button>
        </form>

        {/* Display Reminders */}
        <ul className="space-y-2">
          {reminders.map(rem => (
            <li key={rem.id} className="text-gray-800 flex justify-between bg-[#fef6e4] p-3 rounded-lg">
              <span>{rem.title}</span>
              <span className="text-sm text-gray-600">{rem.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
