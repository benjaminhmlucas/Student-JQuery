$(document).ready(function(){
	var $firstName = $("#firstName"),
		$errFirstName = $("#errFirstName"),
		$lastName = $("#lastName"),
		$errLastName = $("#errLastName"),
		$addr1 = $("#addr1"),
		$errAddr1 = $("#errAddr1"),
		$addr2 = $("#addr2"),
		$errAddr2 = $("#errAddr2"),
		$city = $("#city"),
		$errCity = $("#errCity"),
		$state = $("#state"),
		$errState = $("#errState"),
		$zip = $("#zip"),
		$errZip = $("#errZip"),
		$phone = $("#phone"),
		$errPhone = $("#errPhone"),
		$email = $("#email"),
		$errEmail = $("#errEmail"),
		$errType = $("#errType"),
		$cCard = $("#cCard"),
		$errCard = $("#errCard"),
		$expMonth = $("#expMonth"),
		$expYear = $("#expYear"),
		$errExpiration = $("#errExpiration"),
		$errTotal = $("#errTotal"),
		$cform = $("#customerForm");
	$state.focus(function(){
		$errState.empty();		
		$errState.empty().append('Use a two letter abreviation');		
	});
	$state.blur(function(){
		$errState.empty();					
	});
	$zip.focus(function(){
		$errZip.empty();		
		$errZip.empty().append('Use a 5 digit zip code');		
	});
	$zip.blur(function(){
		$errZip.empty();					
	});
	$phone.focus(function(){
		$errPhone.empty();
		$errPhone.empty().append('Numbers Only – No Spaces or Dashes');
	});
	$phone.blur(function(){
		$errPhone.empty();		
	});
	$email.focus(function(){		
		$errEmail.empty();		
		$errEmail.empty().append('Example – john@doe.com');		
	});
	$email.blur(function(){		
		$errEmail.empty();			
	});
	$cCard.focus(function(){
		$errCard.empty();
		$errCard.empty().append('Numbers Only – No Spaces or Dashes');		
	});
	$cCard.blur(function(){
		$errCard.empty();				
	});
	$cform.submit(function(event){
		//submitPattern1 = pattern for firstName, lastName, and city fields
		var $cardType = $("input[name=cardType]:checked"),
			submitPattern1 =/^[A-Z]{2,20}$/i,
			submitAddressPattern =/^[A-Z0-9 ]{2,20}$/i,
			phonePattern =/^[0-9]{10}$/,
			emailPattern =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			errorCount = 0;
		$("input").css("background","white");
		$("#expMonth, #expYear").css("background","white");
		$(".errTxt").empty();
		if (!submitPattern1.test($firstName.val())) {
			$errFirstName.empty().append('Required: Must contain only letters and spaces between 2 and 20 characters!');
			$("#firstName").css("background","pink");
			errorCount +=1;
		}
		if (!submitPattern1.test($lastName.val())) {
			$errLastName.empty().append('Required: Must contain only letters and spaces between 2 and 20 characters!');
			$("#lastName").css("background","pink");
			errorCount +=1;
		}
		if (!submitPattern1.test($city.val())) {
			$errCity.empty().append('Required: Must contain only letters and spaces between 2 and 20 characters!');
			$("#city").css("background","pink");
			errorCount +=1;
		}
		if (!submitAddressPattern.test($addr1.val())) {
			$errAddr1.empty().append('Required: Must contain only letters, numbers and spaces between 2 and 20 characters!');
			$("#addr1").css("background","pink");
			errorCount +=1;
		}
		if (!submitAddressPattern.test($addr2.val())) {
			$errAddr2.empty().append('Must contain only letters, numbers and spaces between 2 and 20 characters!');
			$("#addr2").css("background","pink");
			errorCount +=1;
		}
		if ($addr2.val()=="") {
			$errAddr2.empty();
			$("#addr2").css("background","white");
			errorCount -=1;
		}
		if ($state.val().length != 2) {
			$errState.empty().append('Required: Must contain a two-letter State abbreviation!');
			$("#state").css("background","pink");
			errorCount += 1;
		}
		if ($zip.val().length != 5) {
			$errZip.empty().append('Required: Must contain a 5 number Zip Code!');
			$("#zip").css("background","pink");
			errorCount += 1;
		}		
		if (!phonePattern.test($phone.val())) {
			$errPhone.empty().append('Numbers Only – No Spaces or Dashes');
			$("#phone").css("background","pink");
			errorCount += 1;
		}		
		if (!emailPattern.test($email.val())) {
			$errEmail.empty().append('Required: Must be a valid e-mail address!');
			$("#email").css("background","pink");
			errorCount += 1;
		}

		if(!(($cardType.val()) == 0)){
			var cardPattern =/^[0-9]{13,16}$/;			
			if (!cardPattern.test($cCard.val())) {
				$errCard.empty().append('Must contain a 13-16 digit number with no spaces or dashes!');
				$("#cCard").css("background","pink");
				errorCount += 1;
			}
			if($expMonth.val() == "month"){
				$errExpiration.empty().append('Must select a Month and Year!');
				$("#expMonth").css("background","pink");
				errorCount += 1;
			}
			if($expYear.val() == "year"){
				$errExpiration.empty().append('Must select a Month and Year!');
				$("#expYear").css("background","pink");
				errorCount += 1;
			}	
		}

		if(errorCount > 0){
			event.preventDefault();
			$errTotal.empty().append('Please edit the marked fields below to fix errors.<br><br>');
		}
	});

});