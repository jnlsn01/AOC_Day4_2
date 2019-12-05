var start = 147981;
var end = 691423;
var passdiff = 0;
const diffarray = [];

for(let current=start; current<=end; current++){
                let doublecheck = 0;
				let mystring = current.toString();
				let check1 = Number(mystring.substr(0,1));
				let check2 = Number(mystring.substr(1,1));
				let check3 = Number(mystring.substr(2,1));
				let check4 = Number(mystring.substr(3,1));
				let check5 = Number(mystring.substr(4,1));
				let check6 = Number(mystring.substr(5,1));
				if (check1 <= check2){
					if (check1 === check2) doublecheck = 1;
						if (check2 <= check3){
						if (check2 === check3) doublecheck = 1;
						if (check3 <= check4){
							if (check3 === check4) doublecheck = 1;
							if (check4 <= check5){
								if (check4 === check5) doublecheck = 1;
								if (check5 <= check6){
									if (check5 === check6) doublecheck = 1;
									if (doublecheck === 1) {
										passdiff++;
										diffarray.push(current);
									}
								}
							}
						}
				}
            }
};

var passdiff2 = 0;
for(mynum of diffarray) {
	let singlecheck = 0;
	let doublecheck = 0;
	let triplecheck = 0;
	let quadcheck = 0;
	let fifthcheck = 0;
	//let sixthcheck = 0;
	let mystring = mynum.toString();
	let check1 = Number(mystring.substr(0,1));
	let check2 = Number(mystring.substr(1,1));
	let check3 = Number(mystring.substr(2,1));
	let check4 = Number(mystring.substr(3,1));
	let check5 = Number(mystring.substr(4,1));
	let check6 = Number(mystring.substr(5,1));
	
	if (check1 === check2) {
		singlecheck++;
		if (check1 === check3){
			singlecheck++;
			if (check1 === check4) {
				singlecheck++;
				if (check1 === check5) {
					singlecheck++;
					if (check1 === check6) singlecheck++;
				}
			}
		}
	}
	if (check2 === check3){
		doublecheck++;
		if (check2 === check4) {
			doublecheck++;
			if (check2 === check5) {
				doublecheck++;
				if (check2 === check6) doublecheck++;
			}
		}
	}
	if (check3 === check4) {
		triplecheck++;
		if (check3 === check5) {
			triplecheck++;
			if (check3 === check6) triplecheck++;
		}
	}
	if (check4 === check5) {
		quadcheck++;
		if (check4 === check6) quadcheck++;
	}
	if (check5 === check6) fifthcheck++;

	if ((singlecheck === 2) || (doublecheck === 2) || (triplecheck === 2) || (quadcheck === 2) || (fifthcheck === 2)) passdiff2++;
};

//157799
//console.log(diffarray);
console.log("Part 1: " , passdiff);
console.log("Part 2: " , passdiff2);
