import React from "react";
import Card from "./card";
import C from "../styles/CardsContainer.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Cards() {
  const dogs = useSelector(state => state.showDogs);
  const filtered = useSelector(state => state.filteredDogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(8);
  const [pageNumberLimit, setpageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dogs.slice(indexOfFirstItem, indexOfLastItem);

  const data = Object.entries(dogs).length; //Cantidad de perros
  for (let i = 0; i <= Math.ceil(data / itemsPerPage); i++) {
    pages.push(i); //Redondea para arriba asegurando una página para la data remanente. Pushea solo los índices.
  }

  function handlePage(e) {
    setCurrentPage(Number(e.target.innerText));
  }
  function handleNext(e) {
    console.log(e.target.id);
    if (currentPage !== 1) {
      if (e.target.innerText === "Prev" || e.target.id === "prev") {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
      }
    }
    if (e.target.innerText === "Next" || e.target.id === "next") {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  }

  return (
    <div>
      <div className={C.container}>
        {(filtered.length === 0 ? currentItems : filtered).map(el => (
          <div key={el.id}>
            <Card
              name={el.name}
              key={el.id}
              image={el.image}
              temperament={
                typeof el.temperaments[0] === "string"
                  ? el.temperaments
                  : el.temperaments.map(el => el.name)
              }
              id={el.id}
              minYearsOfLife={el.minYearsOfLife}
              maxYearsOfLife={el.maxYearsOfLife}
            />
          </div>
        ))}
      </div>
      <div>
        <ul className={C.numberList}>
          <li>
            <button
              disabled={currentPage == pages[1] ? true : false}
              onClick={e => handleNext(e)}
            >
              Prev
            </button>
          </li>
          {pages.length > maxPageNumberLimit ? (
            <li id="prev" onClick={handleNext}>
              &hellip;
            </li>
          ) : null}
          {data > 0 &&
            pages.map(el =>
              el < maxPageNumberLimit && el > minPageNumberLimit ? (
                <li
                  className={currentPage == el ? C.active : null}
                  key={el}
                  id={el}
                  onClick={handlePage}
                >
                  {el}
                </li>
              ) : null
            )}
          {pages.length > maxPageNumberLimit ? (
            <li id="next" onClick={handleNext}>
              &hellip;
            </li>
          ) : null}
          <li>
            <button
              disabled={currentPage == pages[pages.length - 1] ? true : false}
              onClick={e => handleNext(e)}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
