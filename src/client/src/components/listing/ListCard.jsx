import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ListCard extends Component {

        constructor(props){
            super(props)
        }

    render() {
        console.log(this.props.data)
        const {data} = this.props
        return (
            
            <div className="col-6 mt-5">
              <div className="card">
                <div class="card-body">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={data.img1} class="card-img img-fluid" alt="Image"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{data.user_name}</h5>
                          <p class="card-text">{this.props.data.description}</p>
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
