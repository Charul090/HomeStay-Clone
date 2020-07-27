import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Pagination.css'
import {pageChange,fetchData} from '../../redux/ListRedux/action.js';


export class Pagination extends Component {
            constructor(props){
                super(props)
                this.state = {
                    page:1,
                    total:1
                }
            }

            handlePage = (e)=>{

                this.props.pageChange(Number(e.target.id));
                this.props.fetch(this.props.history.location.search+`page=${e.target.id}`)
                
                console.log(this.props.pagenum)
                var num = this.props.pagenum
                console.log("e.target.id"+ e.target.value)
                console.log("props total"+this.props.total)
                if(e.target.value==="-1"){
                    if(num!==1){
                        num = num-1
                        // this.props.fetch(this.props.history.location.search+`page=${num}`)
                    }  
                }
                else if(e.target.value==="0"){
                    if(num<this.props.total){
                        num = num+1;
                        console.log("inside 0"+num)
                        this.props.pageChange(num);
                        // this.props.fetch(this.props.history.location.search+`page=${num}`)
                    }
                    else{
                        num = num;
                    }
                }
                if(e.target.id!=="0"&&e.target.id!=="-1"){
                    num = Number(e.target.id);
                    this.props.pageChange(num);
                    // this.props.fetch(this.props.history.location.search+`page=${num}`)
                }
                console.log("num"+num);
                // this.props.fetch(this.props.history.location.search+`page=${num}`)
            }


    render() {
        // console.log(this.state);
        var {total,pagenum} = this.props
        console.log(pagenum)
        var list = [];
        for(var  i=0; i<total; i++){
            list.push(i+1);
        }
        return (
            <div>
                <div id="pagination-panel" className="activepage_entries_info rightFloat ">
                    <div class="mobile-pagination">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <button   id="-1" value="0.1"  aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                            </li>
                            { list &&
                                list.map((item, index) => <li class="page-item"><button class="page-link" value ={item} key={index} id={item} onClick={this.handlePage}>{item}</button></li>)
                                }
                                
                            <li class="page-item">
                            <button   value="0" id="0" aria-label="Next">
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
