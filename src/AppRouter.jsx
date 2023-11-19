import {Routes, Route} from 'react-router-dom'
import { LoginPage } from './auth/pages/LoginPage'
import { PrivateRoute } from './auth/routes/PrivateRoute'
import { Dashboard } from './user/pages/dashboard/Dashboard'
import { Details } from './user/pages/detail-page/Details'

export function AppRouter(){
    return(
        <main>
            <Routes>
                <Route
                path='/'
                element={<LoginPage />}
                />

                <Route 
                path='/dashboard'
                element = {
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
                /> 
                <Route 
                path='/details/:id'
                element = {
                    <PrivateRoute>
                        <Details />
                    </PrivateRoute>
                }
                /> 
            </Routes>
        </main>
    )
}