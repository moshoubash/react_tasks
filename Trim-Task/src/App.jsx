import './App.css'

function App() {
  const cleanNames = [" injustice", " SuperMan", "Batman ", " flash "];

  // Use .map() to trim each name
  const cleanedNames = cleanNames.map(name => name.trim());

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Cleaned Names:</h2>
      <ul className="list-disc pl-5">
        {cleanedNames.map((name, index) => (
          <li key={index} className="text-gray-700">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
