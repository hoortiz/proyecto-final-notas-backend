import { Router } from "express";
import Nota from "../models/notas.js"

const router = Router();

router.get('/notas', async(req,res)=>{
    const notas = await Nota.find();
    res.send(notas)
})

router.post('/notas', async(req,res)=>{
    const nota = new Nota({
        title: req.body.title,
        content: req.body.content
    })
    console.log(req);
    await nota.save()
    res.send(nota)
})

router.get('/notas/:id', async(req,res)=>{
    const nota = await Nota.findOne({ _id: req.params.id })
    res.send(nota)
})


router.patch('/notas/:id', async(req,res)=>{
    try{
        const nota = await Nota.findOne({ _id: req.params.id })
        if(req.body.title){
            nota.title = req.body.title
        }
        if(req.body.content){
            nota.content = req.body.content
        }

        nota.save()
        res.send(nota)
    }catch{
        res.send('La nota no fue actualizada')
    }
})

router.delete('/notas/:id', async(req,res)=>{
    try{
        const nota = await Nota.deleteOne({ _id: req.params.id })
        res.send(nota)
    }catch{
        res.send('La nota no fue eliminada')
    }
})


export default router;