import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const bio = {
    nama : "Hanafi Abdullah",
    nim : "02031911057"
};

app.get("/api/get",(req,res)=>{
    res.send(bio);
});

app.listen(3000);

