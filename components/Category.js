import React from "react";

function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col gap-y-2 items-center text-center p-4 transition hover:bg-purple-50"
    >
      <img src={image} alt={title} className="w-12 h-12 rounded" />
      <span>{title}</span>
    </a>
  );
}

export default Category;
