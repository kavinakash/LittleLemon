import React from 'react'
import Logo from '../Assets/Logo.svg'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
            <img src={Logo} alt='logo of littlelemon' />
            <p>We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern twist.</p>
        </div>

        <div>
            <h3>Important links</h3>
            <ul>
            <li>
                <a href="/">HOME</a>
            </li>
            <li>
                <a href="/">ABOUT</a>
            </li>
            <li>
                <a href="/">SERVICES</a>
            </li>
            <li>
                <a href="/">MENU</a>
            </li>
            <li>
                <a href="/">RESERVATION</a>
            </li>
            <li>
                <a href="/">ORDER ONLINE</a>
            </li>
            <li>
                <a href="/">LOGIN</a>
            </li>
            </ul>
        </div>

        <div>
            <h3>Contact</h3>
            <ul>
                <li>
                    Customer@gmail.com
                </li>
                <li>
                    +09 1298321231
                </li>
                <li>
                    Chicago, USA
                </li>
            </ul>
        </div>

        <div>
            <h3>SocialMedia links</h3>
            <ul>
            <li>
                <a href='https://www.instagram.com/'>Instagram</a>
            </li>
            <li>
                <a href='https://www.facebook.com/'>Facebook</a>
            </li>
            <li>
                <a href='https://www.youtube.com/'>Youtube</a>
            </li>
            </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer
