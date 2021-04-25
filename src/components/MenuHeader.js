import React, { useEffect } from "react";
import "./MenuHeader.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../actions/category";

const MenuHeader = (props) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <a href={`${category.slug}`}>{category.name}</a>
          ) : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  return (
    <div className="menuHeader">
      <ul>
        {category.categories.length > 0
          ? renderCategories(category.categories)
          : null}
      </ul>
    </div>
  );
};

export default MenuHeader;
