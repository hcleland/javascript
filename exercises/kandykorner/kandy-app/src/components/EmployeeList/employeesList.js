import React, { Component } from 'react'
import EmployeeItem from "./EmployeeItem";
import { withRouter } from 'react-router'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h2>All Employees</h2>
                {
                    this.props.employees.map((item) => {
                        return <EmployeeItem key={item.id} employee={item} {...this.props} />
                    })
                }
            </section>
        )
    }
}

export default EmployeeList