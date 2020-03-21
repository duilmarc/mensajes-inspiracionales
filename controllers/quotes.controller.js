const path =  require('path');
const fs = require('fs');
const DB_PATH = path.join(__dirname + "/../data/db.json");


let db = require(DB_PATH);

function render(file,res){
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController{
    async index(req,res){
        render("quotes",res);
    }
    async get(req,res){
        return res.send(db);
    }

    async add(req,res){
        const { body :quote } = req;
        const lastQuote = db[db.lenght-1];
        const {id} = lastQuote; 
        quote.id = id + 1;
        db.push(quote);
        fs.writeFileSync(DB_PATH,JSON.stringify(db));
        return res.status(201).send();
    }
}

module.exports = new QuotesController();