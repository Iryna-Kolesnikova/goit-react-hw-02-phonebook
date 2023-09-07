import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  StyledForm,
  ContactButton,
  ContactLabel,
  ContactField,
} from './ContactForm.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .matches(/^[0-9]+$/, 'Must be a valid number')
    .required('Required'),
});

export const ContactForm = ({ onAddContact }) => {
  const onSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (!name || !number) return;
    onAddContact(name, number);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <ContactLabel>
            {' '}
            Name
            <ContactField name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" />
          </ContactLabel>
          <ContactLabel>
            Number{' '}
            <ContactField
              name="number"
              type="tel"
              placeholder="000-00-00"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage name="number" />
          </ContactLabel>

          <ContactButton type="submit">Add contact</ContactButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
