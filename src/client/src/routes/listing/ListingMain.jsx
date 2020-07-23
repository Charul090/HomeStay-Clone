import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from './Slider.jsx'
import SearchBar from './SearchBar.jsx'
import ListCard from './ListCard.jsx'
import NavBarHome from '../NavBarHome.jsx'


export class ListingMain extends Component {
    render() {
        return (
            <div>
                <div className="mb-5 ml-5" >
                <NavBarHome />
                </div>
                <div className="row mb-5" style={{background:"grey"}} >
                    <div className="col-12 mt-3 mb-0">
                        <div className="row d-flex" >
                            <div className="col-9" ><SearchBar /></div>
                            <div className="col-2"><Slider /></div>
                        </div>
                    </div>
                </div>
                <ListCard />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingMain)
