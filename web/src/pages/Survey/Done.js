export default function Done({ exitMessage }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center mb-4">{exitMessage}</h1>
      <p className="text-center mt-3">You may now close this page or take <a href="/surveys">another survey</a>.</p>
    </div>
  );
}