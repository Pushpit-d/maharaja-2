import './App.css'

function App() {
  return (
    <div className="page">
      <div className="overlay" />

      <div className="content">
        <div className="glass-card">

          <div className="logo-wrap">
            <img src="/logo.png" alt="Maharaja Logo" className="logo" />
          </div>

          <h1 className="title">MAHARAJA</h1>
          <p className="subtitle">Indian Cuisine</p>

          <div className="buttons">
            <a href="https://www.omaharaja.com/our-menu" className="primary-button">
              View Menu
            </a>
            <a href="https://g.page/r/CUmSG-ukusoKEBE/review" className="primary-button">
              Give a Review
            </a>
          </div>

          <p className="follow-text">Follow us on social media</p>

          <div className="social-row">
            <a href="https://www.instagram.com/maharaja_indiancuisine/" className="social-button" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/p/Maharaja-Indian-Cuisine-Omaha-100044680852133/" className="social-button" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://vm.tiktok.com/ZT9YX44YpjPrw-Ojo9G/" className="social-button" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
