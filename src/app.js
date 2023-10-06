import expres from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import router from "./routes/notas.js"
import cors from "cors"

const app = expres();

// Prueba de conexion a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/notas')
.then(()=>{
    console.log('Conectado a la BD')
})

// Configuracion del puerto en el que va a correr el API
app.set('PORT', 5001)

app.use(morgan('dev'))
app.use(expres.json())
app.use(cors({origin: ['http://localhost:3000']}))

app.use('/api/',router)

app.listen(app.get('PORT'), ()=>{
    console.log('Puerto del servidor de backend:' + app.get('PORT'))
})