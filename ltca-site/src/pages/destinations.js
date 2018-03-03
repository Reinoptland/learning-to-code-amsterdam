import React from "react"

import Header from "../modules/home/header"

class Destinations extends React.Component {

    render() {
        let data
        if(this.props.data) {
            data = this.props.data.allDirectory.edges
            console.log(data.map(dat => dat.node.relativePath))
            
        }

        return (
            <div>
                <Header 
                    mainHeading="Destinations"
                    buttonText="See destinations"
                    size="small"
                />
                {data ? data.map(dat => <p>{dat.node.relativePath}</p>) : ''}
            </div>
        )
    }
}

export default Destinations

export const query = graphql`
    query Destinations {
	allDirectory {
	  edges {
	    node {
        relativePath
	    }
	  }
	}
}`
