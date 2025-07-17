export default function handler(req, res) {
  const { slug } = req.query;

  // Reconstitue le numéro de dossier à partir du chemin
  const dossier = Array.isArray(slug) ? slug.join('/') : slug;

  // Construit l’URL de redirection vers Apps Script
  const redirectUrl = `https://script.google.com/macros/s/AKfycbyHZKCOr5vVhw7EfkPK3yT_sH64Z30439_DS9HItYPu3YY9myDSKCqXM773-QRToMHc/exec?dossier=${encodeURIComponent(dossier)}`;

  // Redirection 302
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
