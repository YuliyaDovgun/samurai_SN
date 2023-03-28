import React from "react";
import {userType} from "../../redux/usersReducer";
import {User} from "./User";
import axios from "axios";

type UsersPropsType = {
    users: userType[]
    follow: (userId: number | string) => void
    unFollow: (userId: number | string) => void
    setUsers: (users: userType[]) => void
}

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return <div>
            {this.props.users.map(u => <User key={u.id} user={u} follow={this.props.follow}
                                             unFollow={this.props.unFollow}/>)}
        </div>
    }
}
