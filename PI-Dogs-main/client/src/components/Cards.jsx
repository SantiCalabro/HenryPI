import React from "react";
import Card from "./card";
import C from "../styles/CardsContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getFiltered } from "../redux/actions";
import notFound from "../statics/notfound.png";
export default function Cards() {
  const dogs = useSelector(state => state.showDogs);
  const filtered = useSelector(state => state.filteredDogs);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(8);
  const [pageNumberLimit, setpageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    Object.entries(filtered).length > 2
      ? filtered.slice(indexOfFirstItem, indexOfLastItem)
      : filtered;

  const data = Object.entries(filtered).length; //Cantidad de perros
  for (let i = 0; i <= Math.ceil(data / itemsPerPage); i++) {
    pages.push(i); //Redondea para arriba asegurando una página para la data remanente. Pushea solo los índices.
  }
  function handlePage(e) {
    setCurrentPage(Number(e.target.innerText));
  }

  function handleSetPage(e) {
    if (e.target.innerText == 1) {
      setCurrentPage(pages[1]);
    }
    if (e.target.innerText == pages[pages.length - 1]) {
      setCurrentPage(pages[pages.length - 1]);
    }
  }
  function handleNext(e) {
    if (currentPage !== 1) {
      if (e.target.innerText === "<" || e.target.id === "prev") {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
      }
    }
    if (e.target.innerText === ">" || e.target.id === "next") {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  }
  React.useState(() => {
    dispatch(getFiltered(dogs));
  }, []);

  return (
    <div>
      <div className={C.container}>
        {Object.values(currentItems)[0] == "Ups! Dog not found!" ? (
          <div className={C.notFound}>
            <img src={notFound} alt="" />
          </div>
        ) : (
          currentItems.map(el => (
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
          ))
        )}
      </div>
      <div>
        <ul className={C.numberList}>
          <li>
            <button
              className={C.pageBtn}
              disabled={currentPage == pages[1] ? true : false}
              onClick={e => handleNext(e)}
            >
              &lt;
            </button>
          </li>

          {pages.length > maxPageNumberLimit ? (
            <li id="prev" onClick={e => handleSetPage(e)} className={C.hellip}>
              {pages[1]}
            </li>
          ) : null}
          <li className={C.hellip}>&hellip;</li>
          {data > 0 &&
            pages.map(el =>
              el < maxPageNumberLimit && el > minPageNumberLimit ? (
                <li
                  className={currentPage == el ? C.active : C.off}
                  key={el}
                  id={el}
                  onClick={handlePage}
                >
                  {el}
                </li>
              ) : null
            )}
          <li className={C.hellip}>&hellip;</li>
          {pages.length > maxPageNumberLimit ? (
            <li className={C.hellip} id="next" onClick={e => handleSetPage(e)}>
              {pages[pages.length - 1]}
            </li>
          ) : null}

          <li>
            <button
              className={C.pageBtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
              onClick={e => handleNext(e)}
            >
              &gt;
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
