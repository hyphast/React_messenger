import React from "react";
import PaginatorStyles from "./Paginator.module.scss";
import Button from "../Button/Button";

let calcPagesCount = (totalUsersCount, pageSize) => {
    return Math.ceil(totalUsersCount / pageSize);
}

let setPages = (currentPage, pagesCount) => {
    let pages = [];

    let i, n;
    if (currentPage <= 2) {i = 1;n = 5;}
    else if (currentPage > 2 && currentPage < pagesCount - 1) {i = currentPage - 2;n = currentPage + 2;}
    else {i = pagesCount - 4;n = pagesCount;}

    for (; i <= n; i++) {
        pages.push(i);
    }

    return pages;
}

const Paginator = ({
   totalUsersCount, pageSize, currentPage, onPageChanged
}) => {
    let pagesCount = calcPagesCount(totalUsersCount, pageSize)
    let pages = setPages(currentPage, pagesCount)
    return (
    <div className={PaginatorStyles.pagesNum}>
            <Button onClick={() => {onPageChanged(1)}}>←</Button>
            {pages.map((p) => {
                return <Button active={currentPage === p}
                             onClick={() => {onPageChanged(p)}}>{p} </Button>
                }
            )}
            <Button onClick={() => {onPageChanged(pagesCount)}}>→</Button>
    </div>
    )
}

export default Paginator;