import React, {FC} from "react";
import {followTC, unFollowTC, userType} from "../../redux/usersReducer";
import s from "./User.module.css"
import avatar from "../../media/avatar.jpg"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type UserPropsType = {
    user: userType
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

export const User: FC<UserPropsType> = ({user}) => {
    const dispatch = useDispatch()
    const followBtnHandler = (userId: string) => {
        dispatch(followTC(userId))
    }
    const unFollowBtnHandler = (userId: string) => {
       dispatch(unFollowTC(userId))
    }
    return <div className={s.userContainer}>
        <div className={s.imgBtnContainer}>
            <NavLink to={'/profile/' + user.id}><img src={user.photos.small ? user.photos.small : avatar} alt={'avatar'}/></NavLink>
            {user.followed
                ? <button onClick={() => unFollowBtnHandler(user.id)}>unFollow</button>
                : <button onClick={() => followBtnHandler(user.id)}>follow</button>}
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