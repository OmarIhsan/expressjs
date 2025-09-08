const express = require('express');
const productRoutes = require("./routes/products")


const app = express();

app.use(express.json());

app.use("/products", productRoutes)

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`server is listenning on port ${PORT}`)

})