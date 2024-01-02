import express from 'express'
import morgan from 'morgan';


const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => res.json({message: " Bienvenido a mi API"}))

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    })
})

export default app