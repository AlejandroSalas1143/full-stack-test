import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SkillsChart from './SkillsChart';

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    avatarUrl: '',
    skills: {}
  });

  useEffect(() => {
    const userData = location.state?.user || JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setEmployee({
        name: userData.name,
        position: userData.position,
        avatarUrl: userData.avatar_url,
        skills: userData.skills
      });
    }
  }, [location.state]);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Elimina los datos del usuario
    navigate('/'); // Redirige a la página de login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-xl w-full">
        <div className="bg-gray-500 h-32 rounded-lg flex items-center  gap-4 mt-1 px-4">
          <img src={employee.avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white bg-black " />
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-white">{employee.name}</h1>
            <p className="text-white">{employee.position}</p>
          </div>
        </div>

        <div className="mt-6">
          {employee.skills && <SkillsChart skills={employee.skills} />}
        </div>
        <div className="mt-6 text-end">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
