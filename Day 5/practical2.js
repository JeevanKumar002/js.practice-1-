let example = "javascript";

function practiceScope() {
    // Function scope
    let topic = "scopes";
    console.log(example + " - " + topic);
    
    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail);
    }
    console.log(detail); //not works outside the function
}

practiceScope();