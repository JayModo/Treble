import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _instrumentService from "../services/InstrumentServices";
import { runInNewContext } from "vm";



export default class Instrumentcontroller {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      // .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async getAll(req, res, next) {
    try {
      let data = await _instrumentService.find()
      return res.send(data)
    } catch (err) {
      next(err)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await _instrumentService.findOne({
        _id: req.params.id
      });
      return res.send(data)
    } catch (err) {
      next(err)
    }
  }

  async create(req, res, next) {
    try {
      req.body.user = req.session.uid;
      let data = await _instrumentService.create(req.body);
      return res.status(201).send(data);
    } catch (err) {
      next(err)
    }
  }
  async delete(req, res, next) {
    try {
      await _instrumentService.findOneAndRemove({
        _id: req.params.id,
        user: req.session.uid
      });
      return res.send("it is deleted!")
    } catch (err) {
      next(err)
    }
  }


}