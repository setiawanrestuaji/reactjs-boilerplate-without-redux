import React from 'react'
import Header from '../../components/header'
import Title from '../../components/title'
import axios from 'axios'
import { Link } from 'react-router-dom'

class DetailUser extends React.Component{
    state = {
        listUsers: [],
        loadUsers: true,
        errorUsers: false
    }
    fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    loadUsers: false,
                    errorUsers: false,
                    listUsers: response.data
                }
            })
        }).catch((err) => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    errorUsers: true
                }
            })
        })
    }
    componentDidMount(){
        this.fetchUsers()
    }
    render(){
        if(this.state.loadUsers){
            return(
                <div>
                    <h1>Loading</h1>
                </div>
            )
        } else if(this.state.errorUsers){
            return(
                <div>
                    <h1>Error!</h1>
                </div>
            )
        }
        return(
            <div>
                <Header/>
                <div className="container">
                    <Title value="List User"/>
                    {
                        this.state.listUsers.map((item, i) => (
                            <div key={i} className="mt-2 card">
                                <div className="card-body">
                                    {`${item.name} (${item.email})`}
                                    <div>
                                        <Link to={`/detail/${item.id}`}>
                                            Detail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default DetailUser