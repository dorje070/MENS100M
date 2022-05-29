const express = require('express');
const router = new express.Router();

const MenRanking = require("../models/mens")

// we will handle post req
router.post("/mens", async(req, res)=>{
    try{
        const addingMensRecords  = new MenRanking(req.body)

        console.log(req.body);
        const insertMen =  await addingMensRecords.save();
        res.status(201).send(insertMen);
    }catch(e){
        res.status(400).send(e)
    }
})

// we will handle get req of 
router.get("/mens", async(req, res)=>{
    try{
        const getMens = await MenRanking.find({}).sort({"ranking":1});
        res.send(getMens);
    }catch(e){
        res.status(400).send(e)
    }
})

// we will handle get req of indiv
router.get("/mens/:id", async(req, res)=>{
    try{
        const _id =  req.params.id;
        const getMen = await MenRanking.findById(_id);
        res.send(getMen);
    }catch(e){
        res.status(400).send(e)
    }
})

// we will handle patch req of indiv
router.patch("/mens/:id", async(req, res)=>{
    try{
        const _id =  req.params.id;
        const getMen = await MenRanking.findByIdAndUpdate(_id,req.body, {
            new:true
        } );
        res.send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete("/mens/:id", async(req, res)=>{
    try{
        const _id =  req.params.id;
        const getMen = await MenRanking.findByIdAndDelete(_id);
        res.send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;
