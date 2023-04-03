import React from "react";
import {User} from "./User";
import {Paginator} from "../common/Paginator";
import {userType} from "../../redux/usersReducer";

type UsersPropsType = {
    countOfThePage: number
    getPageOnClickHandler: (currentPage: number) => void
    page: number
    users: userType[]
    follow: (userId: number | string) => void
    unFollow: (userId: number | string) => void
}
export const Users = (props: UsersPropsType) => {
    return <div>
        <Paginator countOfThePage={props.countOfThePage} getPageOnClickHandler={props.getPageOnClickHandler}
                   page={props.page}/>
        {props.users.map(u => <User key={u.id} user={u} follow={props.follow}
                                    unFollow={props.unFollow}/>)}
    </div>
}