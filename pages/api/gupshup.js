export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://de0c99c8-3ff8-47b7-8500-41b6a296b91b-00-1bg3nwy4iw700.spock.replit.dev/gupshup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-source': 'whatsapp',
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.text();
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error proxying to Supabase.');
  }
}
