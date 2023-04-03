import React from "react";

type PaginatorPropsType = {
    countOfThePage: number
    getPageOnClickHandler: (currentPage: number) => void
    page: number
}
export const Paginator = (props: PaginatorPropsType) => {
    const pages = []
    for (let i = 1; i <= props.countOfThePage; i++) {
        pages.push(i)
    }
    const currentPages = pages.map((p, index) => <span
        key={index}
        style={{fontWeight: props.page === p ? 'bold' : 'normal'}}
        onClick={() => props.getPageOnClickHandler(p)}>{p}</span>)

    return <div>{currentPages}</div>
}