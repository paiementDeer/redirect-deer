export default function handler(req, res) {
  const slug = req.query.slug;
  const dossier = Array.isArray(slug) ? slug[slug.length - 1] : slug;

  const redirectUrl = `https://script.google.com/macros/s/TON_DEPLOY_ID/exec?dossier=${dossier}`;
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
