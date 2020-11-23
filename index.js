// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, {[key]: value} )
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromDriverByKey(obj, key){
    let nObj = Object.assign({}, obj)
    delete nObj[key]
    return nObj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}