export default function handler(req, res) {
  const { slug } = req.query;
  const dossier = Array.isArray(slug) ? slug.join('/') : slug;

  const target = `https://script.google.com/macros/s/AKfycbwbPs6K20lxVd8FY4QvkpRLMfQC85XYMcaYFTLHMLXvLFWigDGGsOLmgAdtXlgSdzmeXA/exec?dossier=${encodeURIComponent(dossier)}`;
  res.writeHead(302, { Location: target });
  res.end();
}
