function fetchObject(value){
	if(value == "Request"){
		return {
			"DateTimeStamp": "2017-01-02 08:00:00",
			"Versionstamp": "1.0.0",
			"LIMSDateTimeStamp": "2017-01-02 08:00:00",
			"LIMSVersionstamp": "01.00.00.000",
			"RequestID": "TZOPENLDR-123456789",
			"OBRSetID": "1",
			"LOINCPanelCode": "",
			"LIMSPanelCode": "HIVVL",
			"LIMSPanelDesc": "HIV VIRAL LOAD",
			"HL7PriorityCode": "R",
			"SpecimenDateTime": "2017-01-01 08:00:00",
			"ReceivedDateTime": "2017-01-02 08:00:00",
			"RegisteredDateTime": "2017-01-03 08:00:00",	
			"AnalysisDateTime": "2017-01-04 08:00:00",
			"AuthorisedDateTime": "2017-01-05 08:00:00",
			"AdmitAttendDateTime": "2017-01-01 08:00:00",
			"CollectionVolume": "0.0",
			"RequestingFacilityCode": "DAFAD",
			"ReceivingFacilityCode": "100438-1",
			"LIMSPointOfCareDesc": "",
			"RequestTypeCode": "",
			"ICD10ClinicalInfoCodes": "",
			"ClinicalInfo": "",
			"HL7SpecimenSourceCode": "",
			"LIMSSpecimenSourceCode": "PLASM",
			"LIMSSpecimenSourceDesc": "Plasma",
			"HL7SpecimenSiteCode": "",
			"LIMSSpecimenSiteCode": "",
			"LIMSSpecimenSiteDesc": "",
			"WorkUnits": "0.0",
			"CostUnits": "0.0",
			"HL7SectionCode": "",
			"HL7ResultStatusCode": "",
			"RegisteredBy": "JOHN",
			"TestedBy": "DOE",
			"AuthorisedBy": "SMITH",
			"OrderingNotes": "",
			"EncryptedPatientID": "1234567890",
			"AgeInYears": "21",
			"AgeInDays": "7946",
			"HL7SexCode": "F",
			"HL7EthnicGroupCode": "",
			"Deceased": "false",
			"Newborn": "false",
			"HL7PatientClassCode": "",
			"AttendingDoctor": "",
			"TestingFacilityCode": "",
			"ReferringRequestID": "",
			"Therapy": "",
			"LIMSAnalyzerCode": "",
			"TargetTimeDays": "0",
			"TargetTimeMins": "0",
			"LIMSRejectionCode": "",
			"LIMSRejectionDesc": "",
			"LIMSFacilityCode": "PEPAA",
			"Repeated": "0"
		};
	}
	else if(value == "Request with results/monitoring"){
		return {
			"DateTimeStamp": "2017-01-02 08:00:00",
			"Versionstamp": "1.0.0",
			"LIMSDateTimeStamp": "2017-01-02 08:00:00",
			"LIMSVersionstamp": "01.00.00.000",
			"RequestID": "TZOPENLDR-123456789",
			"OBRSetID": "1",
			"LOINCPanelCode": "",
			"LIMSPanelCode": "HIVVL",
			"LIMSPanelDesc": "HIV VIRAL LOAD",
			"HL7PriorityCode": "R",
			"SpecimenDateTime": "2017-01-01 08:00:00",
			"ReceivedDateTime": "2017-01-02 08:00:00",
			"RegisteredDateTime": "2017-01-03 08:00:00",	
			"AnalysisDateTime": "2017-01-04 08:00:00",
			"AuthorisedDateTime": "2017-01-05 08:00:00",
			"AdmitAttendDateTime": "2017-01-01 08:00:00",
			"CollectionVolume": "0.0",
			"RequestingFacilityCode": "DAFAD",
			"ReceivingFacilityCode": "100438-1",
			"LIMSPointOfCareDesc": "",
			"RequestTypeCode": "",
			"ICD10ClinicalInfoCodes": "",
			"ClinicalInfo": "",
			"HL7SpecimenSourceCode": "",
			"LIMSSpecimenSourceCode": "PLASM",
			"LIMSSpecimenSourceDesc": "Plasma",
			"HL7SpecimenSiteCode": "",
			"LIMSSpecimenSiteCode": "",
			"LIMSSpecimenSiteDesc": "",
			"WorkUnits": "0.0",
			"CostUnits": "0.0",
			"HL7SectionCode": "",
			"HL7ResultStatusCode": "",
			"RegisteredBy": "JOHN",
			"TestedBy": "DOE",
			"AuthorisedBy": "SMITH",
			"OrderingNotes": "",
			"EncryptedPatientID": "1234567890",
			"AgeInYears": "21",
			"AgeInDays": "7946",
			"HL7SexCode": "F",
			"HL7EthnicGroupCode": "",
			"Deceased": "false",
			"Newborn": "false",
			"HL7PatientClassCode": "",
			"AttendingDoctor": "",
			"TestingFacilityCode": "",
			"ReferringRequestID": "",
			"Therapy": "",
			"LIMSAnalyzerCode": "",
			"TargetTimeDays": "0",
			"TargetTimeMins": "0",
			"LIMSRejectionCode": "",
			"LIMSRejectionDesc": "",
			"LIMSFacilityCode": "PEPAA",
			"Repeated": "0",	
			"Results":[
				{
					"DateTimeStamp": "2017-01-04 08:00:00",
					"Versionstamp": "1.0.0",
					"LIMSDateTimeStamp": "2017-01-04 08:00:00",
					"LIMSVersionStamp": "01.00.00.000",
					"RequestID": "TZOPENLDR-123456789",
					"OBRSetID": "1",
					"OBXSetID": "1",
					"OBXSubID": "0",
					"LOINCCode": "",
					"HL7ResultTypeCode": "",
					"SIValue": "0.0",
					"SIUnits": "",
					"SILoRange": "0.0",
					"SIHiRange": "0.0",
					"HL7AbnormalFlagCodes": "",
					"DateTimeValue": "",
					"CodedValue": "",
					"ResultSemiquantitive": "0",
					"Note": "false",
					"LIMSObservationCode": "1236",
					"LIMSObservationDesc": "SG",
					"LIMSRptResult": "Not Detected DBS",
					"LIMSRptUnits": "",
					"LIMSRptFlag": "",
					"LIMSRptRange": "",
					"LIMSCodedValue": "",
					"WorkUnits": "0.0",
					"CostUnits": "0.0"
				},
				{
					"DateTimeStamp": "2017-01-04 08:00:00",
					"Versionstamp": "1.0.0",
					"LIMSDateTimeStamp": "2017-01-04 08:00:00",
					"LIMSVersionStamp": "01.00.00.000",
					"RequestID": "TZOPENLDR-123456789",
					"OBRSetID": "1",
					"OBXSetID": "1",
					"OBXSubID": "0",
					"LOINCCode": "",
					"HL7ResultTypeCode": "",
					"SIValue": "0.0",
					"SIUnits": "",
					"SILoRange": "0.0",
					"SIHiRange": "0.0",
					"HL7AbnormalFlagCodes": "",
					"DateTimeValue": "",
					"CodedValue": "",
					"ResultSemiquantitive": "0",
					"Note": "false",
					"LIMSObservationCode": "1236",
					"LIMSObservationDesc": "SG",
					"LIMSRptResult": "Not Detected DBS",
					"LIMSRptUnits": "",
					"LIMSRptFlag": "",
					"LIMSRptRange": "",
					"LIMSCodedValue": "",
					"WorkUnits": "0.0",
					"CostUnits": "0.0"
				}
			],	
			"Monitoring":[
				{
					"DateTimeStamp": "2017-01-04 08:00:00",
					"Versionstamp": "1.0.0",
					"LIMSDateTimeStamp": "2017-01-04 08:00:00",
					"LIMSVersionstamp": "01.00.00.000",
					"RequestID": "TZOPENLDR-123456789",
					"OBRSetID": "1",
					"OBXSetID": "1",
					"OBXSubID": "0",
					"LOINCCode": "",
					"ORGANISM": "",
					"SurveillanceCode": "MAL01",
					"SpecimenDateTime": "2017-01-01 08:00:00",
					"LIMSObservationCode": "MAL",
					"LIMSObservationDesc": "Malaria",
					"LIMSOrganismGroup": "",
					"CodedValue": "",
					"ResultSemiquantitive": "0",
					"ResultNotConfirmed": "0",
					"ResistantDrugs": "",
					"IntermediateDrugs": "",
					"SensitiveDrugs": "",
					"MDRCode": ""
				}
			]
		};
	}
	else if(value == "Result"){
		return {
			"DateTimeStamp": "2017-01-04 08:00:00",
			"Versionstamp": "1.0.0",
			"LIMSDateTimeStamp": "2017-01-04 08:00:00",
			"LIMSVersionStamp": "01.00.00.000",
			"RequestID": "TZOPENLDR-123456789",
			"OBRSetID": "1",
			"OBXSetID": "1",
			"OBXSubID": "0",
			"LOINCCode": "",
			"HL7ResultTypeCode": "",
			"SIValue": "0.0",
			"SIUnits": "",
			"SILoRange": "0.0",
			"SIHiRange": "0.0",
			"HL7AbnormalFlagCodes": "",
			"DateTimeValue": "",
			"CodedValue": "",
			"ResultSemiquantitive": "0",
			"Note": "false",
			"LIMSObservationCode": "1236",
			"LIMSObservationDesc": "SG",
			"LIMSRptResult": "Not Detected DBS",
			"LIMSRptUnits": "",
			"LIMSRptFlag": "",
			"LIMSRptRange": "",
			"LIMSCodedValue": "",
			"WorkUnits": "0.0",
			"CostUnits": "0.0"
		};
	}
	else if(value == "Monitoring" || value == "Monitor"){
		return {
			"DateTimeStamp": "2017-01-04 08:00:00",
			"Versionstamp": "1.0.0",
			"LIMSDateTimeStamp": "2017-01-04 08:00:00",
			"LIMSVersionstamp": "01.00.00.000",
			"RequestID": "TZOPENLDR-123456789",
			"OBRSetID": "1",
			"OBXSetID": "1",
			"OBXSubID": "0",
			"LOINCCode": "",
			"ORGANISM": "",
			"SurveillanceCode": "MAL01",
			"SpecimenDateTime": "2017-01-01 08:00:00",
			"LIMSObservationCode": "MAL",
			"LIMSObservationDesc": "Malaria",
			"LIMSOrganismGroup": "",
			"CodedValue": "",
			"ResultSemiquantitive": "0",
			"ResultNotConfirmed": "0",
			"ResistantDrugs": "",
			"IntermediateDrugs": "",
			"SensitiveDrugs": "",
			"MDRCode": ""
		};
	}
}

function prettifyXml(source){
	if(source != undefined && source != null){
		try {
			/*var xmlDoc = new DOMParser().parseFromString(source, 'application/xml');
			var xsltDoc = new DOMParser().parseFromString([
				// describes how we want to modify the XML - indent everything
				'<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
				'  <xsl:strip-space elements="*"/>',
				'  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
				'    <xsl:value-of select="normalize-space(.)"/>',
				'  </xsl:template>',
				'  <xsl:template match="node()|@*">',
				'    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
				'  </xsl:template>',
				'  <xsl:output indent="yes"/>',
				'</xsl:stylesheet>',
			].join('\n'), 'application/xml');

			var xsltProcessor = new XSLTProcessor();    
			xsltProcessor.importStylesheet(xsltDoc);
			var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
			var resultXml = new XMLSerializer().serializeToString(resultDoc);
			return resultXml;*/

			var reg = /(>)\s*(<)(\/*)/g; // updated Mar 30, 2015
			var wsexp = / *(.*) +\n/g;
			var contexp = /(<.+>)(.+\n)/g;
			source = source.replace(reg, '$1\n$2$3').replace(wsexp, '$1\n').replace(contexp, '$1\n$2');
			var pad = 0;
			var formatted = '';
			var lines = source.split('\n');
			var indent = 0;
			var lastType = 'other';
			// 4 types of tags - single, closing, opening, other (text, doctype, comment) - 4*4 = 16 transitions 
			var transitions = {
				'single->single': 0,
				'single->closing': -1,
				'single->opening': 0,
				'single->other': 0,
				'closing->single': 0,
				'closing->closing': -1,
				'closing->opening': 0,
				'closing->other': 0,
				'opening->single': 1,
				'opening->closing': 0,
				'opening->opening': 1,
				'opening->other': 1,
				'other->single': 0,
				'other->closing': -1,
				'other->opening': 0,
				'other->other': 0
			};

			for (var i = 0; i < lines.length; i++) {
				var ln = lines[i];

				// Luca Viggiani 2017-07-03: handle optional <?xml ... ?> declaration
				if (ln.match(/\s*<\?xml/)) {
					formatted += ln + "\n";
					continue;
				}
				// ---

				var single = Boolean(ln.match(/<.+\/>/)); // is this line a single tag? ex. <br />
				var closing = Boolean(ln.match(/<\/.+>/)); // is this a closing tag? ex. </a>
				var opening = Boolean(ln.match(/<[^!].*>/)); // is this even a tag (that's not <!something>)
				var type = single ? 'single' : closing ? 'closing' : opening ? 'opening' : 'other';
				var fromTo = lastType + '->' + type;
				lastType = type;
				var padding = '';

				indent += transitions[fromTo];
				for (var j = 0; j < indent; j++) {
					padding += '\t';
				}
				if (fromTo == 'opening->closing')
					formatted = formatted.substr(0, formatted.length - 1) + ln + '\n'; // substr removes line break (\n) from prev loop
				else
					formatted += padding + ln + '\n';
			}

			return formatted;
			
		}
		catch(e){}
	}
	return "";
}

function OBJtoXML(obj) {
	var xml = '';
	for (var prop in obj) {
		xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
		if (obj[prop] instanceof Array) {
			xml += "<" + prop + ">";
			for (var array in obj[prop]) {				
				xml += OBJtoXML(new Object(obj[prop][array]));
			}
			xml += "</" + prop + ">";
		} 
		else if (typeof obj[prop] == "object") {
			xml += OBJtoXML(new Object(obj[prop]));
		} 
		else {
			xml += obj[prop];
		}
		xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
	}
	var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
	return xml
}

function prettifyJson(source){
	if(source != undefined && source != null){
		try { return JSON.stringify(source, null, 2); }
		catch(e){}
	}
	return "";
}

function createEditor(id, option){
	var instance = CodeMirror.fromTextArea(document.getElementById(id), option);
	
	instance.getCodeMirrorInstance = function () {
		return instance;
	};
	instance.getContent = function () {
		if (instance) {
			return instance.doc.getValue();
		}
	};
	instance.setContent = function (content,mode,clean) {
		if (instance){
			instance.setValue(content);
			instance.changeCodeScheme(mode);	
			if(clean)instance.doc.markClean();
		}
	};
	instance.setNew = function () {
		if (instance) {
			instance.doc.setValue('');
			instance.doc.markClean();
			if (typeof hostEditor != 'undefined'){
				hostEditor.setClean(true);
			}
		}
	}
	
	instance.changeCodeScheme = function(extensionName){
		if (extensionName) {
			var info = CodeMirror.findModeByExtension(extensionName);
			if (info) {
				var mode = info.mode;
				var spec = info.mime;
	
				if (mode) {
					instance.setOption('mode', spec);
					instance.autoLoadMode(instance, mode);			
				}
			}
		}
	};
	
	instance.markClean = function(){
		instance.doc.markClean();
		if (typeof hostEditor != 'undefined') {
			hostEditor.setClean(instance.isClean());
		}
	};
	
	return instance;
}

function create_custom_dropdowns() {
  $('select').each(function(i, select) {
	if (!$(this).next().hasClass('select-dropdown')) {
	  $(this).after('<div class="select-dropdown ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
	  var dropdown = $(this).next();
	  var options = $(select).find('option');
	  var selected = $(this).find('option:selected');
	  dropdown.find('.current').html(selected.data('display-text') || selected.text());
	  options.each(function(j, o) {
		var display = $(o).data('display-text') || '';
		dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
	  });
	}
  });
}

$(document).ready(function() {
	// Open/close
	$(document).on('click', '.select-dropdown', function(event) {
		var options = $(this).find('.option');
		if(options.length > 1){
		
			$('.select-dropdown').not($(this)).removeClass('open');
			$(this).toggleClass('open');
			if ($(this).hasClass('open')) {
				$(this).find('.option').attr('tabindex', 0);
				$(this).find('.selected').focus();
			} else {
				$(this).find('.option').removeAttr('tabindex');
				$(this).focus();
			}
		}
	});
	// Close when clicking outside
	$(document).on('click', function(event) {
		if ($(event.target).closest('.select-dropdown').length === 0) {
			$('.select-dropdown').removeClass('open');
			$('.select-dropdown .option').removeAttr('tabindex');
		}
		event.stopPropagation();
	});
	// Option click
	$(document).on('click', '.select-dropdown .option', function(event) {
	  $(this).closest('.list').find('.selected').removeClass('selected');
	  $(this).addClass('selected');
	  var text = $(this).data('display-text') || $(this).text();
	  $(this).closest('.select-dropdown').find('.current').text(text);
	  $(this).closest('.select-dropdown').prev('select').val($(this).data('value')).trigger('change');
	});

	// Keyboard events
	$(document).on('keydown', '.select-dropdown', function(event) {
	  var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
	  // Space or Enter
	  if (event.keyCode == 32 || event.keyCode == 13) {
		if ($(this).hasClass('open')) {
		  focused_option.trigger('click');
		} else {
		  $(this).trigger('click');
		}
		return false;
		// Down
	  } else if (event.keyCode == 40) {
		if (!$(this).hasClass('open')) {
		  $(this).trigger('click');
		} else {
		  focused_option.next().focus();
		}
		return false;
		// Up
	  } else if (event.keyCode == 38) {
		if (!$(this).hasClass('open')) {
		  $(this).trigger('click');
		} else {
		  var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
		  focused_option.prev().focus();
		}
		return false;
	  // Esc
	  } else if (event.keyCode == 27) {
		if ($(this).hasClass('open')) {
		  $(this).trigger('click');
		}
		return false;
	  }
	});
	
	/* ===== Affix Sidebar ===== */
	/* Ref: http://getbootstrap.com/javascript/#affix-examples */

    	
	$('#doc-menu').affix({
        offset: {
            top: ($('#header').outerHeight(true) + $('#doc-header').outerHeight(true)) + 45,
            bottom: ($('#footer').outerHeight(true) + $('#promo-block').outerHeight(true)) + 75
        }
    });
    
    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function() {
        $(window).trigger('scroll'); 
    });

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-nav', offset: 100});
    
    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});
	
    
    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */
    
     $('#cards-wrapper .item-inner').matchHeight();
     $('#showcase .card').matchHeight();
     
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });    
});