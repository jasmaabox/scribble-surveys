/**
 * Flash messages
 * 
 * @param {*} param0 
 * @returns 
 */
export default function Flash({ messages }) {

  const infoMessages = messages.filter(({ type }) => type === 'info');
  const errorMessages = messages.filter(({ type }) => type === 'error');

  return (
    <div>
      {infoMessages.map(({ message }, i) => (
        <div key={`info-${i}`} className="alert alert-primary">{message}</div>
      ))}
      {errorMessages.map(({ message }, i) => (
        <div key={`error-${i}`} className="alert alert-danger">Error: {message}</div>
      ))}
    </div>
  );
}