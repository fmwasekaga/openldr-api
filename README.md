Open Laboratory Data Repository (OpenLDR) - API
======

![](/public/img/version.svg) ![](/public/img/license.svg) ![](/public/img/database_platforms.svg)

The OpenLDR provides a communication layer for a single storage location for the country-wide electronic data regarding laboratory 
requests and results. This allows laboratory systems managers to easily view relevant data on the entire 
country, different geographic levels or detailed data down to the lab and section. A major design goal of 
the OpenLDR is to accommodate data from laboratories which use disparate Laboratory Information Management 
Systems (LIMS). The OpenLDR defines a simple, easy to understand data model in order to simplify the 
merging of data, data analysis and the creation of report templates. The OpenLDR design specification can 
be implemented utilizing any relational database. While the design is “open” the data is not and is 
expected to be securely hosted by the aggregating organization (e.g. Ministry of Health).

Setting Up Environment
-----
Before you get started, you’ll need a couple of things:

Runtime Environment
- [x]  Node.js version 8.0 or higher

At Least One Database Engine
- [x]  Microsoft SQL
- [x]  MongoDB
- [ ]  MySQL
- [ ]  Postgres
- [ ]  SQLite

-----

Configuration
==============
Before the tool can provide means to interact with database engines and users, a `.env` file is required to set environment variables. Do not add the `.env` file to source control. The following is an example of a `.env` file.

```
PORT=3006
VERSION=0.0.1

;MONGODB
DB_URI=mongodb://127.0.0.1:27017/openldr
DB_DRIVER=mongodb
```

## Install

Download the source from [here](https://github.com/fmwasekaga/openldr-api) or git clone like

`git clone https://github.com/fmwasekaga/openldr-api.git`

Navigate to `openldr-api` directory and download the dependencies required using npm like

`npm i`

There are several ways of starting the tool, the prefered methods are

`npm run start`

If you used the git clone method, you can fetch updates like

`git pull origin main`

## Documentation

For full documentation about OpenLDR, visit [openldr.org](http://openldr.org/)

## Community & Support

- [Community Forum](https://github.com/fmwasekaga/openldr-api/discussions). Best for: help with building, discussion about best practices.
- [GitHub Issues](https://github.com/fmwasekaga/openldr-api/issues). Best for: bugs and errors you encounter.

## Status

- [x] Public Alpha: Testing with a closed set of parties
- [ ] Public Beta: Stable enough for most non-enterprise use-cases
- [ ] Public: Production-ready

We are currently in Public Alpha. Watch "releases" of this repo to get notified of major updates.
