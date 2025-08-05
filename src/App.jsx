import { useState } from 'react'
import './App.css'
import MainLayout from './main_page/MainLayout'
import MenuLayout from './menu_page/MenuLayout'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Coffee from './menu_page/CoffeeMenu/Coffee'
import NonCoffee from './menu_page/NonCoffeeMenu/NonCoffee'
import Food from './menu_page/FoodMenu/Food'
import Merchandise from './merchandise_page/merchandise'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/Coffee" element={<Coffee />} />
          <Route path="/NonCoffee" element={<NonCoffee />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Merchandise" element={<Merchandise />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
