export default function Title({ title }) {
  return (
    <div className="text-center p-10" id={title}>
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
}
