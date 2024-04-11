import {observer} from "mobx-react-lite";
import {useLocation} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import s from './Pagination.module.scss'

type PaginatorTypeComponent = {
  totalItemsCount: number,
  pageSize: number,
  currentPage: number,
}

export const Pagination = observer(({totalItemsCount, pageSize, currentPage}:PaginatorTypeComponent) => {
  const location = useLocation();
  const users = location.pathname.includes('/users')
  //общее количество страниц при показе props.pageSize на странице
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages = useMemo(() => {
    let pagesArray: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray = [...pagesArray, i];
    }
    return pagesArray
  }, [pagesCount])

  // Вычисление общего количества "порций" страниц
  let portionCount = Math.ceil(pagesCount / pageSize)
  // Использование useState для отслеживания текущей "порции" страниц
  const [portionPage, setPortionPage] = useState(Math.ceil(currentPage / pageSize))
  // Вычисление границ текущей "порции" страниц
  let prevPortionNumber = (portionPage - 1) * pageSize + 1
  let nextPortionNumber = portionPage * pageSize
// Фильтрация массива страниц для отображения только текущей "порции" страниц
  const filterPages = useMemo(() => {
    return pages.filter(p => p >= prevPortionNumber && p <= nextPortionNumber)
  }, [pages, prevPortionNumber, nextPortionNumber])

  useEffect(() => {
    if (!users) {
      setPortionPage(1)
    }
  }, [users]);

  return (
    <div className={s.containerPages}>
      <div className={s.paginatorBut}>
        {portionPage > 1 &&
            < >
                <button onClick={() => setPortionPage(1)}>{'<'}</button>
                <button onClick={() => setPortionPage(portionPage - 1)}>{'<<'}</button>
            </>}
      </div>

      {filterPages.map((p) => {
        return (
          <button key={p}
                className={currentPage === p ? s.pageActive : s.page}
          >{p}</button>
        );
      })}

      {portionCount > portionPage &&
          <div className={s.paginatorBut}>
              <button onClick={() => setPortionPage(portionPage + 1)}>{'>>'}</button>
              <button onClick={() => setPortionPage(portionCount)}>{'>'}</button>
          </div>}
    </div>
  );
});
