import PropTypes from 'prop-types';
import { StatisticsBox, StatisticsBoard, Title, StatList, Item, Percentage } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
      return(
    <StatisticsBox>   
    <StatisticsBoard>    
  {title && (<Title>{title}</Title>)}
  <StatList>
  {stats.map(({id, label, percentage}) => (
    <Item key={id}>
      <span>{label}</span>
      <Percentage>{percentage}%</Percentage>
    </Item>
    ))}
  </StatList>
</StatisticsBoard>
</StatisticsBox> 
);
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired })),
}