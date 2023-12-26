import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Assets/restauranfood.jpg'
const Header = () => {
  return (
    <header className='header'>
      <section>
        <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>

            <Link to='/Booking'><button aria-label='On Click'>Reserve Tabel</button></Link>

            <div className='banner-img'>
              <img src={BannerImage} alt=''/>
            </div>

        </div>
      </section>
    </header>
  )
}

export default Header
