import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Pagination.css'
import {pageChange,fetchData} from '../../redux/ListRedux/action.js';


export class Pagination extends Component {
            constructor(props){
                super(props)
                this.state = {
                    page:1,
                    total:this.props.total
                }
            }

            handlePage = (e)=>{

                var num = this.state.page
                console.log(e.target.value)
                // this.props.pageChange(Number(e.target.id));
                // this.props.fetch(this.props.history.location.search+`page=${num}`)
            }


    render() {
        console.log(this.state);
        var {total} = this.props
        var list = [];
        for(var  i=0; i<total; i++){
            list.push(i+1);
        }
        return (
            <div>
                <div id="pagination-panel" className="activepage_entries_info rightFloat m-5 ">
                    <div class="mobile-pagination">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <button class="page-link " onClick={this.handlePage} id="previous" value="-1"  aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                            </li>
                            { list &&
                                list.map((item, index) => <li class="page-item"><button class="page-link" value ={item} key={index} id={item} onClick={this.handlePage}>{item}</button></li>)
                                }
                                
                            <li class="page-item">
                            <button class="page-link " onClick={this.handlePage} value="0" id="next" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        total : state.list.total,
        pagenum:state.list.page
    }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: (n) => dispatch(fetchData(n)),
    pageChange: (n) => dispatch(pageChange(n))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
