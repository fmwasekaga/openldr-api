const mongoose = require("mongoose");
const {EventEmitter} = require('events');
const schema_events = new EventEmitter();

const schema = new mongoose.Schema({
  DateTimeStamp: { type: Date, default: Date.now },
  Versionstamp: { type: String, default: '1.0.0.0', maxLength:30, trim: true },
  LIMSDateTimeStamp: { type: Date, default: Date.now },
  LIMSVersionstamp: { type: String, default: '1.0.0.0', maxLength:30, trim: true },
  RequestID: { type: String, required:true, index: true, maxLength:26, trim: true },
  OBRSetID: { type: Number, required:true, index: true },
  LOINCPanelCode: { type: String, maxLength:10, trim: true },
  LIMSPanelCode: { type: String, maxLength:10, trim: true },
  LIMSPanelDesc: { type: String, maxLength:50, trim: true },
  HL7PriorityCode: { type: String, maxLength:1, trim: true },
  SpecimenDateTime: { type: Date },
  RegisteredDateTime: { type: Date },
  ReceivedDateTime: { type: Date },
  AnalysisDateTime: { type: Date },
  AuthorisedDateTime: { type: Date },
  AdmitAttendDateTime: { type: Date },
  CollectionVolume: { type: mongoose.Schema.Types.Decimal128 },
  RequestingFacilityCode: { type: mongoose.Schema.Types.ObjectId, ref: "facilities" },
  ReceivingFacilityCode: { type: mongoose.Schema.Types.ObjectId, ref: "facilities" },
  LIMSPointOfCareDesc: { type: String, maxLength:50, trim: true },
  RequestTypeCode: { type: String, maxLength:3, trim: true },
  ICD10ClinicalInfoCodes: { type: String, maxLength:50, trim: true },
  ClinicalInfo: { type: String, maxLength:250, trim: true },
  HL7SpecimenSourceCode: { type: String, maxLength:10, trim: true },
  LIMSSpecimenSourceCode: { type: String, maxLength:10, trim: true },
  LIMSSpecimenSourceDesc: { type: String, maxLength:50, trim: true },
  HL7SpecimenSiteCode: { type: String, maxLength:10, trim: true },
  LIMSSpecimenSiteCode: { type: String, maxLength:10, trim: true },
  LIMSSpecimenSiteDesc: { type: String, maxLength:50, trim: true },
  WorkUnits: { type: mongoose.Schema.Types.Decimal128 },
  CostUnits: { type: mongoose.Schema.Types.Decimal128 },
  HL7SectionCode: { type: String, maxLength:3, trim: true },
  HL7ResultStatusCode: { type: String, maxLength:1, trim: true },
  RegisteredBy: { type: String, maxLength:250, trim: true },
  TestedBy: { type: String, maxLength:250, trim: true },
  AuthorisedBy: { type: String, maxLength:250, trim: true },
  OrderingNotes: { type: String, maxLength:250, trim: true },
  EncryptedPatientID: { type: String, maxLength:250, trim: true },
  AgeInYears: { type: Number },
  AgeInDays: { type: Number },
  HL7SexCode: { type: String, maxLength:1, trim: true },
  HL7EthnicGroupCode: { type: String, maxLength:3, trim: true },
  Deceased: { type: Boolean },
  Newborn: { type: Boolean },
  HL7PatientClassCode: { type: String, maxLength:1, trim: true },
  AttendingDoctor: { type: String, maxLength:50, trim: true },
  TestingFacilityCode:  { type: mongoose.Schema.Types.ObjectId, ref: "facilities" },
  ReferringRequestID: { type: String, maxLength:25, trim: true },
  Therapy: { type: String, maxLength:250, trim: true },
  LIMSAnalyzerCode: { type: String, maxLength:10, trim: true },
  TargetTimeDays: { type: Number },
  TargetTimeMins: { type: Number },
  LIMSRejectionCode: { type: String, maxLength:10, trim: true },
  LIMSRejectionDesc: { type: String, maxLength:250, trim: true },
  LIMSFacilityCode: { type: String, maxLength:15, trim: true },
  Repeated: { type: Number },
  LIMSPreReg_RegistrationDateTime: { type: Date },
  LIMSPreReg_ReceivedDateTime: { type: Date },
  LIMSPreReg_RegistrationFacilityCode: { type: String, maxLength:15, trim: true },
  LIMSVendorCode: { type: String, maxLength:4, trim: true }
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

const model = mongoose.model("requests", schema);
model.events = schema_events;
module.exports = model;