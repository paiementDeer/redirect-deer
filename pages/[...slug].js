export default function Page({ dossier }) {
  return (
    <div>
      <h1>Test de route : { dossier }</h1>
      <p>La page fonctionne !</p>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const dossier = Array.isArray(slug) ? slug.join('/') : slug;
  return { props: { dossier } };
}
