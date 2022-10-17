import { useState, useEffect } from "react";
import CategoryData from "./api/categories.json";
import Category from "./Category";
function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(CategoryData);
  });
  //console.log("categories", categories);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <div className="flex items-center">
          <h3>Kategoriler</h3>
        </div>
        <div className="grid grid-cols-10">
          {categories.map(({ title, image, id }, index) => {
            return (
              <a
                href="#"
                className="flex flex-col gap-y-2 items-center text-center p-4 transition hover:bg-purple-50"
              >
                <img src={image} alt={title} className="w-12 h-12 rounded" />
                <span>{title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
