import React from "react";
import P from "../styles/pagination.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Pagination(props) {
  const dogs = useSelector(state => state.showDogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(8);
  const pages = [];
  const data = Object.entries(dogs).length; //Cantidad de perros

  for (let i = 0; i <= Math.ceil(data / itemsPerPage); i++) {
    pages.push(i); //Redondea para arriba asegurando una página para la data remanente. Pushea solo los índices.
  }

  return (
    <>
      <ul className={P.numberList}>
        {data > 0 &&
          pages.map(el => {
            return (
              <li
                className={P.number}
                key={el}
                id={el}
                onClick={props.handlePage}
              >
                {el}
              </li>
            );
          })}
      </ul>
    </>
  );
}
