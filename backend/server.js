
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// simple health
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'Creative Space API' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, company, budget, message } = req.body || {};
  console.log('Contact form:', { name, email, company, budget, message });
  res.json({ status: 'ok', message: 'Thank you. Your request has been received.' });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
