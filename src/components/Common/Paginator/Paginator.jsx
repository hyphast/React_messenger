import PaginatorStyles from "./Paginator.module.css";
import React from "react";

let calcPagesCount = (totalUsersCount, pageSize) => {
    return Math.ceil(totalUsersCount / pageSize);
}

let setPages = (totalUItemsCount, pageSize, currentPage, pagesCount) => {
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

const Paginator = (props) => {
    let pagesCount = calcPagesCount(props.totalUsersCount, props.pageSize)
    let pages = setPages(props.totalUsersCount, props.pageSize, props.currentPage, pagesCount)
    return (
    <div className={PaginatorStyles.pagesNum}>
            <span onClick={() => {props.onPageChanged(1)}}>←</span>
            {pages.map((p) => {
                return <span className={props.currentPage === p && PaginatorStyles.selectedPage}
                             onClick={() => {props.onPageChanged(p)}}>{p} </span>
                }
            )}
            <span onClick={() => {props.onPageChanged(pagesCount)}}>→</span>
    </div>
    )
}

export default Paginator;