import styled from 'styled-components';
import { Field, Form } from 'formik';
export const StyledForm = styled(Form)`
  display: grid;
  padding: 20px;
  gap: 18px;
  background-color: pink;
  width: 350px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
`;
export const ContactButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  padding: 8px;
  background-color: white;
  border: 1 px solid black;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
  width: 200px;
`;
export const ContactLabel = styled.label`
  gap: 12px;
  display: grid;
`;
export const ContactField = styled(Field)`
  padding: 8px;
`;
