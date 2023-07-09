import React, {ComponentType, FC} from 'react'
import {Redirect} from 'react-router-dom';
import {AppStateType} from "../redux/store";
import {connect} from "react-redux";

export function WithAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent: FC<WithAuthRedirectPropsType> = ({isAuth, ...props}) => {
        return !isAuth ? <Redirect to={'/login'}/> : <Component {...props as T}/>
    }

  return connect(mapStateToProps)(RedirectComponent)
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type WithAuthRedirectPropsType = mapStatePropsType
type mapStatePropsType = ReturnType<typeof mapStateToProps>
