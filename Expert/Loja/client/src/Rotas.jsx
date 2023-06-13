import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Vitrine from "./pages/Vitrine"
import { createBrowserRouter } from "react-router-dom"
import Produto from "./pages/Produto"
import Promocao from "./pages/Promocao"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Vitrine/>
    },
    {
        path: '/produto/:codigo',
        element: <Produto/>
    },
    {
        path: '/promocao',
        element: <Promocao/>
    }
])
