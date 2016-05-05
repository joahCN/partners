/**
 * Created by Administrator on 2016/4/23.
 */
var mongoose =require("mongoose");
var Schema = mongoose.Schema;

var ProfileSchema = Schema({
    image: String,
    name: String,
    desc: String
});

var model = mongoose.model('Profile', ProfileSchema);

module.exports = {
    schema: ProfileSchema,
    model: model
};