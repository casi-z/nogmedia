import app from "./app.js";
import {configDotenv} from "dotenv";

configDotenv()

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server has been started ${port}`)
})
