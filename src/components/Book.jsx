export default function Book({ title, description, image }) {
  return (
    <div className="book">
      <img src={image} alt={title} className="bookimage"/>
    </div>
  );
}
