const deal = require("../helper/dealWithJson")
const fileName = "models/notes.json"
class note{


    static add = (req,res)=>{
        res.render("add", {
            pageTitle:"Add Data"
        })
    }


    static addLogic = (req,res)=>{
        const allNotes = deal.readJsonData(fileName)
        const newNote = {id: Date.now(), ...req.query}
        allNotes.push(newNote)
        deal.writeJsonData(fileName, allNotes)
        res.redirect("/")
    }

    
    static all = (req,res)=>{
        const allNotes = deal.readJsonData(fileName)
        res.render("all", {
            pageTitle:"All Data", 
            allNotes,
            hasData: allNotes.length
        })
    }

    static edit = (req,res)=>{
        const id = req.params.id
        const allNotes=deal.readJsonData(fileName)
        const note = allNotes.find(n=> n.id == id)
        res.render("edit", {
            pageTitle:"Edit",
            note
        })
    }


    static editLogic = (req,res)=>{
        const id = req.params.id
        const allNotes=deal.readJsonData(fileName)
        const index = allNotes.findIndex(n=> n.id == id)
        allNotes[index] = {id, ...req.query}
        deal.writeJsonData(fileName, allNotes)
        res.redirect('/')
    }


    static single =  (req,res)=>{
        const id = req.params.id
        const allNotes=deal.readJsonData(fileName)
        const note = allNotes.find(n=> n.id == id)
        res.render("single", {
            pageTitle:"Single Data",
            note
        })
    }
    static del = (req,res)=>{
        let allNotes=deal.readJsonData(fileName)
        const id = req.params.id
        allNotes = allNotes.filter(n=> n.id != id)
        deal.writeJsonData(fileName, allNotes)
        res.redirect("/")
    }
    static delAll = (req,res)=>{
        deal.writeJsonData(fileName, [])
        res.redirect("/")
    }
    static search = (req,res)=>{
        let allNotes=deal.readJsonData(fileName)
        const searchTerm = req.query.title
        const note = allNotes.find(note=>note.title==searchTerm)
        res.render("single", {
            pageTitle:"Single Data",
            note
        })
    }
}
module.exports = note