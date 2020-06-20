import React from 'react'
import Header from '../../components/header'
import Title from '../../components/title'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class ListUser extends React.Component{
    state = {
        detailUser: {},
        loadUser: true,
        errorUser: false
    }

    getUser(){
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`).then((response)=>{
            this.setState((prevState) => {
                return {
                    ...prevState,
                    loadUser: false,
                    errorUser: false,
                    detailUser: response.data,
                }
            })
        }).catch((err)=>{
            this.setState((prevState) => {
                return {
                    ...prevState,
                    errorUser: true
                }
            })
        })
    }
    componentDidMount(){
        this.getUser()
    }

    render(){
        if(this.state.loadUser) {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
        } else if(this.state.errorUser) {
            return (
                <div>
                    <h1>Error!</h1>
                </div>
            )
        }
        return(
            <div>
                <Header/>
                <div className="container">
                    <Title value="Detail User"/>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.detailUser.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.detailUser.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{this.state.detailUser.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser)