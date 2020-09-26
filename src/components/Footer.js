import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://facebook.com/">Facebook</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Powered by{' '}
          <a>YULPOP, a Milligrvm Division</a>.
        </span>
      </div>
    </footer>
  </div>
)
