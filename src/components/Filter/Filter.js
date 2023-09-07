import { StyledFilter, Filterlabel, FilterInput } from './Filter.styled';
export const Filter = ({ filter, onChange }) => {
  return (
    <StyledFilter>
      <Filterlabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={e => onChange(e.target.value)}
        ></FilterInput>
      </Filterlabel>
    </StyledFilter>
  );
};
