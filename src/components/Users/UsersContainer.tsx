import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {
    changeIsFetchingAC,
    followAC,
    setCurrentPageAC,
    setTotalCountUsersAC,
    setUsersAC,
    unFollowAC,
    userType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type mapStateToPropsUsersType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsUsersType = ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.users.users,
        page: state.users.page,
        totalCount: state.users.totalCount,
        countOnThePage: state.users.countOnThePage,
        isFetching: state.users.isFetching,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number | string) => dispatch(followAC(userId)),
        unFollow: (userId: number | string) => dispatch(unFollowAC(userId)),
        setUsers: (users: userType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCountUsersAC: (totalCount: number) => {
            dispatch(setTotalCountUsersAC(totalCount))
        },
        changeIsFetching: (isFetching: boolean) => {
            dispatch(changeIsFetchingAC(isFetching))
        }
    }
}
type UsersContainerPropsType = mapStateToPropsUsersType & mapDispatchToPropsUsersType

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.countOnThePage}`)
            .then(response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCountUsersAC(response.data.totalCount)
            })
    }

    getPageOnClickHandler = (currentPage: number) => {
        this.props.changeIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.countOnThePage}`)
            .then(response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const countOfThePage = Math.ceil(this.props.totalCount / this.props.countOnThePage)

        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
            countOfThePage={countOfThePage}
            getPageOnClickHandler={this.getPageOnClickHandler}
            page={this.props.page}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}/>
        </>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

