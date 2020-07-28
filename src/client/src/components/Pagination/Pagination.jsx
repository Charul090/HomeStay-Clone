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
                    this.props.fetch(this.props.history.location.search+`page=${num}`)
                }
                console.log("num"+num);
                
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
                <div className="activepage_entries_info float-left ">
                <p className="small text-left colr" >Homestays and room rental in Toronto, Canada
                We have found 359 Toronto homestays for your stay. From Central Toronto to North York, Scarborough to the east and Etobicoke <br/>to the West, homestays in Toronto GTA offer host family accommodation – ideal whether you are a student, professional or on holidays.</p>
            </div>
                <div id="pagination-panel" className="activepage_entries_info rightFloat ">
                    <div class="mobile-pagination">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            {pagenum>1?
                            <li class="page-item">
                            <Button  onClick={this.handlePage} className="active text-primary bg-light" id="previous" value="0.1"  aria-label="Previous">prev
                                
                            </Button>
                            </li>:<span className="p-1" aria-hidden="true">&laquo;</span>
                            }
                            { list &&
                                list.map((item, index) => <li class="page-item"><button class="page-link" value ={item} key={index} id={item} onClick={this.handlePage}>{item}</button></li>)
                                }
                            {pagenum!==total?    
                            <li class="page-item">
                            <Button  onClick={this.handlePage} className="active text-primary bg-light" value="0" id="next" aria-label="Next">next</Button>
                            </li>:<span className="p-1"aria-hidden="true">&raquo;</span>
                            }
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
