const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	
	let result = [];
	let currArr = [];
	let currSum = 0;

	for(let num of arr){

		if(currSum+num > n){
			result.push(currArr);
			currArr = [num];
			currSum = num;
		}
		else{
		currArr.push(num);
		currSum += num;
		}
	}

    if(currArr.length > 0){
		result.push(currArr);
	}
    return result;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
