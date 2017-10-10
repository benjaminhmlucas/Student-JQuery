function area(ht, wth)
{
	var area = ht * wth;
	return area;
}

var alphabet = [26];
for(var count = 0;count<26;count++)
{
	alphabet[count] = String.fromCharCode(count + 65);
}

$(document).ready(function(){
	$("#letters").addClass("christmas");
	$("#calculation").addClass("easter");
});