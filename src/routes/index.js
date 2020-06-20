import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import ListUser from '../views/main'
import DetailUser from '../views/detail'

class AppRouter extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/">
                    <ListUser/>
                </Route>
                <Route exact path="/detail/:id">
                    <DetailUser/>
                </Route>
            </Switch>
        )
    }
}

export default AppRouter