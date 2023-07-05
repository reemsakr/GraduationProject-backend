import http from 'k6/http'
import { check, sleep } from "k6"

export let options = {
    stages: [
        { duration: '10m', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
        { duration: '30m', target: 200 }, // stay at higher 200 users for 10 minutes
        { duration: '5m', target: 0 }, // ramp-down to 0 users
    ],
};

export default function () {
    const rnd = Math.floor(Math.random() * 1000);
    const response = http.get(`https://gradproject.onrender.com/Users/all`);
    check(response, {
        "is status 200": (r) => r.status === 200
    })
}

