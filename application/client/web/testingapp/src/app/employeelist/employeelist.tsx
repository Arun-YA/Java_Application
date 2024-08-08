import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./employeelist.scss";
import  {service}   from './employeelist.service';
import  BootstrapTable   from 'react-bootstrap-table-next';
import  paginationFactory   from 'react-bootstrap-table2-paginator';
import  'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'  ;
import  'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'  ;

class Employeelist extends React.Component<any, any> {
    columnDefs: any = [{ dataField: 'name', text: 'name' },{ dataField: 'age', text: 'age' },{ dataField: 'salary', text: 'salary' },];
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    employee : {
    name: '',
    age: '',
    salary: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ employee: { ...this.state.employee, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.employee.created_by = sessionStorage.getItem('email')||'{}';
    }
    rowclick ={onClick: (e: any, row: any, rowIndex: any) => 
    {this.props.history.push({ pathname: "/",state:{id:row} });
    }}

    render(){
    return(
    <>
        <h2 className="screen-align">employeelist</h2>
        <div>
    <div id="template-ikv9">
        <div>
            <BootstrapTable keyField='_id' data={this.state.rowData} columns={this.columnDefs}
            rowEvents={this.rowclick} pagination={paginationFactory({ sizePerPageList:
            [{ text: '5', value: 5 }, { text: '25', value: 25 }, { text: '50', value:
            50 }], } ) } />
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Employeelist;