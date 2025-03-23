const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("Middleware is running");
//   res.send("Hello World");
// });

app.get("/", (req, res) => {
    console.log("Home page is running");
    res.send("home page");
});

app.get("/cats", (req, res) => {
    console.log("Home page is running");
    res.send("catssssssss");
});

app.post("/cats", (req, res) => {
    console.log("Home page is running");
    res.send("cats post");
});


app.get("/news/:newsId/:title", (req, res) => {
    const { newsId, title } = req.params;
    console.log("Home page is running");
    res.send(`newsId: ${newsId}, title: ${title}`);
});


app.get("/search", (req, res) => {
    if (!q) {
        res.send("No query");
        return;
    }
    const { q } = req.query;
    console.log("Home page is running");
    res.send(`search: ${q}`);
});

app.get("*", (req, res) => { 
    console.log("Middleware is running");
    res.send("Halaman tidak ditemukan");
})


// locahost:8080/cats


app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
