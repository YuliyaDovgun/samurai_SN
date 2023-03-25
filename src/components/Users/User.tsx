import React, {FC} from "react";
import {userType} from "../../redux/usersReducer";
import s from "./User.module.css"

type UserPropsType = {
    user: userType
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

export const User: FC<UserPropsType> = ({user, follow, unFollow}) => {
    const followBtnHandler = () => {
        follow(user.id)
    }
    const unFollowBtnHandler = () => {
        unFollow(user.id)
    }
    return <div className={s.userContainer}>
        <div className={s.imgBtnContainer}>
            <img src={user.photo} alt={'avatar'}/>
            {user.followed
                ? <button onClick={unFollowBtnHandler}>unFollow</button>
                : <button onClick={followBtnHandler}>follow</button>}
        </div>
        <div className={s.infoContainer}>
            <div>
                <span>{user.fullName}</span>
                <span>{user.address.country + ", " + user.address.city}</span>
            </div>
            <div>
                {user.status}
            </div>
        </div>
    </div>
}