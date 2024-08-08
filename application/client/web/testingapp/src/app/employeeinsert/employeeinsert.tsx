import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./employeeinsert.scss";
import  {service}   from './employeeinsert.service';

class Employeeinsert extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },{ headerName: 'age', field: 'age' },{ headerName: 'salary', field: 'salary' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
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
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">employeeinsert</h2>
        <div id="template-iclk">
    <div id="template-i7je" className="gjs-row">
        <div id="template-imn1" className="gjs-cell">
            <input type="text" id="template-i93do" required={true}placeholder="Enter the name"
            onChange={this.handlechange} name="name" value={this.state.employee.name}className="form-control "
            />
        </div>
        <div id="template-i8ts" className="gjs-cell">
            <input type="text" id="template-iw25g" placeholder="Enter the age" required={true}onChange={this.handlechange}
            name="age" value={this.state.employee.age}className="form-control " />
        </div>
        <div id="template-idag" className="gjs-cell">
            <input type="text" id="template-icm9g" placeholder="Enter the salary"
            required={true}onChange={this.handlechange} name="salary" value={this.state.employee.salary}className="form-control "
            />
        </div>
    </div>
    <div id="template-i6f2" className="gjs-row">
        <div id="template-io7y" className="gjs-cell">
            <button type="button" id="template-igm5" className="btn btn-primary ">submit</button>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Employeeinsert;