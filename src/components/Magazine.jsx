import "./magazine.css";

export default function Magazine({ title, frontpage }) {
  return (
    <div className="magazine">
      <img className="mag-frontpage-img" src={frontpage} alt={title} />
      {/* <div className="mag-frontpage-title">{title}</div> */}
    </div>
  );
}
