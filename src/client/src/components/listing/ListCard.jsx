import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ListCard extends Component {

        constructor(props){
            super(props)
        }

    render() {
        console.log(this.props.data.name)
        return (
            <div class="row mb-4">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={this.props.data.img1} class="card-img img-fluid" alt="Image"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{this.props.data.name}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
              
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={this.props.data.img1} class="card-img img-fluid" alt="Image"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{this.props.data.name}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
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
