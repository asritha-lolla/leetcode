

const defangIPAddress=(address)=>{
return address.replaceAll('.','[.]');
}

console.log(defangIPAddress("1.1.1.1"));