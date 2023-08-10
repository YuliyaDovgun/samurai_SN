import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {fetchUsersTC, followTC, setCurrentPageAC, unFollowTC} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {mathParamType} from "../Profile/ProfileContainer";
import {compose} from "redux";

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
       this.props.fetchUsersTC(this.props.page, this.props.countOnThePage)
    }

    getPageOnClickHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.fetchUsersTC(currentPage, this.props.countOnThePage)
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
                unFollow={this.props.unFollow}
            />
        </>
    }
}
const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.users.users,
        page: state.users.page,
        totalCount: state.users.totalCount,
        countOnThePage: state.users.countOnThePage,
        isFetching: state.users.isFetching,
    }
}
const mapDispatchToProps = {
    follow: followTC,
    unFollow: unFollowTC,
    setCurrentPage: setCurrentPageAC,
    fetchUsersTC,
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(UsersContainer)

type UsersContainerPropsType = RouteComponentProps<mathParamType> & mapStateToPropsUsersType & mapDispatchToPropsUsersType
export type mapStateToPropsUsersType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsUsersType = typeof mapDispatchToProps


