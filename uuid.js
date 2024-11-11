function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Generate UUID and store it in a JMeter variable
var uuid = generateUUID();
vars.put("UUID", uuid); // This will save the UUID as a JMeter variable named "UUID"
