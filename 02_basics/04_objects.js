// const tinderUser = new Object() -> single term object

const tinderUser = {}

tinderUser.name="sanj"
tinderUser.id = "12"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "sanjana",
            lastname:"nayar"
        }
    }
}

console.log(regularUser.fullname);
