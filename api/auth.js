export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { key } = req.body;
  const SECRET = process.env.ACCESS_KEY;

  if (!SECRET) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  if (key === SECRET) {
    return res.status(200).json({ ok: true });
  } else {
    return res.status(401).json({ ok: false });
  }
}
