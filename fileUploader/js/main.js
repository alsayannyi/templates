	// remove  previously added file on click
	function removeParent(event) {
					
		var eventContainer =event.currentTarget;
		var parent = eventContainer.parentNode.parentNode;
		var removingElem = eventContainer.parentNode;
		removingElem.classList.remove('fadeInDownBig');
		removingElem.classList.add('fadeOutLeftBig');

		setTimeout(delayRemove, 2000);

		function delayRemove() {
			var a = parent.removeChild(eventContainer.parentNode);
			return a;
		}
		this.styleModalWindow();
	}
	
	function addHoverIcon() {
   		//document.getElementById("sender");
   		var addIcon =$('<i class="fa fa-paper-plane-o flag" aria-hidden="true" style=" position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);font-size:4em;color:#f9f9f9;"></i>').appendTo('#sender');
   		console.log("icon was added");
	}

	function removeHoverIcon() {
		$( '.flag' ).remove();
    }

	function launchModalWindow() {
		var switcher = document.getElementById('circleRabbit').style.display;
		document.body.style.backgroundImage = "url('./images/wb.jpg')";

		if (switcher == "block" || switcher == "") {
			document.getElementById('circleRabbit').style.display = "none";
		} else {
			document.getElementById('circleRabbit').style.display = "block";
		}
		
		this.styleModalWindow();
		return false;
		$('#myModal').modal('toggle');
	} 
	// change styles in Modal Window
	function styleModalWindow() {
		var bgTrigger = document.getElementsByClassName('uploadParams');
		var addFileBtn = document.getElementById('addFileLabel');
		var backBtn = document.getElementById('back');
		var sendBtn = document.getElementById('uploadBtn');
		var modalWindow = document.getElementById('myModal');
		// if-check bgTrigger.length == 0
		if ( !document.getElementById("fileUpload").value ) {
			addFileBtn.style.borderColor = "#bbbec4";
			backBtn.style.borderColor = "#d4d3d8";
			backBtn.style.color = "#595a5e";
			sendBtn.style.borderColor = "#d4d3d8";
			modalWindow.style.borderColor = "#d4d3d8";
			//modalWindow.style.borderColor = "#edb21ebf";
		} else {
			addFileBtn.style.borderColor = "#fcbf26";
			//modalWindow.style.borderColor = "#5ac2b7";
			modalWindow.style.borderColor = "#f8e6d0";
			backBtn.style.borderColor = "#fbe8dd";
			sendBtn.style.borderColor = "#f8e6d0";
		}
	}

	// event listener on Back-Btn click
	function returnRabbit() {
		let switcher = document.getElementById('circleRabbit').style.display;

		if (switcher == "block" || switcher == "") {
			document.getElementById('circleRabbit').style.display = "none";
		} else {
			document.getElementById('circleRabbit').style.display = "block";
		}
		document.getElementById("formID").reset(); // clear form values
		
		// delete li.uploadFiles from DOM on Back-Btn
		var checker = document.querySelector('li.uploadParams');
		if ( checker ) {
			var  fileGroup = document.getElementById("fileList");
			//var childrenLi = fileGroup.childNodes;
			while (fileGroup.firstChild) {
        		fileGroup.removeChild(fileGroup.firstChild);
			}
			
		}
		
		document.body.style.backgroundImage = "url('./images/apple.jpg')";
		return switcher;
	}


	// add fileName
	$("document").ready(function(){
        $("#fileUpload").on("change", function() {
        	var file = this.files[0];
		    var fileSize = file.size;
		    var getFullName = $('#fileUpload').val();
		    var splitName = getFullName.split("\\");
		    var fileName = splitName[2];

		    var addFileString =$('<li class="uploadParams animated fadeInDownBig" style=""><span style="color: #907c6a;">the uploaded file: </span> ' + fileName + ', <span style="color: #907c6a;"> size: </span> ' + fileSize + ' bytes ' + 
		    	'<span style="color:#24272e; font-size: 1.3em;" class="glyphicon glyphicon-remove-circle pull-right removeFile btn" aria-hidden="true" onclick="removeParent(event)"></span>' +
		    	 '</li>').appendTo('#fileList');
		});
	});

	var elem = document.getElementById('fileList');
	var fileArr = document.getElementsByClassName('removeFile');