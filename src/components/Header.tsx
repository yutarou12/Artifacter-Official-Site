import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <h1>ArtifacterBot</h1>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>ホーム</Link></li>
            <li><Link to="/commands" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>コマンド</Link></li>
            <li><Link to="/news" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>ニュース</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>お問い合わせ</Link></li>
          </ul>
        </nav>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー切り替え"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header