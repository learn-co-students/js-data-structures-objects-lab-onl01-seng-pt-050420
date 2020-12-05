const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
    const newObj ={...obj};
    newObj[key] = value;
    
    return newObj;
}


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromDriverByKey(obj, key, value){
    return Object.assign({}, obj, 
        {[key]: value});
}

function destructivelyDeleteFromDriverByKey(obj, key, value){
    obj[key] = value;
    return obj;
}