const noteModel = require("../../db/models/note.model");
class note {
  static add = (req, res) => {
    res.render("add", {
      pageTitle: "Add Data",
    });
  };

  static addLogic = async (req, res) => {
    try {
      const data = new noteModel(req.query);
      await data.save();
      res.redirect("/");
    } catch (e) {
      res.send(e);
    }
  };

  static addPost = (req, res) => {
    res.render("addPost", {
      pageTitle: "Add Data",
    });
  };

  static addPostLogic = (req, res) => {
    res.redirect("/");
  };

  static all = async (req, res) => {
    const allUsers = await noteModel.find();
    res.render("all", {
      pageTitle: "All Data",
      allUsers,
      hasData: allUsers.length,
    });
  };

  static edit = async (req, res) => {
    const id = req.params.id;
    const note = await noteModel.findById(id);
    res.render("edit", {
      pageTitle: "Edit Data Data",
      note,
    });
  };
  static editLogic = async (req, res) => {
    const id = req.params.id;
    const note = await noteModel.findByIdAndUpdate(id, req.query);
    // const note = await noteModel.findByIdAndUpdate(req.params.id, req.query);
    res.redirect(`/single/${id}`);
  };
  static single = async (req, res) => {
    const id = req.params.id;

    const note = await noteModel.findById(id);
    res.render("single", {
      pageTitle: "Single Data",
      note,
    });
  };
  static del = async (req, res) => {
    // let allUsers=deal.readJsonData(fileName)
    const id = req.params.id;
    // allUsers = allUsers.filter((u) => u.id != id);
    // deal.writeJsonData(fileName, allUsers);
    const note = await noteModel.findByIdAndDelete(id);
    res.redirect("/");
  };
  static delAll = async (req, res) => {
    // deal.writeJsonData(fileName, [])
    await noteModel.deleteMany();
    res.redirect("/");
  };
  // static search = (req, res) => {
  //   let allNotes = deal.readJsonData(fileName);
  //   const searchTerm = req.query.title;

  //   // returns the first element
  //   const note = allNotes.find((note) => note.title.includes(searchTerm));

  //   //  this method i found it in while searching but couldn't understood the some() method
  //   // const note = allNotes.filter((noote) => {
  //   //     const { title, content } = noote;
  //   //     const searchTerms = [title, content];
  //   //     return searchTerms.some(term => term.includes(searchTerm));
  //   //   })

  //   // return many elements but i don't know how to display them all in hbs
  //   // const note = allNotes.filter(n => n.title.includes(searchTerm))
  //   res.render("single", {
  //     pageTitle: "Single Data",
  //     note,
  //   });
  // };
}
module.exports = note;
