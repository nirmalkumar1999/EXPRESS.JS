console.log("hello world");


let getbtn = document.getElementById("get")

getbtn.addEventListener("click", () => {
    fetch("/getStudent").then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error())
})


let postbtn = document.getElementById("post")
let student = {
    name: "nirmal",
    age: 24,
    address: "khammam"
}
postbtn.addEventListener("click", () => {
    fetch("/postData", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "message": "this is a student data"
        },
        body: JSON.stringify(student)
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})