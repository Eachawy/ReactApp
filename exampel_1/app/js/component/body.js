import React from 'react'

export default class Body extends React.Component {

    constructor(){
        super();
        this.state = {
            message : 'Eachawy'
        }
    }

    render(){
        return (        
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}



// const Body = () => (
//     <div>
//         <h1>Body</h1>
//     </div>
// )

// export default Body