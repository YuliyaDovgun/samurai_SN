import React, {FC} from "react";
import {userType} from "../../redux/usersReducer";
import s from "./User.module.css"
import avatar from "../../media/avatar.jpg"
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: userType
    follow: (userId: number | string) => void
    unFollow: (userId: number | string) => void
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
            <NavLink to={'/profile/' + user.id}><img src={user.photos.small ? user.photos.small : avatar} alt={'avatar'}/></NavLink>
            {user.followed
                ? <button onClick={unFollowBtnHandler}>unFollow</button>
                : <button onClick={followBtnHandler}>follow</button>}
        </div>
        <div className={s.infoContainer}>
            <div>
                <span>{user.name}</span>
                <span>{" user.address.country" + ", " + "user.address.city"}</span>
            </div>
            <div>
                {user.status}
            </div>
        </div>
    </div>
}