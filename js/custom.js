

$(document).ready(function() {

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
      name: 'SAP Hybris Cloud for Customer CRM',
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
      name: 'Infusionsoft',
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
      name: 'Microsoft OneDrive for Business',
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
      name: 'Netsuite ERP 2016 Release 1',
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
      name: 'Netsuite Finance 2016 R1',
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
      name: 'SAP Hybris Cloud for Customer Helpdesk',
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
      name: 'Netsuite HC 2016 Release 1',
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
      name: 'Infusionsoft',
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

  var elementNames = [];
  var elementKeys = [];
  var length = elementData.length;
  for (var i = 0; i < length; i++){
    elementNames.push(elementData[i]["name"]);
  }
  for (var i = 0; i < length; i++){
    elementKeys.push(elementData[i]["key"]);
  }

// element selection autocomplete
  $( function() {
    function log( message ) {
      $( "<div>" ).text( message ).prependTo( "#element-list" );
      $( "#element-list" ).scrollTop( 0 );
    }
    var availableTags = elementNames;
    $( "#elements" ).autocomplete({
      source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableTags, request.term);
        response(results.slice(0, 8));
      },
      select: function (event,ui) {
        var selected = ui.item.value;
        var thisElementObject = $.grep(elementData, function(e){return e.name == selected});
        var thisElementKey = thisElementObject[0].key;
        var elementImg = thisElementKey + ".png";

        var source = $("#element-entry-template").html();
        var template = Handlebars.compile(source);
        var context = {
          "elementImg" : elementImg,
          "selected" : selected
        };

        availableTags.splice(availableTags.indexOf(selected),1);
        $(this).autocomplete("option","source",availableTags);
        var addElement = template(context);
        $('#element-list').append(addElement);


        $(this).val('');
        return false;
      }
    });
  });



});
