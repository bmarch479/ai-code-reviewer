export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { spec } = req.body;
    try {
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ spec }),
      });
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Error contacting backend' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
