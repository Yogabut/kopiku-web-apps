import { useState } from 'react'
import './App.css'
import MainLayout from './main_page/MainLayout'
import MenuLayout from './menu_page/MenuLayout'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Coffee from './menu_page/CoffeeMenu/Coffee'
import NonCoffee from './menu_page/NonCoffeeMenu/NonCoffee'
import Food from './menu_page/FoodMenu/Food'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/menu" element={<MenuLayout />} />
          <Route path="/Coffee" element={<Coffee />} />
          <Route path="/NonCoffee" element={<NonCoffee />} />
          <Route path="/Food" element={<Food />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
