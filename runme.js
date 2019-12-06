var start = 147981;
var end = 691423;
var passdiff = 0;
var passdiff2 = 0;
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
										let diffarray2 = [];
										passdiff++;
										diffarray2.push(check1, check2, check3, check4, check5, check6);
										let met = 0;
										if (diffarray2[0] == diffarray2[1]) {
											if (diffarray2[1] != diffarray2[2]) {
												met = 1;
												passdiff2++;
											}
										}
										if (met ===0) {
										if (diffarray2[1] == diffarray2[2]) {
											if ((diffarray2[0] != diffarray2[1]) && (diffarray2[2] != diffarray2[3])) {
												met = 1;
												passdiff2++;
											}
										}
										}
										if (met ===0) {
										if (diffarray2[2] == diffarray2[3]) {
											if ((diffarray2[1] != diffarray2[2]) && (diffarray2[3] != diffarray2[4])) {
												met = 1;
												passdiff2++;
											}
										}
										}
										if (met ===0) {
										if (diffarray2[3] == diffarray2[4]) {
											if ((diffarray2[2] != diffarray2[3]) && (diffarray2[4] != diffarray2[5])) {
												met = 1;
												passdiff2++;
											}
										}
										}
										if (met ===0) {
										if (diffarray2[4] == diffarray2[5]) {
											if (diffarray2[3] != diffarray2[4]) passdiff2++;
										}
										}
									}
								}
							}
						}
				}
            }
};

console.log("Part 1: " , passdiff);
console.log("Part 2: " , passdiff2);
