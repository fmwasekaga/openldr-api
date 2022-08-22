//load dependencies
const express = require('express');
const dotenv = require("dotenv");
const http = require('http');
const cors = require('cors');
const app = express();

//define constants
const TAG = "openldr-api";

//load libraries
const logger = require("./lib/logger");
const result = require("./lib/result");
const openldr = require("./lib/openldr");
const request = require("./lib/request");
const monitoring = require("./lib/monitoring");

//load environment variables
dotenv.config();

//change timezone
process.env.TZ = 'Africa/Nairobi';

//environment variables
const { 
    PORT,
    VERSION
} = process.env;

//initiate express app
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());

//disable caching
app.disable('etag');

//log all express requests
logger.use(app, TAG);

//setup port
app.set('port', PORT || 3006);

//authenticate requests
const authentication = async ( req, res, next ) => {
    const token = openldr.fetch_token(req);
    
    if (!token) 
        return res.status(403).send("A token is required for authentication");

    try {
        //TODO: authenticate token example below
        //const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        //req.user = decoded;

    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

//TODO:implement later
const default_route = async ( req, res ) => {
    return res.status(200).send(`OpenLDR API v${VERSION}`);
}

//setup routes
/**
 * @swagger
 * /api/openldr/{version}/{returntype}/{action}:
 *   get:
 *     tags: ['openldr - Core API']
 *     summary: Retrieve openldr requests|results|monitoring.
 *     description: Retrieve openldr requests|results|monitoring
 *     parameters:
 *      - in: path
 *        name: version
 *        schema:
 *          type: string
 *        required: true
 *        description: version of api
 *      - in: path
 *        name: returntype
 *        schema:
 *          type: string
 *        required: true
 *        description: content-type api to return, its either xml, json
 *      - in: path
 *        name: action
 *        schema:
 *          type: string
 *        required: true
 *        description: api section to target, its either requests, results or monitoring
*/
app.get("/api/openldr/:version/:returntype/:action", authentication, async (req, res) => {
    const version = req.params.version;
    const returntype = req.params.returntype;
    const action = req.params.action;
    
    if(version.toLowerCase() == "v1"){
        if(openldr.returntypes.includes(returntype.toLowerCase())){
            if(openldr.actions.includes(action.toLowerCase())){
                try{
                    if(action.toLowerCase() == "requests") 
                        await request.fetch(req, res, returntype);
                    else if(action.toLowerCase() == "results") 
                        await result.fetch(req, res, returntype);
                    else if(action.toLowerCase() == "monitoring") 
                        await monitoring.fetch(req, res, returntype);
                    else 
                        return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Unknown request");
                }
                catch (err) {
                    return openldr.toFormatedResponse(res, 501, returntype, 'Error', err.message);
                }
            }
            else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Action only accepting requests|results|monitoring");
        }
        else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Invalid return type");
    }
    else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Unimplemented version");
});

/**
 * @swagger
 * /api/openldr/{version}/{returntype}/{action}:
 *   post:
 *     tags: ['openldr - Core API']
 *     summary: Save openldr requests|results|monitoring.
 *     description: Save openldr requests|results|monitoring
 *     parameters:
 *      - in: path
 *        name: version
 *        schema:
 *          type: string
 *        required: true
 *        description: version of api
 *      - in: path
 *        name: returntype
 *        schema:
 *          type: string
 *        required: true
 *        description: content-type api to return, its either xml, json
 *      - in: path
 *        name: action
 *        schema:
 *          type: string
 *        required: true
 *        description: api section to target, its either requests, results or monitoring
*/
app.post("/api/openldr/:version/:returntype/:action", authentication, async (req, res) => {
    const version = req.params.version;
    const returntype = req.params.returntype;
    const action = req.params.action;

    if(version.toLowerCase() == "v1"){
        if(openldr.returntypes.includes(returntype.toLowerCase())){
            if(openldr.actions.includes(action.toLowerCase())){
                try{
                    if(action.toLowerCase() == "requests") 
                        await request.save(req, res, returntype);
                    else if(action.toLowerCase() == "results") 
                        await result.save(req, res, returntype);
                    else if(action.toLowerCase() == "monitoring") 
                        await monitoring.save(req, res, returntype);
                    else 
                        return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Unknown request");
                }
                catch (err) {
                    return openldr.toFormatedResponse(res, 501, returntype, 'Error', err.message);
                }
            }
            else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Action only accepting requests|results|monitoring");
        }
        else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Invalid return type");
    }
    else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Unimplemented version");
});

/**
 * @swagger
 * /api/openldr/{version}/{returntype}/{action}:
 *   put:
 *     tags: ['openldr - Core API']
 *     summary: Update openldr requests|results|monitoring.
 *     description: Update openldr requests|results|monitoring
 *     parameters:
 *      - in: path
 *        name: version
 *        schema:
 *          type: string
 *        required: true
 *        description: version of api
 *      - in: path
 *        name: returntype
 *        schema:
 *          type: string
 *        required: true
 *        description: content-type api to return, its either xml, json
 *      - in: path
 *        name: action
 *        schema:
 *          type: string
 *        required: true
 *        description: api section to target, its either requests, results or monitoring
*/
app.put("/api/openldr/:version/:returntype/:action", authentication, async (req, res) => {
    const version = req.params.version;
    const returntype = req.params.returntype;
    const action = req.params.action;

    if(version.toLowerCase() == "v1"){
        if(openldr.returntypes.includes(returntype.toLowerCase())){
            if(openldr.actions.includes(action.toLowerCase())){
                try{
                    if(action.toLowerCase() == "requests") 
                        await request.update(req, res, returntype);
                    else if(action.toLowerCase() == "results") 
                        await result.update(req, res, returntype);
                    else if(action.toLowerCase() == "monitoring") 
                        await monitoring.update(req, res, returntype);
                    else 
                        return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Unknown request");
                }
                catch (err) {
                    return openldr.toFormatedResponse(res, 501, returntype, 'Error', err.message);
                }
            }
            else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Action only accepting requests|results|monitoring");
        }
        else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Invalid return type");
    }
    else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Unimplemented version");
});

/**
 * @swagger
 * /api/openldr/{version}/{returntype}/{action}:
 *   delete:
 *     tags: ['openldr - Core API']
 *     summary: Delete openldr requests|results|monitoring.
 *     description: Delete openldr requests|results|monitoring
 *     parameters:
 *      - in: path
 *        name: version
 *        schema:
 *          type: string
 *        required: true
 *        description: version of api
 *      - in: path
 *        name: returntype
 *        schema:
 *          type: string
 *        required: true
 *        description: content-type api to return, its either xml, json
 *      - in: path
 *        name: action
 *        schema:
 *          type: string
 *        required: true
 *        description: api section to target, its either requests, results or monitoring
*/
app.delete("/api/openldr/:version/:returntype/:action", authentication, async (req, res) => {
    const version = req.params.version;
    const returntype = req.params.returntype;
    const action = req.params.action;

    if(version.toLowerCase() == "v1"){
        if(openldr.returntypes.includes(returntype.toLowerCase())){
            if(openldr.actions.includes(action.toLowerCase())){
                try{
                    if(action.toLowerCase() == "requests") 
                        await request.delete(req, res, returntype);
                    else if(action.toLowerCase() == "results") 
                        await result.delete(req, res, returntype);
                    else if(action.toLowerCase() == "monitoring") 
                        await monitoring.delete(req, res, returntype);
                    else 
                        return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Unknown request");
                }
                catch (err) {
                    return openldr.toFormatedResponse(res, 501, returntype, 'Error', err.message);
                }
            }
            else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Action only accepting requests|results|monitoring");
        }
        else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Invalid return type");
    }
    else return openldr.toFormatedResponse(res, 501, returntype, 'Error', "Unimplemented version");
});

//404 not found
app.use(function(req, res, next) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
        res.send("Not found!")
      //res.render('404', { url: req.url });
        return;
    }
  
    // respond with json
    if (req.accepts('json')) {
        res.json({ error: 'Not found' });
        return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
});

//start http server
http.createServer(app).listen(app.get('port'), function(){
    logger.print_log(TAG, 'OpenLDR', `API version`, VERSION);
    logger.print_log(TAG, 'OpenLDR', `Server listening on port`, app.get('port'));
});