import MagazineList from "../assets/MagazineList.js";
import Magazine from "./Magazine.jsx";
import "./magazinerow.css";

export default function MagazineRow({ category }) {
  return (
    <div className="magazine-row">
      <div className="row-category-name">{category}</div>
      <div className="row-wrapper">
        {MagazineList.filter((magazine) => magazine.category === category).map(
          (filteredMagazine) => (
            <Magazine
              id={filteredMagazine.id}
              title={filteredMagazine.title}
              frontpage={filteredMagazine.frontpage}
            />
          )
        )}
      </div>
    </div>
  );
}
