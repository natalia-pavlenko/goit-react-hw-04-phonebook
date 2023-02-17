import styled from 'styled-components';
export const FilterDiv = styled.div`
  display: inline-flex;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
`;
export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FilterInput = styled.input`
  padding: 4px;
  font: inherit;
  :focus {
    box-shadow: 2px -2px 5px #2196f3;
    border-color: #fff;
    border-width: 0;
  }
`;
