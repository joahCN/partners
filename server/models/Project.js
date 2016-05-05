/**
 * Created by Administrator on 2016/4/23.
 */
var mongoose =require("mongoose");
var Profile = require("./Profile");
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    title: String,
    desc: String,
    host: {type: Schema.Types.ObjectId, ref: "Profile"}
});

var model = mongoose.model('Project', ProjectSchema);

module.exports = {
    schema: ProjectSchema,
    model: model
};

