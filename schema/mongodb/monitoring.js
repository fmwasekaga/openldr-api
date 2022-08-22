const mongoose = require("mongoose");
const {EventEmitter} = require('events');
const schema_events = new EventEmitter();

const schema = new mongoose.Schema({
    DateTimeStamp: { type: Date, default: Date.now },
    Versionstamp: { type: String, default: '1.0.0.0', maxLength:30 },
    LIMSDateTimeStamp: { type: Date, default: Date.now },
    LIMSVersionstamp: { type: String, default: '1.0.0.0', maxLength:30 },
    RequestID: { type: String, required:true, index: true, maxLength:26 },
    OBRSetID: { type: Number, required:true, index: true },
    OBXSetID: { type: Number, required:true, index: true },
    OBXSubID: { type: Number, required:true, index: true },
    LOINCCode: { type: String, maxLength:30 },
    ORGANISM: { type: String, maxLength:50 },
    SurveillanceCode: { type: String, maxLength:5 },
    SpecimenDateTime: { type: Date },
    LIMSObservationCode: { type: String, maxLength:25 },
    LIMSObservationDesc: { type: String, maxLength:50 },
    LIMSOrganismGroup: { type: String, maxLength:25 },
    CodedValue: { type: String, maxLength:1 },
    ResultSemiquantitive: { type: Number },
    ResultNotConfirmed: { type: Boolean },
    ResistantDrugs: { type: String, maxLength:250 },
    IntermediateDrugs: { type: String, maxLength:250 },
    SensitiveDrugs: { type: String, maxLength:250 },
    MDRCode: { type: String, maxLength:1 }
});

schema.post('save', function(data) {
  schema_events.emit('save', data);     
});
schema.post('update', function(data) {
  schema_events.emit('update', data); 
});
schema.post('updateOne', function(data) {
  schema_events.emit('updateOne', data); 
});
schema.post('updateMany', function(data) {
  schema_events.emit('updateMany', data); 
});
schema.post('replaceOne', function(data) {
  schema_events.emit('replaceOne', data); 
});
schema.post('remove', function(data) {
  schema_events.emit('remove', data); 
});
schema.post('deleteMany', function(data) {
  schema_events.emit('deleteMany', data); 
});
schema.post('deleteOne', function(data) {
  schema_events.emit('deleteOne', data); 
});

schema.set("toJSON", {
  transform: function (doc, ret) {
      delete ret._id;
      delete ret.__v;
  }
});

const model = mongoose.model("monitorings", schema);
model.events = schema_events;
module.exports = model;