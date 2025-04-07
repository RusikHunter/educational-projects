import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Схема валидации
const schema = yup.object().shape({
    name: yup.string().required('Имя обязательно').min(3, 'Имя должно быть не менее 3 символов'),
    email: yup.string().required('Email обязателен').email('Некорректный email'),
    password: yup.string().required('Пароль обязателен').min(6, 'Пароль должен быть не менее 6 символов'),
})

function MyForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Имя:</label>
            <input {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}

            <label>Email:</label>
            <input {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}

            <label>Пароль:</label>
            <input type="password" {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Отправить</button>
        </form>
    )
}

export default MyForm