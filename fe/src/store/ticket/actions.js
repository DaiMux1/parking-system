import axios from "axios";

export function getALlTickets({ commit }, token) {
    axios
        .get("http://localhost:3000/api/tickets/all", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            data: {},
        })
        .then((response) => {
            commit("setTickets", response.data);
            commit("setVehicleNumber", response.data.length)
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}
export function getRevenues({commit}) {
    axios
        .get("http://localhost:3000/api/revenues", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                // "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI4NzIxMmU0YzIzODMwNjgyYzc0ZWIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDAxMTIwMjF9.WvFtBYc_yqqIj80Gnw0Do9XHKQ7ei-YPDJe0hzham3Y"
            },
            data: {},
        })
        .then((response) => {
            commit("setRevenues", response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}



