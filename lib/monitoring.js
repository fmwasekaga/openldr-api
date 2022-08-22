//load dependencies/libraries
const mssql = require('mssql');
const express = require('express');
const openldr = require('./openldr');

const logger = require("./logger");
const db_helper = require('./db_helper');
const db_parser = require('./sql-parse/parser');

//define constants
const TAG = "openldr-api";

/**
 * Fetch data
 * @param  {express.Request}    req        HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
 * @param  {express.Response}   res        HTTP response that is returned when it gets an HTTP request.
 * @param  {String}             returntype Content type returned, only xml and json are supported, default is json.
 */
 const _fetch = async (req, res, returntype) => {
    const DB_URI = process.env.DB_URI;
    const DB_DRIVER = process.env.DB_DRIVER;
    const constructURL = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    const query = db_helper.get_query(constructURL, DB_DRIVER);
    
    let list = [];

    if(DB_DRIVER == "mongodb"){
        try{
            const parse_result = new db_parser().parse(`SELECT * FROM t where ${query}`);
            const mongo_query = db_helper.ast_to_mongo(parse_result.where);
            
            const con = await openldr.get_connection(DB_URI);
            const model = await openldr.get_model(con, 'monitorings');
            list = await model.find(mongo_query,{'_id': 0});
        }
        catch(ex){ logger.print_error(TAG, 'Monitoring', ex.message); }
    }
    else if(DB_DRIVER == "mssql"){
        let sql  = `SELECT`;
            sql += `  [DateTimeStamp]`;
            sql += ` ,[Versionstamp]`;
            sql += ` ,[LIMSDateTimeStamp]`;
            sql += ` ,[LIMSVersionstamp]`;
            sql += ` ,[RequestID]`;
            sql += ` ,[OBRSetID]`;
            sql += ` ,[OBXSetID]`;
            sql += ` ,[OBXSubID]`;
            sql += ` ,[LOINCCode]`;
            sql += ` ,[ORGANISM]`;
            sql += ` ,[SurveillanceCode]`;
            sql += ` ,[SpecimenDateTime]`;
            sql += ` ,[LIMSObservationCode]`;
            sql += ` ,[LIMSObservationDesc]`;
            sql += ` ,[LIMSOrganismGroup]`;
            sql += ` ,[CodedValue]`;
            sql += ` ,[ResultSemiquantitive]`;
            sql += ` ,[ResultNotConfirmed]`;
            sql += ` ,[ResistantDrugs]`;
            sql += ` ,[IntermediateDrugs]`;
            sql += ` ,[SensitiveDrugs]`;
            sql += ` ,[MDRCode]`;
            sql += ` FROM [dbo].[Monitoring] `;

        let pool = await mssql.connect(process.env.DB_URI);
        list = (await pool.request()
                                .query(sql)).recordset;
        pool.close();
    }

    return openldr.toFormatedResponse(res, 200, returntype, 'Successful', list);
}

/**
 * Save data
 * @param  {express.Request}    req        HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
 * @param  {express.Response}   res        HTTP response that is returned when it gets an HTTP request.
 * @param  {String}             returntype Content type returned, only xml and json are supported, default is json.
 */
const _save = async (req, res, returntype) => {
    const DB_DRIVER = process.env.DB_DRIVER;
    const structures = openldr.normalise_struncture(req.body, "requests");
    if(!openldr.invalid_structure_response(req, res, returntype, structures)){
        const valid_structures = structures.filter(f=> f.valid != null);
        const valids = valid_structures.map(f=> f.valid );

        if(DB_DRIVER == "mongodb"){

        }
        else if(DB_DRIVER == "mssql"){
    
        }

        return openldr.toFormatedResponse(res, 200, returntype, 'Successful', 'saved');
    }
}

/**
 * Update data
 * @param  {express.Request}    req        HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
 * @param  {express.Response}   res        HTTP response that is returned when it gets an HTTP request.
 * @param  {String}             returntype Content type returned, only xml and json are supported, default is json.
 */
const _update = async (req, res, returntype) => {
    const DB_DRIVER = process.env.DB_DRIVER;
    const structures = normalise_struncture(req.body, "requests");
    if(!openldr.invalid_structure_response(req, res, returntype, structures)){
        const valid_structures = structures.filter(f=> f.valid != null);
        const valids = valid_structures.map(f=> f.valid );

        return openldr.toFormatedResponse(res, 200, returntype, 'Successful', 'updated');
    }
}

/**
 * Delete data
 * @param  {express.Request}    req        HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
 * @param  {express.Response}   res        HTTP response that is returned when it gets an HTTP request.
 * @param  {String}             returntype Content type returned, only xml and json are supported, default is json.
 */
const _delete = async (req, res, returntype) => {
    const DB_DRIVER = process.env.DB_DRIVER;
    //const query = openldr.get_query(req, res, returntype);

    return openldr.toFormatedResponse(res, 200, returntype, 'Successful', 'deleted');
}

//export functions
module.exports = {
    fetch:_fetch, 
    save:_save, 
    update:_update, 
    delete:_delete
};