import React from "react"
import { Routes, Route } from "react-router-dom"
import MainPage from "../pages/MainPage"
import AboutPage from "../pages/AboutPage"
import ErrorPage from "../pages/ErrorPage"
import UserDetailsPage from "../pages/UserDetailsPage"
import Users from "../users/Users"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
    )
}