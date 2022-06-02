const inventory = [

    {type:   "machine", value: 5000},
  
  
    {type:   "machine", value:  650},
  
  
    {type:      "duck", value:   10},
  
  
    {type: "furniture", value: 1200},
  
  
    {type:   "machine", value:   77}
  
  
  ]
  
let machineType=inventory.filter( a=>a.type=='machine');

console.log(machineType);
let totalMachineValue = machineType.reduce((totalMachineValue,item)=> totalMachineValue+item.value,0)
  console.log(totalMachineValue)
