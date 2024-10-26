import { useState } from 'react';
import axios from 'axios';

function UserCreate() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [password, setPassword] = useState('');
  const [skills, setSkills] = useState({ Python: 0, SQL: 0, Java: 0, Spark: 0 });
  const [avatarUrl, setAvatarUrl] = useState('https://i.pravatar.cc/150');
  const [message, setMessage] = useState('');

  const handleSkillChange = (skill, value) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [skill]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/employees', {
        name,
        position,
        password,
        skills,
        avatar_url: avatarUrl,
      });
      if (response.status === 201) {
        setMessage('Usuario creado exitosamente');
      }
    } catch {
      setMessage('Hubo un error al crear el usuario');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Crear Usuario</h2>

        {message && <p className="text-center mb-4 text-green-500">{message}</p>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">Posición</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar URL</label>
          <input
            type="url"
            id="avatar"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
            placeholder="https://i.pravatar.cc/150"
          />
        </div>

        <h3 className="text-lg font-medium mt-4">Habilidades</h3>
        {Object.keys(skills).map((skill) => (
          <div key={skill} className="mb-2">
            <label className="block text-sm font-medium text-gray-700">{skill}</label>
            <input
              type="number"
              value={skills[skill]}
              onChange={(e) => handleSkillChange(skill, Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              min="0"
              max="100"
              required
            />
          </div>
        ))}

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
          Crear Usuario
        </button>
      </form>
    </div>
  );
}

export default UserCreate;
