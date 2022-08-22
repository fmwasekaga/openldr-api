const mongoose = require("mongoose");
const {EventEmitter} = require('events');
const schema_events = new EventEmitter();

const schema = new mongoose.Schema({
    DateTimeStamp: { type: Date, default: Date.now },
    Versionstamp: { type: String, default: '1.0.0.0', maxLength:30 },
    LIMSDateTimeStamp: { type: Date, default: Date.now },
    LIMSVersionStamp: { type: String, default: '1.0.0.0', maxLength:30 },
    RequestID: { type: String, required:true, index: true, maxLength:26 },
    OBRSetID: { type: Number, required:true, default: 0, index: true },
    OBXSetID: { type: Number, required:true, default: 0 },
    OBXSubID: { type: Number, required:true, default: 0 },
    LOINCCode: { type: String, maxLength:30 },
    HL7ResultTypeCode: { type: String, maxLength:2 },
    SIValue: { type: mongoose.Schema.Types.Decimal128 },
    SIUnits: { type: String, maxLength:25 },
    SILoRange: { type: mongoose.Schema.Types.Decimal128 },
    SIHiRange: { type: mongoose.Schema.Types.Decimal128 },
    HL7AbnormalFlagCodes: { type: String, maxLength:5 },
    DateTimeValue: { type: Date },
    CodedValue: { type: String, maxLength:1 },
    ResultSemiquantitive: { type: Number },
    Note: { type: Boolean },
    LIMSObservationCode: { type: String, maxLength:10 },
    LIMSObservationDesc: { type: String, maxLength:50 },
    LIMSRptResult: { type: String, maxLength:80 },
    LIMSRptUnits: { type: String, maxLength:25 },
    LIMSRptFlag: { type: String, maxLength:25 },
    LIMSRptRange: { type: String, maxLength:25 },
    LIMSCodedValue: { type: String, maxLength:5 },
    WorkUnits: { type: mongoose.Schema.Types.Decimal128 },
    CostUnits: { type: mongoose.Schema.Types.Decimal128 }
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

const model = mongoose.model("results", schema);
model.events = schema_events;
module.exports = model;