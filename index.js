// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(drivers, key, value) {
    return Object.assign({}, drivers, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newObject = Object.assign({}, driver);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    Object.assign({}, driver);
    delete driver[key];
    return driver;
}