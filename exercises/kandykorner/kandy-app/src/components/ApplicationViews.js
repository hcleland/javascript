import { Route, BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from 'react'
import StoreList from './StoreList/StoreList';
import StoreDetail from "./StoreList/StoreDetail"
import EmployeeList from './EmployeeList/employeesList';
import EmployeeDetail from "./EmployeeList/EmployeeDetail";
import CandyList from './CandyList/CandyList';
import CandyDetail from "./CandyList/CandyDetail"
import candyTypes from './CandyList/candyTypes';
import APIManager from '../modules/APIManager';

class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {};
        APIManager.getAll("stores")
            .then(stores => newState.stores = stores)
            .then(() => APIManager.getAll("employees"))
            .then(employees => newState.employees = employees)
            .then(() => APIManager.getAll("candies"))
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))

    }

    render() {
        return (
            <React.Fragment>
                {/* <Route exact path="/" component={Welcome} /> */}
                <Route exact path="/stores" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route exact path="/stores/:storeId(\d+)" render={(props) => {
                    // Find the store with the id of the route parameter
                    let store = this.state.stores.find(store =>
                        store.id === parseInt(props.match.params.storeId)
                    )

                    // If the store wasn't found, create a default one
                    if (!store) {
                        store = { id: 404, name: "404", store: "Store not found" }
                    }

                    return <StoreDetail store={store}
                        deleteStore={this.deleteStore} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the employee with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    // If the employee wasn't found, create a default one
                    if (!employee) {
                        employee = { id: 404, name: "404", employee: "Employee not found" }
                    }

                    return <EmployeeDetail employee={employee}
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} />
                }} />
                <Route exact path="/candies/:candyId(\d+)" render={(props) => {
                    // Find the candy with the id of the route parameter
                    let candy = this.state.candies.find(candy =>
                        candy.id === parseInt(props.match.params.candyId)
                    )

                    // If the candy wasn't found, create a default one
                    if (!candy) {
                        candy = { id: 404, name: "404", candy: "Candy not found" }
                    }

                    return <CandyDetail candy={candy}
                        deleteCandy={this.deleteCandy} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)