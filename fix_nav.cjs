const fs = require('fs');
let lines = fs.readFileSync('src/index.css', 'utf-8').split(/\r?\n/);
lines.splice(1520, 16,
`  .nav.menu-open {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    background: transparent !important;
    box-shadow: none !important;
  }
  .nav__logo,
  .nav__hamburger {
    position: relative;
    z-index: 9999;
  }
  .nav__links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--clr-bg-deep);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 9990;
  }`);
fs.writeFileSync('src/index.css', lines.join('\n'));
