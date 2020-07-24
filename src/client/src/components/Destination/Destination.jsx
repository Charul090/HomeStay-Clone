import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Destination extends Component {
    render() {
        return (
            <div>
                <h1>Destination</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Destination)
