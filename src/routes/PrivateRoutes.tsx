import { useEffect } from 'react'
import { Redirect, Route, RouteProps, useLocation } from 'react-router'
import { MenuCustom } from '../components/Menu/Menu'

export type PrivateRoutesProps = {
    isAuthenticated: boolean
    authenticationPath: string
    redirectPath: string
    setRedirectPath: (path: string) => void
    role: 'admin' | 'user'
} & RouteProps

export default function PrivateRoutes({
    isAuthenticated = true,
    authenticationPath,
    redirectPath,
    setRedirectPath,
    role,
    ...routeProps
}: PrivateRoutesProps) {
    const currentLocation = useLocation()

    useEffect(() => {
        if (!isAuthenticated) {
            setRedirectPath(currentLocation.pathname)
        }
    }, [isAuthenticated, setRedirectPath, currentLocation])
    
    if (isAuthenticated && redirectPath === currentLocation.pathname) {
        return (
            <>
                {' '}
                <MenuCustom>
                    <Route {...routeProps} />
                </MenuCustom>
            </>
        )
    } else {
        return <Redirect to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }} />
    }
}
