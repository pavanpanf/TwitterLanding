var age = [10,20,30,40,50,60,70,80,90];
	var result = [];
	var count = 0;
	var fun = function (array,value){
		for(var index = 0 ; index < age.length ; index++){
			if (age[index]>value){
				count++
				
				console.log("the age is "+age[index])
			}
		}
		console.log("total no of person above "+value+" is "+count);
	}

age.filter( age => age>=30 && age<=40 ? ture:false)