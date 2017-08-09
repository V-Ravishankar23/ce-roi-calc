$(document).ready(function() {


  var researchCircle;
  var setupCircle;
  var authCircle;
  var mvpCircle;
  var modelsCircle;
  var eventsCircle;
  var bulkCircle;
  var normalizationCircle;
  var testingCircle;



  function Utils() {
  }

  Utils.prototype = {
      constructor: Utils,
      isElementInView: function (element, fullyInView) {
          var pageTop = $(window).scrollTop();
          var pageBottom = pageTop + $(window).height();
          var elementTop = $(element).offset().top;
          var elementBottom = elementTop + $(element).height();

          if (fullyInView === true) {
              return ((pageTop < elementTop) && (pageBottom > elementBottom));
          } else {
              return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
          }
      }
  };

  var Utils = new Utils();

  $(".more-info-box").each(function(){
    $(this).hide();
  });

  $('.loader').hide();

  $(".loader").fadeIn(500).delay(500).fadeOut(500, function() {
    $("#get-started").fadeIn(500);
  });


  $("#get-started-form").submit(function() {
    var userFirst = $("input[name=user-name]").val();
    var userEmail = $("input[name=user-email]").val();
    /* use this as a format for sending to hubspot form
		$.ajax({
			method: "POST",
			contentType: "application/x-www-form-urlencoded; charset=UFT-8",
			url: "https://forms.hubspot.com/uploads/form/v2/440197/e3ca91ee-b2e1-4dd2-899b-69855befe36d",
			data: {
				"firstname": userFirst,
				"lastname": userLast,
				"email": userEmail,
				"pageName": "Codepen"
			}
		}); */



    $("#get-started").fadeOut(500, function() {
      $(".main-content").removeClass("align-items-center");
      $(".loader").fadeIn(500).delay(500).fadeOut(500, function() {
        $("#data-selection").fadeIn(500);
      });
    });

    return false;
  });


  var elementData = [{
      name: 'Slack',
      key: 'slack',
      hub: 'collaboration',
      apiType: 'REST'
    },
    {
      name: 'Cisco Spark',
      key: 'ciscospark',
      hub: 'collaboration',
      apiType: 'REST'
    },
    {
      name: 'GoToWebinar',
      key: 'gotowebinar',
      hub: 'conferencing',
      apiType: 'REST'
    },
    {
      name: 'ReadyTalk Illuminate ',
      key: 'readytalkilluminate',
      hub: 'conferencing',
      apiType: 'REST'
    },
    {
      name: 'ConnectWise CRM',
      key: 'connectwisecrm',
      hub: 'crm',
      apiType: 'SOAP'
    },
    {
      name: 'Pipedrive',
      key: 'pipedrive',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Netsuite CRM 2016 Release 1',
      key: 'netsuitecrmv2',
      hub: 'crm',
      apiType: 'SOAP'
    },
    {
      name: 'SugarCRM',
      key: 'sugarcrmv2',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'SAP C4C CRM',
      key: 'sapc4ccrm',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Autotask CRM',
      key: 'autotaskcrm',
      hub: 'crm',
      apiType: 'SOAP'
    },
    {
      name: 'Zoho CRM',
      key: 'zohocrm',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Act! Premium',
      key: 'actpremiumcrm',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Connectwise CRM REST Beta',
      key: 'connectwisecrmrest',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Bullhorn',
      key: 'bullhorn',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Act! Essentials',
      key: 'actessentialsoauth',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'HubSpot CRM',
      key: 'hubspotcrm',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Sage CRM',
      key: 'sagecrm',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Infusionsoft CRM',
      key: 'infusionsoftcrm',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Close.io',
      key: 'closeio',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Microsoft Dynamics CRM',
      key: 'dynamicscrmadfs',
      hub: 'crm',
      apiType: '.NET'
    },
    {
      name: 'Base',
      key: 'base',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'Salesforce',
      key: 'sfdc',
      hub: 'crm',
      apiType: 'REST'
    },
    {
      name: 'GoodData',
      key: 'gooddata',
      hub: 'db',
      apiType: 'REST'
    },
    {
      name: 'PostgreSQL',
      key: 'postgresql',
      hub: 'db',
      apiType: 'REST'
    },
    {
      name: 'QuickBase',
      key: 'quickbase',
      hub: 'db',
      apiType: 'REST'
    },
    {
      name: 'Microsoft SQL Server',
      key: 'sqlserver',
      hub: 'db',
      apiType: 'Other'
    },
    {
      name: 'MySQL',
      key: 'mysql',
      hub: 'db',
      apiType: 'REST'
    },
    {
      name: 'Salesforce Libraries',
      key: 'sfdclibraries',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'Google Drive',
      key: 'googledrive',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'Amazon S3',
      key: 'amazons3',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'Citrix ShareFile',
      key: 'sharefile',
      hub: 'documents',
      apiType: 'SOAP'
    },
    {
      name: 'Dropbox Business',
      key: 'dropboxbusiness',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'Dropbox',
      key: 'dropbox',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'OneDrive',
      key: 'onedrivev2',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'Box',
      key: 'box',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'OneDrive for Business',
      key: 'onedrivebusiness',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'Sharepoint',
      key: 'sharepoint',
      hub: 'documents',
      apiType: '.NET'
    },
    {
      name: 'Salesforce Files',
      key: 'sfdcdocuments',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'Evernote',
      key: 'evernote',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'OneNote',
      key: 'onenote',
      hub: 'documents',
      apiType: 'REST'
    },
    {
      name: 'BigCommerce',
      key: 'bigcommerce',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Shopify',
      key: 'shopify',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'SAP Anywhere',
      key: 'sapanywhere',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Weebly',
      key: 'weebly',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Volusion',
      key: 'volusion',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'WooCommerce REST',
      key: 'woocommercerest',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Etsy',
      key: 'etsy',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Magento SOAP v1.9',
      key: 'magentosoapv19',
      hub: 'ecommerce',
      apiType: 'SOAP'
    },
    {
      name: 'ePages',
      key: 'epages',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Magento v2.0',
      key: 'magentov20',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Infusion Soft ECommerce',
      key: 'infusionsoftecommerce',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'WooCommerce',
      key: 'woocommerce',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Ecwid',
      key: 'ecwid',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Magento',
      key: 'magento',
      hub: 'ecommerce',
      apiType: 'REST'
    },
    {
      name: 'Netsuite ERP',
      key: 'netsuiteerpv2',
      hub: 'erp',
      apiType: 'SOAP'
    },
    {
      name: 'Adobe Sign',
      key: 'adobe-esign',
      hub: 'esignature',
      apiType: 'REST'
    },
    {
      name: 'DocuSign',
      key: 'docusign',
      hub: 'esignature',
      apiType: 'REST'
    },
    {
      name: 'EventMobi v1',
      key: 'eventmobiv1',
      hub: 'event-conferencing',
      apiType: 'REST'
    },
    {
      name: 'Concur',
      key: 'concur',
      hub: 'expense',
      apiType: 'REST'
    },
    {
      name: 'Taxify',
      key: 'taxify',
      hub: 'finance',
      apiType: 'REST'
    },
    {
      name: 'Netsuite Finance',
      key: 'netsuitefinancev2',
      hub: 'finance',
      apiType: 'REST'
    },
    {
      name: 'Xero',
      key: 'xero',
      hub: 'finance',
      apiType: 'REST'
    },
    {
      name: 'QuickBooks Online',
      key: 'quickbooks',
      hub: 'finance',
      apiType: '.NET'
    },
    {
      name: 'Sage One',
      key: 'sageone',
      hub: 'finance',
      apiType: 'REST'
    },
    {
      name: 'Freshbooks',
      key: 'freshbooks',
      hub: 'finance',
      apiType: 'REST'
    },
    {
      name: 'Great Plains',
      key: 'greatplains',
      hub: 'finance',
      apiType: 'SOAP'
    },
    {
      name: 'Intacct.',
      key: 'intacct',
      hub: 'finance',
      apiType: 'REST'
    },
    {
      name: 'QuickBooks Enterprise',
      key: 'quickbooksonprem',
      hub: 'finance',
      apiType: '.NET'
    },
    {
      name: 'FieldAware v2',
      key: 'fieldawarev2',
      hub: 'fsa',
      apiType: 'REST'
    },
    {
      name: 'ServiceMax',
      key: 'servicemax',
      hub: 'fsa',
      apiType: 'REST'
    },
    {
      name: 'FieldLocate',
      key: 'fieldlocate',
      hub: 'fsa',
      apiType: 'REST'
    },
    {
      name: 'Google Sheets',
      key: 'googlesheets',
      hub: 'general',
      apiType: 'REST'
    },
    {
      name: 'typeform',
      key: 'typeform',
      hub: 'general',
      apiType: 'REST'
    },
    {
      name: 'Brandfolder',
      key: 'brandfolder',
      hub: 'general',
      apiType: 'REST'
    },
    {
      name: 'Wufoo',
      key: 'wufoo',
      hub: 'general',
      apiType: 'REST'
    },
    {
      name: 'Act! Premium',
      key: 'actpremium',
      hub: 'general',
      apiType: 'REST'
    },
    {
      name: 'ServiceNow',
      key: 'servicenow',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'SAP C4C Helpdesk',
      key: 'sapc4chd',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'Zendesk',
      key: 'zendesk',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'Desk.com',
      key: 'desk',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'Wrike',
      key: 'wrike',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'ServiceNow OAuth',
      key: 'servicenowoauth',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'Autotask Helpdesk',
      key: 'autotaskhelpdesk',
      hub: 'helpdesk',
      apiType: 'SOAP'
    },
    {
      name: 'Help Scout',
      key: 'helpscout',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'JIRA',
      key: 'jira',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'Freshdesk V2',
      key: 'freshdeskv2',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'ConnectWise',
      key: 'connectwisehd',
      hub: 'helpdesk',
      apiType: 'SOAP'
    },
    {
      name: 'Oracle Service Cloud',
      key: 'servicecloud',
      hub: 'helpdesk',
      apiType: 'SOAP'
    },
    {
      name: 'Freshservice',
      key: 'freshservice',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'Salesforce Service Cloud',
      key: 'sfdcservicecloud',
      hub: 'helpdesk',
      apiType: 'REST'
    },
    {
      name: 'SuccessFactors Beta',
      key: 'successfactors',
      hub: 'humancapital',
      apiType: 'REST'
    },
    {
      name: 'Netsuite HC',
      key: 'netsuitehcv2',
      hub: 'humancapital',
      apiType: 'SOAP'
    },
    {
      name: 'BrightTALK',
      key: 'brighttalk',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Hubspot Marketing',
      key: 'hubspot',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Infusionsoft Marketing',
      key: 'infusionsoftmarketing',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Facebook Lead Ads',
      key: 'facebookleadads',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'AutoPilot',
      key: 'autopilot',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Salesforce Marketing Cloud',
      key: 'salesforcemarketingcloud',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Kissmetrics',
      key: 'kissmetrics',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'MailChimp v3.0',
      key: 'mailchimpv3',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Marketo',
      key: 'marketo',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Act-On',
      key: 'acton',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Sailthru',
      key: 'sailthru',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Pardot',
      key: 'pardot',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'allbound',
      key: 'allbound',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Eloqua',
      key: 'eloqua',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'MailJet Marketing',
      key: 'mailjetmarketing',
      hub: 'marketing',
      apiType: 'REST'
    },
    {
      name: 'Twilio',
      key: 'twiliov2',
      hub: 'messaging',
      apiType: 'REST'
    },
    {
      name: 'Twilio SMS',
      key: 'twilio',
      hub: 'messaging',
      apiType: 'REST'
    },
    {
      name: 'SendGrid',
      key: 'sendgrid',
      hub: 'messaging',
      apiType: 'REST'
    },
    {
      name: 'Infobip',
      key: 'infobip',
      hub: 'messaging',
      apiType: 'REST'
    },
    {
      name: 'MailJet',
      key: 'mailjet',
      hub: 'messaging',
      apiType: 'REST'
    },
    {
      name: 'Nimsoft',
      key: 'nimsoft',
      hub: 'monitoring',
      apiType: 'REST'
    },
    {
      name: 'ABBYY',
      key: 'abbyy',
      hub: 'ocr',
      apiType: 'REST'
    },
    {
      name: 'Chargebee',
      key: 'chargebee',
      hub: 'payment',
      apiType: 'REST'
    },
    {
      name: 'Stripe',
      key: 'stripe',
      hub: 'payment',
      apiType: 'REST'
    },
    {
      name: 'Expensify',
      key: 'expensify',
      hub: 'payment',
      apiType: 'REST'
    },
    {
      name: 'Paypal v2',
      key: 'paypalv2',
      hub: 'payment',
      apiType: 'REST'
    },
    {
      name: 'Zuora v2',
      key: 'zuorav2',
      hub: 'payment',
      apiType: 'REST'
    },
    {
      name: 'Chargify',
      key: 'chargify',
      hub: 'payment',
      apiType: 'REST'
    },
    {
      name: 'HireRight',
      key: 'hireright',
      hub: 'screening',
      apiType: 'SOAP'
    },
    {
      name: 'Facebook',
      key: 'facebooksocial',
      hub: 'social',
      apiType: 'REST'
    },
    {
      name: 'Lithium Response',
      key: 'lithiumlsw',
      hub: 'social',
      apiType: 'REST'
    },
    {
      name: 'Instagram',
      key: 'instagram',
      hub: 'social',
      apiType: 'REST'
    },
    {
      name: 'flickr',
      key: 'flickr',
      hub: 'social',
      apiType: 'REST'
    },
    {
      name: 'Twitter',
      key: 'twitter',
      hub: 'social',
      apiType: 'REST'
    }
  ];

  var buildInfo = {
    "REST": {
      "buildDays": 90,
      "buildCost": 30000,
      "annMaintCost": 6000
    },
    "SOAP": {
      "buildDays": 180,
      "buildCost": 60000,
      "annMaintCost": 12000
    },
    ".NET": {
      "buildDays": 180,
      "buildCost": 60000,
      "annMaintCost": 12000
    },
    "Other": {
      "buildDays": 180,
      "buildCost": 60000,
      "annMaintCost": 12000
    },
  }

  var newBuildInfo = {
    "REST": {
      "research": 24,
      "setup": 0,
      "auth": 64,
      "mvp": 80,
      "models": 64,
      "events": 104,
      "bulkTransformation": 104,
      "normalization": 80,
      "testing": 40,
      "totalDays": 70
    },

    "SOAP": {
      "research": 40,
      "setup": 64,
      "auth": 64,
      "mvp": 120,
      "models": 80,
      "events": 104,
      "bulkTransformation": 104,
      "normalization": 80,
      "testing": 80,
      "totalDays": 92
    },

    "Other": {
      "research": 40,
      "setup": 64,
      "auth": 64,
      "mvp": 120,
      "models": 80,
      "events": 104,
      "bulkTransformation": 104,
      "normalization": 80,
      "testing": 80,
      "totalDays": 92
    }

  };

  var elementNames = [];
  var elementKeys = [];
  var length = elementData.length;
  for (var i = 0; i < length; i++) {
    elementNames.push(elementData[i]["name"]);
  }
  for (var i = 0; i < length; i++) {
    elementKeys.push(elementData[i]["key"]);
  }

  // Element selection arrays
  var selectedElementsKeys = [];



  // element selection autocomplete

  function sortInputFirst(input, data) {
    var first = [];
    var others = [];
    for (var i = 0; i < data.length; i++) {
      var thisTag = (data[i]).toLowerCase();
      if (thisTag.indexOf(input.toLowerCase()) === 0) {
        first.push(data[i]);
      } else {
        others.push(data[i]);
      }
    }
    first.sort();
    others.sort();
    return (first.concat(others));
  }

  var availableTags = elementNames;
  $(function() {



    $("#elements").autocomplete({
      source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableTags, request.term);
        var sortedResults = sortInputFirst(request.term, results);
        response(sortedResults.slice(0, 8));
      },
      open: function(event, ui) {
        $('.ui-autocomplete').off('menufocus hover mouseover mouseenter');
      },
      autoFocus: true,
      select: function(event, ui) {
        var selected = ui.item.value;
        var thisElementObject = $.grep(elementData, function(e) {
          return e.name == selected
        });
        var thisElementKey = thisElementObject[0].key;
        var elementImg = thisElementKey + ".png";

        selectedElementsKeys.push(thisElementKey);
        $(".testdiv").html(selectedElementsKeys.join(",")); // remove

        var source = $("#element-entry-template").html();
        var template = Handlebars.compile(source);
        var context = {
          "elementImg": elementImg,
          "selected": selected,
          "key": thisElementKey
        };

        availableTags.splice(availableTags.indexOf(selected), 1);
        $(this).autocomplete("option", "source", function(request, response) {
          var results = $.ui.autocomplete.filter(availableTags, request.term);
          var sortedResults = sortInputFirst(request.term, results);
          response(sortedResults.slice(0, 8));
        });
        var addElement = template(context);
        $('#element-list').append(addElement);
        $("#" + thisElementKey).css("opacity", 1).show(300, function() {
          $('#element-list').animate({
            scrollLeft: '+=400'
          }, 500);
        });
        setTimeout(function() {
          $(".btn-advance").animate({
            "opacity": 1
          });
        }, 500);



        $(this).val('');
        return false;
      }
    });
  });

  $(document).on('click', '.btn-remove', function() {
    var removeThisKey = $(this).closest("div").attr('id');
    var removeDiv = $(this).closest('div');
    selectedElementsKeys.splice(selectedElementsKeys.indexOf(removeThisKey), 1);
    if (selectedElementsKeys.length < 1) {
      $(".btn-advance").animate({
        "opacity": 0
      }, 300, function() {
        $(removeDiv).closest("div").animate({
          "opacity": 0
        }, 300, function() {
          $(this).hide();
        });
      });
    } else {
      $(removeDiv).closest("div").animate({
        "opacity": 0
      }, 300, function() {
        $(this).hide();
      });
    }

    // add this element back to selection options
    var addBack = $(this).val();
    availableTags.push(addBack);
    $("#elements").autocomplete("option", "source", function(request, response) {
      var results = $.ui.autocomplete.filter(availableTags, request.term);
      var sortedResults = sortInputFirst(request.term, results);
      response(sortedResults.slice(0, 8));
    });
    $(".testdiv").html(selectedElementsKeys.join(",")); // remove


  });

  $(".btn-advance").click(function() {



    //for testing
    // selectedElementsKeys = ["slack","base","sqlserver","sharefile"];
    var keysForCalculation = selectedElementsKeys;
    var numOfElements = keysForCalculation.length;
    var countREST = 0;
    var countSOAP = 0;
    var countOther = 0;
    for (var i = 0; i < numOfElements; i++) {
      thisKey = keysForCalculation[i];
      var typeArr = $.grep(elementData, function(e, u) {
        return e.key == thisKey
      });
      var type = typeArr[0].apiType;
      if (type == "REST") {
        countREST++;
      } else if (type == "SOAP") {
        countSOAP++;
      } else {
        countOther++;
      }
    }
    var countSOAPAndOther = countSOAP + countOther;
    var diyBuildDays = (countREST * newBuildInfo["REST"].totalDays) + (countSOAP * newBuildInfo["SOAP"].totalDays) + (countOther * newBuildInfo["Other"].totalDays);

    var researchDays = ((countREST * newBuildInfo["REST"].research) + (countSOAPAndOther * newBuildInfo["SOAP"].research))/8;
    var setupDays = ((countREST * newBuildInfo["REST"].setup) + (countSOAPAndOther * newBuildInfo["SOAP"].setup))/8;
    var authDays = ((countREST * newBuildInfo["REST"].auth) + (countSOAPAndOther * newBuildInfo["SOAP"].auth))/8;
    var mvpDays = ((countREST * newBuildInfo["REST"].mvp) + (countSOAPAndOther * newBuildInfo["SOAP"].mvp))/8;
    var modelsDays = ((countREST * newBuildInfo["REST"].models) + (countSOAPAndOther * newBuildInfo["SOAP"].models))/8;
    var eventsDays = ((countREST * newBuildInfo["REST"].events) + (countSOAPAndOther * newBuildInfo["SOAP"].events))/8;
    var bulkTransformationDays = ((countREST * newBuildInfo["REST"].bulkTransformation) + (countSOAPAndOther * newBuildInfo["SOAP"].bulkTransformation))/8;
    var normalizationDays = ((countREST * newBuildInfo["REST"].normalization) + (countSOAPAndOther * newBuildInfo["SOAP"].normalization))/8;
    var testingDays = ((countREST * newBuildInfo["REST"].testing) + (countSOAPAndOther * newBuildInfo["SOAP"].testing))/8;

    var cloudElementsBuildDays = 30 + ((countREST + countSOAP + countOther - 1) * 7);
    /*
    researchCircle = undefined;
    setupCircle = undefined;
    authCircle = undefined;
    mvpCircle = undefined;
    modelsCircle = undefined;
    eventsCircle = undefined;
    bulkCircle = undefined;
    normalizationCircle = undefined;
    testingCircle = undefined;
    */

    researchIsAnimated = false;
    setupIsAnimated = false;
    authIsAnimated = false;
    mvpIsAnimated = false;
    modelsIsAnimated = false;
    eventsIsAnimated = false;
    bulkIsAnimated = false;
    normalizationIsAnimated = false;
    testingIsAnimated = false;

    $(".day-box").each(function(){
      $(this).css("opacity",0);
    });

    $(".circle").each(function(){
      $(this).empty();
    });

    $(".results").show(function(){

    // Fill in results section
    // Animated Circles
      // researchCircle
      researchCircle = new ProgressBar.Circle("#research-circle", {
          color: '#aaa',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 8,
          trailWidth: 2,
          easing: 'easeInOut',
          duration: 3000,
          text: {
            style: {
              color: "black",
              position: 'absolute',
              padding: 0,
              margin: 0,
            },
            autoStyleContainer: true
          },
          from: { color: '#aaa', width: 2 },
          to: { color: '#333', width: 8 },
          // Set default step function for all animate calls
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value()*researchDays);
            if (value === 0) {
              circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
            } else {
              circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
            }

          }
        });
      var researchIsAnimated = false;
      $(window).scroll( function(){
        if(researchIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.research'),true);
          if(isElementInView){
            $('.research').animate({"opacity":1});
            researchCircle.animate(1);
            researchIsAnimated = true;
          }
        }
      });
      // setupCircle
      setupCircle = new ProgressBar.Circle("#setup-circle", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          style: {
            color: "black",
            position: 'absolute',
            padding: 0,
            margin: 0,
          },
          autoStyleContainer: true
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 8 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value()*setupDays);
          if (value === 0) {
            circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
          } else {
            circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
          }

        }
      });
      var setupIsAnimated = false;
      $(window).scroll( function(){
        if(setupIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.setup'),true);
          if(isElementInView){
            $('.setup').animate({"opacity":1});
            setupCircle.animate(1);
            setupIsAnimated = true;
          }
        }
      });
      // authCircle
      authCircle = new ProgressBar.Circle("#auth-circle", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          style: {
            color: "black",
            position: 'absolute',
            padding: 0,
            margin: 0,
          },
          autoStyleContainer: true
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 8 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value()*authDays);
          if (value === 0) {
            circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
          } else {
            circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
          }

        }
      });
      var authIsAnimated = false;
      $(window).scroll( function(){
        if(authIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.auth'),true);
          if(isElementInView){
            $('.auth').animate({"opacity":1});
            authCircle.animate(1);
            authIsAnimated = true;
          }
        }
      });
      // mvpCircle
      mvpCircle = new ProgressBar.Circle("#mvp-circle", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          style: {
            color: "black",
            position: 'absolute',
            padding: 0,
            margin: 0,
          },
          autoStyleContainer: true
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 8 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value()*mvpDays);
          if (value === 0) {
            circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
          } else {
            circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
          }

        }
      });
      var mvpIsAnimated = false;
      $(window).scroll( function(){
        if(mvpIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.mvp'),true);
          if(isElementInView){
            $('.mvp').animate({"opacity":1});
            mvpCircle.animate(1);
            mvpIsAnimated = true;
          }
        }
      });
      // modelsCircle
      modelsCircle = new ProgressBar.Circle("#models-circle", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          style: {
            color: "black",
            position: 'absolute',
            padding: 0,
            margin: 0,
          },
          autoStyleContainer: true
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 8 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value()*modelsDays);
          if (value === 0) {
            circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
          } else {
            circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
          }

        }
      });
      var modelsIsAnimated = false;
      $(window).scroll( function(){
        if(modelsIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.models'),true);
          if(isElementInView){
            $('.models').animate({"opacity":1});
            modelsCircle.animate(1);
            modelsIsAnimated = true;
          }
        }
      });
      // eventsCircle
      eventsCircle = new ProgressBar.Circle("#events-circle", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          style: {
            color: "black",
            position: 'absolute',
            padding: 0,
            margin: 0,
          },
          autoStyleContainer: true
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 8 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value()*eventsDays);
          if (value === 0) {
            circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
          } else {
            circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
          }

        }
      });
      var eventsIsAnimated = false;
      $(window).scroll( function(){
        if(eventsIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.events'),true);
          if(isElementInView){
            $('.events').animate({"opacity":1});
            eventsCircle.animate(1);
            eventsIsAnimated = true;
          }
        }
      });
      // bulkCircle
      bulkCircle = new ProgressBar.Circle("#bulk-circle", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          style: {
            color: "black",
            position: 'absolute',
            padding: 0,
            margin: 0,
          },
          autoStyleContainer: true
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 8 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value()*bulkTransformationDays);
          if (value === 0) {
            circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
          } else {
            circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
          }

        }
      });
      var bulkIsAnimated = false;
      $(window).scroll( function(){
        if(bulkIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.bulk'),true);
          if(isElementInView){
            $('.bulk').animate({"opacity":1});
            bulkCircle.animate(1);
            bulkIsAnimated = true;
          }
        }
      });
      // normalizationCircle
      normalizationCircle = new ProgressBar.Circle("#normalization-circle", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          style: {
            color: "black",
            position: 'absolute',
            padding: 0,
            margin: 0,
          },
          autoStyleContainer: true
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 8 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value()*normalizationDays);
          if (value === 0) {
            circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
          } else {
            circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
          }

        }
      });
      var normalizationIsAnimated = false;
      $(window).scroll( function(){
        if(normalizationIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.normalization'),true);
          if(isElementInView){
            $('.normalization').animate({"opacity":1});
            normalizationCircle.animate(1);
            normalizationIsAnimated = true;
          }
        }
      });
      // testingCircle
      testingCircle = new ProgressBar.Circle("#testing-circle", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'easeInOut',
        duration: 3000,
        text: {
          style: {
            color: "black",
            position: 'absolute',
            padding: 0,
            margin: 0,
          },
          autoStyleContainer: true
        },
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 8 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value()*testingDays);
          if (value === 0) {
            circle.setText("<h1 class='circle-number'>"+0+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");
          } else {
            circle.setText("<h1 class='circle-number'>"+value+"</h1>"+"<p class='circle-days' style='text-align:center;'>Days</p>");;
          }

        }
      });
      var testingIsAnimated = false;
      $(window).scroll( function(){
        if(testingIsAnimated === false) {
          var isElementInView = Utils.isElementInView($('.testing'),true);
          if(isElementInView){
            $('.testing').animate({"opacity":1});
            testingCircle.animate(1);
            testingIsAnimated = true;
          }
        }
      });

    });

    (function($) {
      $.fn.countUpTo = function(num, dur) {

        var $this = $(this);
        var countTo = num;

        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: dur,
            easing: 'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
        return this;
      };
    }(jQuery));

    $("#data-selection").fadeOut(500, function() {

      $(".rest-apis").css("opacity", 0);
      $("#countREST").html("0");

      $(".soap-apis").css("opacity", 0);
      $("#countSOAP").html("0");

      $(".total-apis").css("opacity", 0);
      $("#countTotal").html("0");

      $(".time-to-market").css("opacity", 0);

      $(".diy-market").css("opacity", 0);
      $(".to-red").css("color", "white");
      $("#diyBuildDays").html("0");

      $(".ce-market").css("opacity", 0);
      $("#cloudElementsBuildDays").html("0");

      $(".breakdown").css("opacity", 0);

      $(".loader").fadeIn(500).delay(500).fadeOut(500)
      setTimeout(function(){
        /* Every time the window is scrolled ... */

        $("#calculated-roi").fadeIn(500, function() {

          $(".rest-apis").animate({
            "opacity": 1
          }, 500);
          setTimeout(function() {
            $("#countREST").countUpTo(countREST, 500);
          }, 400);

          $(".soap-apis").animate({
            "opacity": 1
          }, 500);
          setTimeout(function() {
            $("#countSOAP").countUpTo((countSOAP + countOther), 500);
          }, 400);

          setTimeout(function() {
            $(".total-apis").animate({
              "opacity": 1
            }, 500);
          }, 900);
          setTimeout(function() {
            $("#countTotal").countUpTo((countREST + countSOAP + countOther), 500);
          }, 1000);

          setTimeout(function() {
            $(".time-to-market").animate({
              "opacity": 1
            }, 500);
          }, 1500);

          setTimeout(function() {
            $(".diy-market").animate({
              "opacity": 1
            }, 500);
          }, 1500);
          setTimeout(function() {
            $("#diyBuildDays").countUpTo(diyBuildDays, 3000);
            $(".to-red").animate({
              "color": "red"
            }, 3000);
          }, 1600);

          setTimeout(function() {
            $(".ce-market").animate({
              "opacity": 1
            }, 500);
          }, 4600);
          setTimeout(function() {
            $("#cloudElementsBuildDays").countUpTo(cloudElementsBuildDays, 1000);
          }, 4700);

          setTimeout(function() {
            $(".breakdown").animate({
              "opacity": 1
            }, 500);
          }, 5000);


        });
      },2000);
    });

    $(".btn-go-back").click(function() {

      $(".results").hide();
      $(".more-info-box").each(function(){
        $(this).hide();
      });
      $(".fa-info-circle").each(function(){
        $(this).removeClass("info-active");
      });


      $("#calculated-roi").fadeOut(500, function() {


        $("#data-selection").fadeIn(500);
      });
    });
  });

  $(".fa-info-circle").each(function(){
    $(this).click(function(){
      var divID = $(this).attr("data-toggle");
      $(divID).slideToggle("slow");
      $(this).toggleClass("info-active",500,"easeOutSine");
    });
  });



});
