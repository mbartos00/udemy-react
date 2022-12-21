import './ChartBar.css';

const ChartBar = ({ value, label, maxValue }) => {
  let barHeight;

  if (maxValue > 0) {
    barHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          style={{ height: barHeight }}
          className='chart-bar__fill'
        ></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};

export default ChartBar;
