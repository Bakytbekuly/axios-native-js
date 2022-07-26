const axios = require("axios").default

// axios.get("https://fortniteapi.io/v3/challenges", {
//     params: {
//         lang: "ru",
//         season: "current",
//     },
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: "608ecf29-72fa5d12-265b878f-ce68cfd1"
//     }
// }).then(res => {
//     console.log(res.data)
// })
//     .catch((err) => {
//         console.error(err);
//     })

axios({
    url: "https://fortniteapi.io/v1/challenges",
    params: {
        lang: "ru"
    },
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => {
    console.log(res.data)
})
    .catch((err) => {
        console.error(err.toJSON());
    })

// axios.post("https://jsonplaceholder.typicode.com/posts", {
//     userId: 1,
//     title: "My title",
//     body: "My Body",
// }).then(res => {
//     console.log(res.data)
// })
//     .catch((err) => {
//         console.error(err);
//     })

// axios({
//     method: "POST",
//     url: "https://jsonplaceholder.typicode.com/posts",
//     data: {
//         userId: 1,
//         title: "My title",
//         body: "My Body",
//     }
// }).then(res => {
//     console.log(res.data)
// })
//     .catch((err) => {
//         console.error(err);
//     })