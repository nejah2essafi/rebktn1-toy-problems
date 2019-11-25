/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	var array= string.split("")
	var obj={}
	for(var i =0; i<array.length; i++){
		if(obj[array[i]]===undefined){
			obj[array[i]]=1
		}else {
			obj[array[i]]++
		}
	}
	for(var j=0;j<array.length;j++){
		for(var key in obj){
			if(obj[array[j]]!==1){
				array.splice(j,1)
			}
		}
	}
	return array[0]


  // TODO: your solution here
};
