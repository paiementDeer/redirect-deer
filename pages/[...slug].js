export default function handler(req, res) {
  const { slug } = req.query;

  if (!slug || slug.length < 3) {
    return res.status(400).send("Lien invalide.");
  }

  const numeroDossier = slug[2];
  const redirectUrl = `https://script.google.com/macros/s/AKfycbyyXn22Mnet1TDJgPhhnGAs6q84oOn9WGnX8SKT3b0G49ZkMkoFzJzVfM5m4m6JrP8/exec?dossier=${numeroDossier}`;

  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
