export default function handler(req, res) {
  const slug = req.query.slug;
  const dossier = Array.isArray(slug) ? slug[slug.length - 1] : slug;

  const redirectUrl = `https://script.google.com/macros/s/AKfycbxrQ47FteHyn-Hj2Rw4fZ3hBRP0RPuxXLmpsIQPLlbBcMJp_IMDzprr7Je9ce2E8pCOOg/exec?dossier=${dossier}`;
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
