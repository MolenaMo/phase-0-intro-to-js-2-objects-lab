// Write your solution in this file!
const employee = {
    name: 'name keeper',
    streetAddress: 'street sweeper',
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee

}

function deleteFromEmployeeByKey(employee,key){
    const erase = {...employee}
    delete erase[key]
    return erase
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
   delete employee[key]
   return employee
}

