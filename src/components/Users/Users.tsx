import React from "react";
import {User} from "./User";
import axios from "axios";
import {mapDispatchToPropsUsersType, mapStateToPropsUsersType} from "./UsersContainer";
import {Paginator} from "../common/Paginator";

type UsersPropsType = mapStateToPropsUsersType & mapDispatchToPropsUsersType

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.countOnThePage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCountUsersAC(response.data.totalCount)
            })
    }

    getPageOnClickHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.countOnThePage}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        const countOfThePage = Math.ceil(this.props.totalCount / this.props.countOnThePage)

        return <div>
            <Paginator countOfThePage={countOfThePage} getPageOnClickHandler={this.getPageOnClickHandler} page={this.props.page}/>

            {this.props.users.map(u => <User key={u.id} user={u} follow={this.props.follow}
                                             unFollow={this.props.unFollow}/>)}
        </div>
    }
}
