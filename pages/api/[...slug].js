export default function handler(req, res) {
  const { slug } = req.query;

  if (!slug || slug.length < 3) {
    return res.status(400).send("Lien invalide.");
  }

  const numeroDossier = slug[2];
  const redirectUrl = `https://script.google.com/macros/s/AKfycbxYn22Mnet1TDJgPhhnGAs6q84oN9iGWn8X5KT3b06492tKof2JzVFh5m4m63rP8/exec?dossier=${numeroDossier}`;

  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
