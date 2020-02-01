import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const TheForm = ({values}) => {
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
                <label htmlFor="email">
                    Email
                </label>
                <Field
                    type = "text"
                    name = "email"
                    id = "email"
                />
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
    )
}

export default TheForm;