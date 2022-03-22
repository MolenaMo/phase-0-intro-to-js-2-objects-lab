// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
    
}

const employee2 = {...employee}

function updateEmployeeWithKeyAndValue(obj,key,value){
  
  return employee2
   }


function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){

    employee.streetAddress= '12 Broadway'
    return employee
}

const newEmployee = {...employee}
delete newEmployee.name
function deleteFromEmployeeByKey(employee,key){
 
  return newEmployee 
}

delete employee.name
function destructivelyDeleteFromEmployeeByKey(obj, key){
return employee.name
}