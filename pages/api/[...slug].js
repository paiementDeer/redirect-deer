export default function handler(req, res) {
  const { slug } = req.query;
  const dossier = Array.isArray(slug) ? slug.join('/') : slug;

  const target = `https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhKckvD6-H7_SI6HBdxoc-NDc3Ae9NlW-ivN-gLRAjMOHs2SVr4KR-_zlf8SpPDQGdBeUs3mZnTPSe7U2HwDD2UiHalzn6Lntp4TGZWmvxUxfiVYPhmuJ2WvxvE7lsYI2GyTSP_VPpeIjlXh2q42vaFLc2Won9kpCjLO9xs3NGEVZ3BCvK39qWxW0YWHirKKT1Xr14_rTp2W6Ksn5GMCNiLI3HvsoaI6CP9Bp3NWOiyQZl-GaJj8EM-7dcXyYg-kokqAkcSjHsrw9TIf6ZjMNSqGE574l78peL8yUceuScnqtfxWjp3CXeKMxb75A&lib=MscJ009pgp5Mm9BV_inhw-Wax5JqxBUWp&dossier=${encodeURIComponent(dossier)}`;

  res.writeHead(302, { Location: target });
  res.end();
}
