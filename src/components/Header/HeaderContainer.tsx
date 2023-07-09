import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {fetchAuthMeTC} from "../../redux/authReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {mathParamType} from "../Profile/ProfileContainer";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.fetchAuthMeTC()
    }
    render() {
        return <Header isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    fetchAuthMeTC,
}

const WithRouterHeaderContainer = withRouter(HeaderContainer)

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(WithRouterHeaderContainer)

// types
type PropsType = RouteComponentProps<mathParamType> & HeaderContainerPropsType
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = typeof mapDispatchToProps
