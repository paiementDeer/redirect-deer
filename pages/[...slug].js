import { useEffect, useState } from 'react';

export default function Page({ dossier }) {
  const [message, setMessage] = useState("Traitement en cours...");
  const [etat, setEtat] = useState("chargement");

  useEffect(() => {
    if (!dossier) {
      setMessage("Aucun numéro de dossier fourni.");
      setEtat("erreur");
      return;
    }

    const url = `https://script.google.com/macros/s/AKfycbwbPs6K20lxVd8FY4QvkpRLMfQC85XYMcaYFTLHMLXvLFWigDGGsOLmgAdtXlgSdzmeXA/exec?dossier=${encodeURIComponent(dossier)}`;

    fetch(url)
      .then((res) => res.text())
      .then((html) => {
        setMessage(html);
        setEtat("ok");
      })
      .catch((err) => {
        console.error(err);
        setMessage("Une erreur est survenue. Veuillez réessayer ou contacter le secrétariat.");
        setEtat("erreur");
      });
  }, [dossier]);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "40px" }}>
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "30px",
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: etat === "erreur" ? "#ffe6e6" : "#f9f9f9"
      }}>
        <h2>Votre demande est en cours de traitement</h2>
        <div dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const dossier = Array.isArray(slug) ? slug.join('/') : slug;
  return { props: { dossier } };
}
