// import React, { useState, useEffect } from 'react';

// const Navbar = ({ currentSection, handleNavigation }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrolled]);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'education', label: 'Education' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   return (
//     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//       <div className="navbar-container">
//         <div className="navbar-logo" onClick={() => handleNavigation('home')}>
//           <span className="logo-text">DevPortfolio</span>
//         </div>
        
//         <div className="menu-icon" onClick={toggleMenu}>
//           <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
        
//         <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
//           {navItems.map((item) => (
//             <li key={item.id} className="nav-item">
//               <a
//                 href={`#${item.id}`}
//                 className={currentSection === item.id ? 'active' : ''}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavigation(item.id);
//                   setMenuOpen(false);
//                 }}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';

const Navbar = ({ currentSection, handleNavigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const customStyles = `
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 1.5rem 2rem;
      z-index: 1000;
      transition: all 0.3s ease;
      background: transparent;
    }
    
    .navbar.scrolled {
      background: rgba(17, 24, 39, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 1rem 2rem;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(96, 165, 250, 0.1);
    }
    
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .navbar-logo {
      font-size: 1.8rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .logo-text {
      background: linear-gradient(135deg, #60a5fa 0%, #8c9eff 50%, #c084fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 200% 200%;
      animation: gradientShift 4s ease infinite;
    }
    
    .navbar-logo:hover .logo-text {
      animation-duration: 1s;
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }
    
    .nav-item {
      position: relative;
    }
    
    .nav-item a {
      text-decoration: none;
      color: #ffffff;
      font-weight: 500;
      position: relative;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease;
      border-radius: 0.5rem;
      display: block;
    }
    
    .nav-item a::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #60a5fa, #8c9eff);
      transition: all 0.3s ease;
      transform: translateX(-50%);
      border-radius: 2px;
    }
    
    .nav-item a:hover::before,
    .nav-item a.active::before {
      width: 80%;
    }
    
    .nav-item a:hover {
      color: #60a5fa;
      background: rgba(96, 165, 250, 0.1);
      transform: translateY(-2px);
    }
    
    .nav-item a.active {
      color: #60a5fa;
      background: rgba(96, 165, 250, 0.15);
    }
    
    .menu-icon {
      display: none;
      cursor: pointer;
      z-index: 1001;
    }
    
    .hamburger {
      width: 30px;
      height: 24px;
      position: relative;
    }
    
    .hamburger span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: #ffffff;
      border-radius: 3px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }
    
    .hamburger span:nth-child(1) {
      top: 0px;
    }
    
    .hamburger span:nth-child(2) {
      top: 10px;
    }
    
    .hamburger span:nth-child(3) {
      top: 20px;
    }
    
    .hamburger.open span:nth-child(1) {
      top: 10px;
      transform: rotate(135deg);
      background: #60a5fa;
    }
    
    .hamburger.open span:nth-child(2) {
      opacity: 0;
      left: -60px;
    }
    
    .hamburger.open span:nth-child(3) {
      top: 10px;
      transform: rotate(-135deg);
      background: #60a5fa;
    }
    
    /* Mobile Styles */
    @media screen and (max-width: 768px) {
      .menu-icon {
        display: block;
      }
      
      .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background: rgba(17, 24, 39, 0.98);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        transition: all 0.5s ease;
        border-left: 1px solid rgba(96, 165, 250, 0.2);
        gap: 1.5rem;
      }
      
      .nav-menu.active {
        right: 0;
      }
      
      .nav-item {
        margin: 0;
        width: 100%;
      }
      
      .nav-item a {
        text-align: center;
        font-size: 1.2rem;
        padding: 1rem 2rem;
        width: 100%;
        border-radius: 0.75rem;
        background: rgba(31, 41, 55, 0.5);
        border: 1px solid rgba(96, 165, 250, 0.2);
      }
      
      .nav-item a:hover {
        background: rgba(96, 165, 250, 0.2);
        border-color: rgba(96, 165, 250, 0.5);
        transform: scale(1.05);
      }
      
      .nav-item a.active {
        background: rgba(96, 165, 250, 0.25);
        border-color: rgba(96, 165, 250, 0.7);
      }
      
      .navbar {
        padding: 1rem 1.5rem;
      }
      
      .navbar.scrolled {
        padding: 0.8rem 1.5rem;
      }
    }
    
    @media screen and (max-width: 480px) {
      .navbar-logo {
        font-size: 1.5rem;
      }
      
      .nav-menu {
        width: 85%;
        padding: 1.5rem;
      }
      
      .nav-item a {
        font-size: 1.1rem;
        padding: 0.8rem 1.5rem;
      }
    }
    
    /* Add smooth scroll behavior */
    * {
      scroll-behavior: smooth;
    }
    
    /* Navbar overlay effect when menu is open */
    .nav-menu.active::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 30%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      z-index: -1;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => handleNavigation('home')}>
            <span className="logo-text">DevPortfolio</span>
          </div>
          
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={currentSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;