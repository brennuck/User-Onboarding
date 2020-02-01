import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const TheForm = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log('status has changed', status);
        status && setUsers(users => [
            ...users, status
        ])
    }, [status])
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
            {users.map(user => {
                return (
                    <ul key = {user.id}>
                        <li>Name: {user.name}</li>
                        <li>Email: {user.email}</li>
                    </ul>
                )
            })}
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
    handleSubmit(values, {setStatus}) {
        axios.post("https://reqres.in/api/users", values)
        .then(res => {
            console.log(res)
            setStatus(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }
})(TheForm);

export default FormikTheForm;