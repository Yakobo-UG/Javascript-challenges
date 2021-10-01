try {
    // Below statement will throw an Error
    callAPI();
} catch (error) {
    // Create a new error and throw
    throw new Error(error); 			// ReferenceError: callAPI is not defined
} finally {
    console.log('I will execute no matter what happened in try or catch');
}