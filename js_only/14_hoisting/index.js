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
    let appName

    if (!appName) {
        appName = "My App"
    }

    console.log(appName)

    const config = loadConfig()

    function loadConfig() {
        let config

        if (!config) {
            config = {
                apiUrl: "/api",
                version: "1.0"
            }
        }

        return config
    }

    return {
        appName,
        config
    }
}

console.log(createApp())