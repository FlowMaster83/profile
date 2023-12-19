import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const StatElements = ({ data }) => {
    return data.map(({ label, percentage, id }) => {
      return (
        <li key={id}>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
      );
    });
  };

  return (
    <section>
      {title && <h2>{title}</h2>}
      <li>
        <StatElements data={stats} />
      </li>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
