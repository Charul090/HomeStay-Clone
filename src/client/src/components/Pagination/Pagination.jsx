import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Pagination.css'
import {pageChange,fetchData} from '../../redux/ListRedux/action.js';
import { Button } from 'react-bootstrap';


export class Pagination extends Component {
            constructor(props){
                super(props)
                this.state = {
                    page:1,
                    total:1
                }
            }

            handlePage = (e)=>{
                
                console.log(this.props.pagenum)
                var num = this.props.pagenum
                
                if(e.target.id==="previous"){
                    if(num>1){
                        num = num-1
                        this.props.pageChange(Number(num));
                        this.props.fetch(this.props.history.location.search+`page=${num}`)
                    }  
                }
                else if(e.target.id==="next"){
                    if(num<this.props.total){
                        num = num+1;
                        console.log("inside 0"+num)
                        this.props.pageChange(Number(num));
                        this.props.fetch(this.props.history.location.search+`page=${num}`)
                    }
                    else{
                        num = num;
                    }
                }
                if(e.target.id!=="next"&&e.target.id!=="previous"){
                    num = Number(e.target.id);
                    this.props.pageChange(Number(e.target.id));
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
                            <Button  onClick={this.handlePage} className={pagenum==1?"disabled":"active"}  id="previous" value="0.1"  aria-label="Previous">previous
                                {/* <span aria-hidden="true">&laquo;</span> */}
                            </Button>
                            </li>
                            { list &&
                                list.map((item, index) => <li class="page-item"><button class="page-link" value ={item} key={index} id={item} onClick={this.handlePage}>{item}</button></li>)
                                }
                                
                            <li class="page-item">
                            <button  onClick={this.handlePage} value="0" id="next" aria-label="Next">nex
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
