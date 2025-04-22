import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center transition duration-300 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-2xl shadow-xl w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Counter</h1>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2 text-sm">{darkMode ? 'Dark' : 'Light'}</span>
            <input
              type="checkbox"
              className="hidden"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${darkMode ? 'bg-blue-600' : ''}`}>
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </div>
          </label>
        </div>

        <div className="text-center">
          <p className="text-4xl font-semibold mb-6">{count}</p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
