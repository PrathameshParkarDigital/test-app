export function Form({ onSubmit, formData, onChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Name
          <span className="text-red-400 ml-1">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => onChange({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Email
          <span className="text-red-400 ml-1">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => onChange({ ...formData, phone: e.target.value })}
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Message
        </label>
        <input
          type="text"
          value={formData.message}
          onChange={(e) => onChange({ ...formData, message: e.target.value })}
          placeholder="Enter your message"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

