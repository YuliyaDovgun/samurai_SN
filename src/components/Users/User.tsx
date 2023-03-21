import React, {FC} from "react";
import {userType} from "../../redux/usersReducer";

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
    return <div>
        <div>
            <img src={user.photo}/>
            {user.followed
                ? <button onClick={unFollowBtnHandler}>unFollow</button>
                : <button onClick={followBtnHandler}>follow</button>}
        </div>
        <div>
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