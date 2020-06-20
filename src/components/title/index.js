import React from 'react'

class Title extends React.Component{
    render(){
        const props = this.props
        return(
            <div className="my-3">
                <h3>{props.value}</h3>
            </div>
        )
    }
}

export default Title