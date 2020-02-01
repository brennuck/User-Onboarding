import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const TheForm = ({values, errors, touched, status}) => {
    return (
        <div>
            <Form>
                <label htmlFor="name">
                    Name:
                </label>
                <Field
                    type = "text"
                    name = "name"
                    id = "name"
                />
                {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                <label htmlFor="email">
                    Email
                </label>
                <Field
                    type = "text"
                    name = "email"
                    id = "email"
                />
                {touched.email && errors.email && <p className="errors">{errors.email}</p>}
                <label htmlFor="password">
                    Password
                </label>
                <Field
                    type = "text"
                    name = "password"
                    id = "password"
                />
                <label className = "checkmark">
                    Terms of Service
                </label>
                <Field
                    type = "checkbox"
                    name = "TermsOfService"
                    checked = {values.termsOfService}
                />
                <span className = "checkmark" />
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
};

const FormikTheForm = withFormik({
    mapPropsToValues({name, email, termsOfService}){
        return {
            name: name || "",
            email: email || "",
            password: "",
            termsOfService: termsOfService || false
        }
    },
    validationSchema : Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required()
    }),
})(TheForm);

export default FormikTheForm;