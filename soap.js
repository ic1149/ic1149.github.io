function soap() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb6.asmx', true);

  // build SOAP request
  var sr =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<SOAP-ENV:Envelope ' +
    'xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"' +
    'xmlns:ns1="http://thalesgroup.com/RTTI/2014-02-20/ldb/"' +
    'xmlns:ns2="http://thalesgroup.com/RTTI/2010-11-01/ldb/commontypes"' +
    'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
    '<SOAP-ENV:Header>' +
    '<ns2:AccessToken>' +
    '<ns2:TokenValue>e6c4ae20-1f47-472a-9bd7-6416daf689cc</ns2:TokenValue>' +
    '</ns2:AccessToken>' +
    '</SOAP-ENV:Header>' +
    '<SOAP-ENV:Body>' +
    '<ns1:GetDepartureBoardRequest>' +
    '<ns1:numRows>10</ns1:numRows>' +
    '<ns1:crs>MAN</ns1:crs>' +
    '</ns1:GetDepartureBoardRequest>' +
    '</SOAP-ENV:Body>' +
    '</SOAP-ENV:Envelope>';

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
        // alert('done. use firebug/console to see network response');
      }
    }
  }
  // Send the POST request
  xmlhttp.setRequestHeader('Content-Type', 'text/xml');
  xmlhttp.send(sr);
  // send request
  // ...
}