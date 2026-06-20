// function createApp() {
//     console.log(appName);

//     if (!appName) {
//         var appName = "My App";
//     }

//     loadConfig();

//     function loadConfig() {
//         console.log(config);

//         if (!config) {
//             var config = {
//                 apiUrl: "/api",
//                 version: "1.0"
//             };
//         }

//         return config;
//     }

//     return {
//         appName,
//         config
//     };
// }

// console.log(createApp());

function createApp() {
    let appName = "My App"

    console.log(appName)

    const config = loadConfig()

    function loadConfig() {
        let config = {
            apiUrl: "/api",
            version: "1.0"
        }

        return config
    }

    return {
        appName,
        config
    }
}

console.log(createApp())