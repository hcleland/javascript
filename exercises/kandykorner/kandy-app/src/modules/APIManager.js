const remoteURL = "http://localhost:5002"

export default {
    getOne(id) {
        return fetch(`${remoteURL}/stores/${id}`).then(e => e.json())
    },
    getOne(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
    },
    getOne(id) {
        return fetch(`${remoteURL}/candyTypes/${id}`).then(e => e.json())
    },
    getOne(id) {
        return fetch(`${remoteURL}/candies/${id}`).then(e => e.json())
    },

    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(e => e.json())
    },

    post(storeObj) {
        return fetch(`${remoteURL}/stores`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(storeObj)
        }).then(e => e.json())

    },
    post(employeeObj) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeObj)
        }).then(e => e.json())

    },
    post(candyTypeObj) {
        return fetch(`${remoteURL}/candyTypes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(candyTypeObj)
        }).then(e => e.json())

    },
    post(candyObj) {
        return fetch(`${remoteURL}/candies`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(candyObj)
        }).then(e => e.json())

    },

    put(editedStore) {
        return fetch(`${remoteURL}/stores/${editedStore.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedStore)
        }).then(data => data.json());
    },
    put(editedEmployee) {
        return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEmployee)
        }).then(data => data.json());
    },
    put(editedCandyType) {
        return fetch(`${remoteURL}/candyTypes/${editedCandyType.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedCandyType)
        }).then(data => data.json());
    },
    put(editedCandy) {
        return fetch(`${remoteURL}/candies/${editedCandy.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedCandy)
        }).then(data => data.json());
    },


    deleteStore(id) {
        return fetch(`${remoteURL}/stores/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(e => e.json())
    },
    deleteEmployee(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(e => e.json())
    },
    deleteCandyType(id) {
        return fetch(`${remoteURL}/candyTypes/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(e => e.json())
    },
    deleteCandy(id) {
        return fetch(`${remoteURL}/candies/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(e => e.json())
    }
}
