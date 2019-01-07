const http = new easyHTTP;

// Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(error, response) {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }

// });

// Create data
const data = {
  title: "Super-puper new titla!!",
  body: "This is a content for custom created data."
}

// Create post
http.post("https://jsonplaceholder.typicode.com/posts", data, function(error, response) {
  if(error) {
    console.log(error);
  } else {
    console.log(response);
  }
});