import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ListCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                <div class="card col-6 mb-3" >
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src="https://via.placeholder.com/150" class="card-img" alt="Image"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard)
