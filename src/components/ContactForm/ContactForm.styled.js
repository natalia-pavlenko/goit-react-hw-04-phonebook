import styled from 'styled-components';
export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  gap: 8px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;
export const FormDiv = styled.div``;
export const FormLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FormText = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding: 5px;
  margin: 0;
`;
export const FormInput = styled.input`
border-radius: 4px;

  :focus {
    box-shadow: 2px -2px 5px 2px #2196f3;
  }
`;

export const FormBtn = styled.button`
  margin-top: 20px;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 4px 1px 4px -1px rgb(0 0 0 / 40%);
  border-width: 0;
  background-color: #fff;
`;
