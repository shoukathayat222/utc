/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
	
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function loadTab(id)
{
    

}
function login(frm){
	var username=frm.username.value;
	var pass=frm.password.value;
    /*if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            xmlDoc=xmlhttp.responseXML;
            var title="";
            var image="";                                           

            x=xmlDoc.getElementsByTagName("response");
            console.log(x);
        }
    }

    var url = "http://nexthrm-dev.vteamslabs.com/web-service/?method=getAuthentication&userName="+username+"&userPassword="+pass;

    xmlhttp.open("GET",url,true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();*/
	
        //var postdata={ username: 'shoukat', password: '123456' };
	$.ajax({
	  type: "post",
	  dataType: "json",
	  async: true,
	  cache : false,
	  crossDomain: true,
	  url: "http://skelectrical.net/namumkin/ws.php",
	  data: "username="+username+"&password="+pass,
	}).fail(function(responseText){ 
		alert("login failed 1");
                
                //console.log(responseText);
                //alert(responseText.getResponseHeader());
               /* var test= JSON.stringify(responseText);//xml;
                //alert(test);
                test = test.replace('<?xml version="1.0" encoding="UTF-8"?>','');
                //xml = '<ServiceEmployee generator="zend" version="1.0"><getAuthentication><response>ee5467e84992ee4e326b92317f400121</response><status>success</status></getAuthentication></ServiceEmployee>';
                $(test).find('getAuthentication').each(function(){
                    var sTitle = $(this).find('response').text();
                    var sPublisher = $(this).find('status').text();
                    alert(sTitle);
                   // $("<li></li>").html(sTitle + ", " + sPublisher).appendTo("#dvContent ul");
                  });*/
                //var xmlDoc = xml;
//                alert(xml.length);
//                //alert(xmlDoc);
//                var markers = xmlDoc.getElementsByTagName("response") ;
//                for ( var i = 0; i < markers.length ; i++ ) {
//                    alert(markers[i]);
//                  }
                //alert(msg.)
                //xmlDoc = $.parseXML( xml ),
                //console.log(xmlDoc);
                
                //$xml = $( xmlDoc ),
                //$title = $xml.find( "response" );
                //alert($title);
                 //var test=$(xml).find('getAuthentication').first().text();
                 //alert(test);
                 //$('response', xml).each(function() {alert($(this).find('response').text());});		
		
	})
	.success(function(data){
		//alert('login');
                //alert(data);
		if(data.msg)
			alert(data.msg);
		else{
			$.ajax({
			  type: "POST",
			  dataType: "json",
			  async: true, 
			  cache : false,

			  crossDomain: true,
			  url: "http://skelectrical.net/namumkin/ws.php",
			  data: "token="+data.token+"&get=invocie",//'},//JSON.stringify(postdata),

			}).fail(function(msg){ 
				alert("login failed");
		
			})
			.success(function(data){
				if(data.msg)
					alert('here'+data.msg);
				else{
			          //console.log(data);
			          //data = jQuery.parseJSON(data);
				  //console.log(data);
				 $("#form").hide();
                                  var str = "<tr><th>Category Name</th><th>Invoice No</th><th>Date</th><th>C Code</th><th>Customer Name</th><th>Sub Total</th><th>Discount</th><th>Total</th></tr>";
				  for(i = 0; i < data.length; i++){
                                      //alert(data[i].code);
                                      str+="<tr><td>"+data[i].category_name+"</td>";
                                      str+="<td>"+data[i].invoice_id+"</td>";
                                      str+="<td>"+data[i].Invoice_Date+"</td>";
                                      str+="<td>"+data[i].code+"</td>";
                                      str+="<td>"+data[i].customer_name+"</td>";
                                      str+="<td>"+data[i].Sub_Total+"</td>";
                                      str+="<td>"+data[i].Discount+"</td>";
                                      str+="<td>"+data[i].Total+"</td></tr>";

				  }
   				  $("#list").html(str);
				}
				 //alert(data.token);

			});
		}

	});
	
	
	return false;
}

$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
$.support.cors=true;
});
