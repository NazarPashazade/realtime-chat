import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    password: yup.string().min(7).max(20).required()
});


