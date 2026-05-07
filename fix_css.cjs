const fs = require('fs');
let lines = fs.readFileSync('src/index.css', 'utf-8').split(/\r?\n/);
lines.splice(1696, 17,
`@media (max-width: 768px) {
  .pricing__table {
    min-width: 0;
  }
  .pricing__table th,
  .pricing__table td {
    padding: 0.75rem 0.25rem;
  }
  .pricing__table th {
    font-size: 0.9rem;
  }
  .pricing__table td {
    font-size: 0.8rem;
  }
  .pricing__table td strong {
    font-size: 0.95rem;
  }
  .price-tag {
    display: block;
    margin: 0.25rem 0;
    text-align: center;
    font-size: 0.75rem;
    padding: 0.3rem 0.5rem;
    white-space: normal;
  }
}`);
fs.writeFileSync('src/index.css', lines.join('\n'));
