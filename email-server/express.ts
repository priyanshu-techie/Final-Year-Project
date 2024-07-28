import Express, { Request, Response } from 'express'

const app = Express();


app.get("/",(req: Request, resp: Response) => {
    console.log("recieved a request here")
    resp.send({name:"priaynshu"})
})

app.listen(8000, ()=>{
    console.log("server running at http://localhost:8000");
})

