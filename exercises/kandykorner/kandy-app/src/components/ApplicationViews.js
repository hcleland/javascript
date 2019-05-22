import { Route, BrowserRouter as Router } from 'react-router-dom'
import React, { Component } from 'react'
import StoreList from './StoreList/stores';
import EmployeeList from './EmployeeList/employees';
import CandyList from './CandyList/CandyList';
import candyTypes from './CandyList/candyTypes';

class ApplicationViews extends Component {

    storeList = [
        { id: 1, name: "Kandy Store 1", address: "1 Chocolate Lane" },
        { id: 2, name: "Kandy Store 2", address: "2 Chocolate Lane" },
        { id: 3, name: "Kandy Store 3", address: "3 Chocolate Lane" },
        { id: 4, name: "Kandy Store 4", address: "4 Chocolate Lane" },
    ]

    employeeList = [
        { id: 1, name: "Joe Smith" },
        { id: 2, name: "Jane Richards" },
        { id: 3, name: "Sally Jones" },
        { id: 4, name: "Robert Williams" },
    ]

    candyTypes = [
        { id: 1, type: "candy bar" },
        { id: 2, type: "lollipop" },
        { id: 3, type: "hard candy" },
        { id: 4, type: "mint flavored" },
    ]

    candies = [
        { id: 1, type: "candy bar", name: "Snickers" },
        { id: 2, type: "lollipop", name: "Tootsie Roll Pop" },
        { id: 3, type: "hard candy", name: "Gobstoppers" },
        { id: 4, type: "mint flavored", name: "Junior Mints" },
    ]

    state = {
        stores: this.storeList,
        employees: this.employeeList,
        candyTypes: this.candyTypes,
        candies: this.candies
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews