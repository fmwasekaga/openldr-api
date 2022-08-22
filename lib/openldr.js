//load dependencies/libraries
const xml2js = require('xml2js'); 
const express = require('express');
const mongoose = require("mongoose");

//define constants
const actions = ["requests","results","monitoring"];
const returntypes = ["json","xml"];

const request_structure = ['datetimestamp' ,'versionstamp' ,'limsdatetimestamp' ,'limsversionstamp' ,'requestid' ,'obrsetid' ,'loincpanelcode' ,'limspanelcode' ,'limspaneldesc' ,'hl7prioritycode' ,'specimendatetime' ,'registereddatetime' ,'receiveddatetime' ,'analysisdatetime' ,'authoriseddatetime' ,'admitattenddatetime' ,'collectionvolume' ,'requestingfacilitycode' ,'receivingfacilitycode' ,'limspointofcaredesc' ,'requesttypecode' ,'icd10clinicalinfocodes' ,'clinicalinfo' ,'hl7specimensourcecode' ,'limsspecimensourcecode' ,'limsspecimensourcedesc' ,'hl7specimensitecode' ,'limsspecimensitecode' ,'limsspecimensitedesc' ,'workunits' ,'costunits' ,'hl7sectioncode' ,'hl7resultstatuscode' ,'registeredby' ,'testedby' ,'authorisedby' ,'orderingnotes' ,'encryptedpatientid' ,'ageinyears' ,'ageindays' ,'hl7sexcode' ,'hl7ethnicgroupcode' ,'deceased' ,'newborn' ,'hl7patientclasscode' ,'attendingdoctor' ,'testingfacilitycode' ,'referringrequestid' ,'therapy' ,'limsanalyzercode' ,'targettimedays' ,'targettimemins' ,'limsrejectioncode' ,'limsrejectiondesc' ,'limsfacilitycode' ,'repeated' ,'limsprereg_registrationdatetime' ,'limsprereg_receiveddatetime' ,'limsprereg_registrationfacilitycode' ,'limsvendorcode', 'results', 'monitoring'];
const result_structure = ['datetimestamp' ,'versionstamp' ,'limsdatetimestamp' ,'limsversionstamp' ,'requestid' ,'obrsetid' ,'obxsetid' ,'obxsubid' ,'loinccode' ,'hl7resulttypecode' ,'sivalue' ,'siunits' ,'silorange' ,'sihirange' ,'hl7abnormalflagcodes' ,'datetimevalue' ,'codedvalue' ,'resultsemiquantitive' ,'note' ,'limsobservationcode' ,'limsobservationdesc' ,'limsrptresult' ,'limsrptunits' ,'limsrptflag' ,'limsrptrange' ,'limscodedvalue' ,'workunits' ,'costunits'];
const monitoring_structure = ['datetimestamp' ,'versionstamp' ,'limsdatetimestamp' ,'limsversionstamp' ,'requestid' ,'obrsetid' ,'obxsetid' ,'obxsubid' ,'loinccode' ,'organism' ,'surveillancecode' ,'specimendatetime' ,'limsobservationcode' ,'limsobservationdesc' ,'limsorganismgroup' ,'codedvalue' ,'resultsemiquantitive' ,'resultnotconfirmed' ,'resistantdrugs' ,'intermediatedrugs' ,'sensitivedrugs' ,'mdrcode'];


/**
 * Convert object to json with status and data fields
 * @param  {String} status Status of object, only 'error' and 'successful' are supported
 * @param  {Object} data Object to be parsed.
 */
const toJson = (status, data) => {
    return {
        status : status.toLowerCase(),
        data : data
    }
};

/**
 * Convert object to xml with status and data fields
 * @param  {String} status Status of object, only 'error' and 'successful' are supported
 * @param  {Object} data Object to be parsed.
 */
const toXML = (status, data) => {
    const json_string = JSON.stringify(toJson(status, data))
                            .replace(/\\u0006/g, "");
                            //.replace(/[\\u0000-\\u0008\\u000A-\\u001F\\u0100-\\uFFFF]/mg, "");
   
    const builder = new xml2js.Builder({
        headless: true,
        allowSurrogateChars: true,
        rootName: 'Xml',
        cdata: true
       });
    return builder.buildObject(JSON.parse(json_string));
};

/**
 * Convert object to xml with status and data fields
 * @param  {express.Response}   res         HTTP response that is returned when it gets an HTTP request.
 * @param  {Number}             statuscode  HTTP response status code
 * @param  {String}             returntype  Content type returned, only xml and json are supported, default is json.
 * @param  {String}             status      Status of object, only 'error' and 'successful' are supported
 * @param  {Object}             data        Object to be parsed.
 */
const toFormatedResponse = (res, statuscode, returntype, status, data) => {
    setContentType(res, returntype);
    if(returntype == "json")res.status(statuscode).send(toJson(status, data));
    else if(returntype == "xml")res.status(statuscode).send(toXML(status, data));
    else res.status(501).json(toJson("Error", "Invalid return type"));
};

/**
 * Set content-type in the response header
 * @param  {express.Response}   res        HTTP response that is returned when it gets an HTTP request.
 * @param  {String}             returntype Content type returned, only xml and json are supported, default is json.
 */
const setContentType = (res, returntype) => {
    if(returntype == "json") res.set('Content-Type', 'application/json');
    else if(returntype == "xml"){ res.set('Content-Type', 'application/xml'); }
};

/**
 * vValidate the stucture
 * @param  {express.Response}   res        HTTP response that is returned when it gets an HTTP request.
 * @param  {String}             returntype Content type returned, only xml and json are supported, default is json.
 */
const normalise_struncture = (structure, action) =>{
    let list = [];
    let structures = structure;
    if(!Array.isArray(structure))structures = [structure];
    
    if(action == "requests"){
        structures.forEach((_structure)=>{
            let valid_values = null;
            let invalid_values = null;

            for (const [key, value] of Object.entries(_structure)) {
                if(request_structure.includes(key.toLowerCase())) {
                    if(valid_values == null) valid_values = {};
                    valid_values[key] = value;
                }
                else {
                    if(invalid_values == null) invalid_values = {};
                    invalid_values[key] = value;
                }

                if(key.toLowerCase() == "results"){
                    value.forEach((v)=>{
                        for (const [_key, _value] of Object.entries(v)) {
                            if(result_structure.includes(_key.toLowerCase())) {
                                if(valid_values == null) valid_values = {};
                                if(valid_values[key] == null) valid_values[key] = {};
                                valid_values[key][_key] = _value;
                            }
                            else {
                                if(invalid_values == null) invalid_values = {};
                                if(invalid_values[key] == null) invalid_values[key] = {};
                                invalid_values[key][_key] = _value;
                            }
                        }
                    });
                }

                if(key.toLowerCase() == "monitoring"){
                    value.forEach((v)=>{
                        for (const [_key, _value] of Object.entries(v)) {
                            if(monitoring_structure.includes(_key.toLowerCase())) {
                                if(valid_values == null) valid_values = {};
                                if(valid_values[key] == null) valid_values[key] = {};
                                valid_values[key][_key] = _value;
                            }
                            else {
                                if(invalid_values == null) invalid_values = {};
                                if(invalid_values[key] == null) invalid_values[key] = {};
                                invalid_values[key][_key] = _value;
                            }
                        }
                    });
                }
            }

            list.push({valid:valid_values, invalid:invalid_values });
        });
    }
    else if(action == "results"){
        structures.forEach((_structure)=>{
            let valid_values = null;
            let invalid_values = null;

            for (const [key, value] of Object.entries(_structure)) {
                if(result_structure.includes(key.toLowerCase())) {
                    if(valid_values == null) valid_values = {};
                    valid_values[key] = value;
                }
                else {
                    if(invalid_values == null) invalid_values = {};
                    invalid_values[key] = value;
                }
            }

            list.push({valid:valid_values, invalid:invalid_values });
        });
    }
    else if(action == "monitoring"){
        structures.forEach((_structure)=>{
            let valid_values = null;
            let invalid_values = null;

            for (const [key, value] of Object.entries(_structure)) {
                if(monitoring_structure.includes(key.toLowerCase())) {
                    if(valid_values == null) valid_values = {};
                    valid_values[key] = value;
                }
                else {
                    if(invalid_values == null) invalid_values = {};
                    invalid_values[key] = value;
                }
            }
        });

        list.push({valid:valid_values, invalid:invalid_values });
    }

    return list;
};

/**
 * Validate the stucture with response
 * @param  {express.Response}   res        HTTP response that is returned when it gets an HTTP request.
 * @param  {String}             returntype Content type returned, only xml and json are supported, default is json.
 * @param  {Array}              structures normalized structured list.
 */
const invalid_structure_response = (res, returntype, structures) => {
    const has_invalid = structures.some(f=> f.invalid != null);
    if(has_invalid){
        const responses = [];
        
        structures.forEach((structure, index)=>{
            if(structure.invalid != null){
                const info = {};

                for (const [key, value] of Object.entries(structure.valid)) {
                    if(key.toLowerCase() == "requestid" ||
                       key.toLowerCase() == "obrsetid" ||
                       key.toLowerCase() == "obxsetid" ||
                       key.toLowerCase() == "obxsubid")info[key.toLowerCase()] = value;
                }

                responses.push({index:index, info:info, fields:structure.invalid});
            }
        });
        
        return toFormatedResponse(res, 200, returntype, "Invalid Data Structure", responses)

    }
    
    return has_invalid;
};

/**
 * Get/Create mongodb connection
 * @param  {String} uri mongodb connection string
 */
const get_connection = async (uri) =>{
    try {        
        return await mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    } 
    catch (error) { throw error; }
}

/**
 * validate the stucture
 * @param  {mongoose.Connection}    con Connection instance.
 * @param  {String}                 doc Model name.
 */
const get_model = async (con, doc) =>{
    try {
        try {
            const schema = new mongoose.Schema({},{ strict:false });
            return con.model(doc, schema);
        }
        catch(ex){ return con.model(doc); }
    } 
    catch (error) { throw error; }
}

/**
 * fetch api token from header
 * @param  {express.Request} req HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
 */
const fetch_token = (req) => {
    const authHeader = String(req.headers['authorization'] || '');

    if (authHeader.startsWith('Bearer ')) {
      return authHeader.substring(7, authHeader.length);
    }
    else {
      return req.body.token || req.query.token || req.headers["x-access-token"];
    }
  };

//export functions
module.exports = {
    toJson:toJson, 
    toXML:toXML,
    setContentType:setContentType,
    toFormatedResponse:toFormatedResponse,
    normalise_struncture:normalise_struncture,
    invalid_structure_response:invalid_structure_response,
    get_connection:get_connection,
    get_model:get_model,
    fetch_token:fetch_token,
    actions:actions,
    returntypes:returntypes
};