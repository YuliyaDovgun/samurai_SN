import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {setAuthAC, setIsAuthAC} from "../../redux/authReducer";
import {authAPI} from "../../api/auth-api";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {mathParamType} from "../Profile/ProfileContainer";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        authAPI.getMe()
            .then(res => {
                if (res.resultCode === 0) {
                    this.props.setAuthAC(res.data.data)
                    this.props.setIsAuthAC(true)
                }
            })
    }
    render() {
        return <Header isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = {
    setAuthAC,
    setIsAuthAC,
}
const WithRouterHeaderContainer = withRouter(HeaderContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithRouterHeaderContainer)

// types
type PropsType = RouteComponentProps<mathParamType> & HeaderContainerPropsType
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = typeof mapDispatchToProps
