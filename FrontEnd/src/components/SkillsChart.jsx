import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function SkillsChart({ skills }) {
  const data = {
    labels: Object.keys(skills),
    datasets: [
      {
        label: 'Skills',
        data: Object.values(skills),
        backgroundColor: 'rgba(34, 202, 236, .2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          beginAtZero: false,
        },
      },
    },
  };

  return (
    <div className="w-72 h-72 mx-auto">
      <Radar data={data} options={options} />
    </div>
  );
}

SkillsChart.propTypes = {
  skills: PropTypes.objectOf(PropTypes.number).isRequired
};

export default SkillsChart;
