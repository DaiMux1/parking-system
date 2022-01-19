import axios from "axios";

export function getUsers({commit}, token) {
    axios
        .get("http://localhost:3000/api/users", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            data: {},
        })
        .then((response) => {
            commit("setUsers", response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}
export function getSalary({commit}, token) {
    axios
        .get("http://localhost:3000/api/salary", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            data: {},
        })
        .then((response) => {
            commit("setSalary", response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}
export function submitUser({ commit }, user) {
    return commit("setUser", user)
}


