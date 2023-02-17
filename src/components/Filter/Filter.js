import PropTypes from 'prop-types';
import { FilterDiv, FilterLabel, FilterInput } from './Filter.styled';
const Filter = ({ filter, onChange }) => {
  return (
    <FilterDiv>
      <FilterLabel>Fined contacts by name</FilterLabel>
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FilterDiv>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
