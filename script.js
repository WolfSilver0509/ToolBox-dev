// Vérifier si un élément existe
function elementExists(id) {
    return document.getElementById(id) !== null;
}

// // README Generator Functionality
// if (elementExists('readmeInput') && elementExists('readmeOutput')) {
//     document.querySelector('#generateReadmeBtn').addEventListener('click', generateReadme);
    
//     function generateReadme() {
//         const readmeInput = document.getElementById('readmeInput').value;
//         const readmeTemplate = `# Project Title

// ## Description
// ${readmeInput}

// ## Installation
// Describe the installation process

// ## Usage
// Provide instructions and examples for using your project

// ## License
// This project is licensed under the MIT License - see the LICENSE.md file for details`;

//         document.getElementById('readmeOutput').value = readmeTemplate;
//     }
// }

// // Fetch GitHub Stats Functionality
// if (elementExists('githubUsername') && elementExists('statsOutput')) {
//     document.querySelector('#fetchStatsBtn').addEventListener('click', fetchGithubStats);
    
//     function fetchGithubStats() {
//         const username = document.getElementById('githubUsername').value;
//         const apiUrl = `https://api.github.com/users/${username}`;

//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 const statsOutput = `
//                 <p><strong>Name:</strong> ${data.name}</p>
//                 <p><strong>Public Repos:</strong> ${data.public_repos}</p>
//                 <p><strong>Followers:</strong> ${data.followers}</p>
//                 <p><strong>Following:</strong> ${data.following}</p>
//                 <p><strong>Bio:</strong> ${data.bio}</p>
//                 `;
//                 document.getElementById('statsOutput').innerHTML = statsOutput;
//             })
//             .catch(error => {
//                 console.error('Error fetching GitHub stats:', error);
//                 document.getElementById('statsOutput').innerHTML = '<p>Error fetching GitHub stats.</p>';
//             });
//     }
// }

// // Convert Format Functionality
// if (elementExists('inputData') && elementExists('outputData')) {
//     document.querySelector('#convertFormatBtn').addEventListener('click', convertFormat);
    
//     function convertFormat() {
//         const inputData = document.getElementById('inputData').value;
//         const inputFormat = document.getElementById('inputFormat').value;
//         const outputFormat = document.getElementById('outputFormat').value;
//         let parsedData;

//         try {
//             switch (inputFormat) {
//                 case 'json':
//                     parsedData = JSON.parse(inputData);
//                     break;
//                 case 'xml':
//                     parsedData = xmlToJson(new DOMParser().parseFromString(inputData, 'application/xml'));
//                     break;
//                 case 'yaml':
//                     parsedData = jsyaml.load(inputData);
//                     break;
//                 default:
//                     throw new Error('Unsupported input format');
//             }

//             let outputData;
//             switch (outputFormat) {
//                 case 'json':
//                     outputData = JSON.stringify(parsedData, null, 2);
//                     break;
//                 case 'xml':
//                     outputData = jsonToXml(parsedData);
//                     break;
//                 case 'yaml':
//                     outputData = jsyaml.dump(parsedData);
//                     break;
//                 default:
//                     throw new Error('Unsupported output format');
//             }

//             document.getElementById('outputData').value = outputData;
//         } catch (error) {
//             alert('Error converting data: ' + error.message);
//         }
//     }

//     function xmlToJson(xml) {
//         let obj = {};
//         if (xml.nodeType === 1) {
//             if (xml.attributes.length > 0) {
//                 obj["@attributes"] = {};
//                 for (let j = 0; j < xml.attributes.length; j++) {
//                     let attribute = xml.attributes.item(j);
//                     obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
//                 }
//             }
//         } else if (xml.nodeType === 3) {
//             obj = xml.nodeValue;
//         }
//         if (xml.hasChildNodes()) {
//             for (let i = 0; i < xml.childNodes.length; i++) {
//                 let item = xml.childNodes.item(i);
//                 let nodeName = item.nodeName;
//                 if (typeof (obj[nodeName]) === "undefined") {
//                     obj[nodeName] = xmlToJson(item);
//                 } else {
//                     if (typeof (obj[nodeName].push) === "undefined") {
//                         let old = obj[nodeName];
//                         obj[nodeName] = [];
//                         obj[nodeName].push(old);
//                     }
//                     obj[nodeName].push(xmlToJson(item));
//                 }
//             }
//         }
//         return obj;
//     }

//     function jsonToXml(json) {
//         let xml = '';
//         for (let prop in json) {
//             if (!json.hasOwnProperty(prop)) continue;
//             if (json[prop] == undefined) continue;
//             xml += "<" + prop + ">";
//             if (typeof json[prop] == "object")
//                 xml += jsonToXml(new Object(json[prop]));
//             else
//                 xml += json[prop];
//             xml += "</" + prop + ">";
//         }
//         return xml;
//     }
// }

// // Hash Generator Functionality
// if (elementExists('hashInput') && elementExists('hashOutput')) {
//     document.querySelector('#generateHashBtn').addEventListener('click', generateHash);
    
//     function generateHash() {
//         const hashInput = document.getElementById('hashInput').value;
//         const hashType = document.getElementById('hashType').value;
//         let hash;

//         if (hashType === 'md5') {
//             hash = CryptoJS.MD5(hashInput);
//         } else if (hashType === 'sha256') {
//             hash = CryptoJS.SHA256(hashInput);
//         } else {
//             alert('Unsupported hash type');
//             return;
//         }

//         document.getElementById('hashOutput').value = hash.toString();
//     }
// }

// // URL Validator Functionality
// if (elementExists('urlInput') && elementExists('urlValidationResult')) {
//     document.querySelector('#validateUrlBtn').addEventListener('click', validateURL);
    
//     function validateURL() {
//         const urlInput = document.getElementById('urlInput').value;
//         const urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
//             '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
//             '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//             '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//             '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//             '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

//         const isValid = urlPattern.test(urlInput);
//         document.getElementById('urlValidationResult').textContent = isValid ? 'Valid URL' : 'Invalid URL';
//     }
// }

// // UUID Generator Functionality
// if (elementExists('uuidOutput')) {
//     document.querySelector('#generateUuidBtn').addEventListener('click', generateUUID);
    
//     function generateUUID() {
//         const uuid = URL.createObjectURL(new Blob()).substring(9);
//         document.getElementById('uuidOutput').value = uuid;
//     }
// }

// Color Picker Functionality
if (elementExists('colorInput') && elementExists('colorDisplay')) {
    document.getElementById('colorInput').addEventListener('change', updateColor);
    
    function updateColor() {
        const color = document.getElementById('colorInput').value;
        document.getElementById('colorDisplay').style.backgroundColor = color;
        document.getElementById('colorDisplay').textContent = color;
    }
}

// Minify CSS/JS Functionality
if (elementExists('codeInput') && elementExists('minifiedCodeOutput')) {
    document.querySelector('#minifyCodeBtn').addEventListener('click', minifyCode);
    
    function minifyCode() {
        const codeInput = document.getElementById('codeInput').value;
        const minifiedCode = codeInput.replace(/\s+/g, ' ').trim(); // Simple minification by removing extra spaces
        document.getElementById('minifiedCodeOutput').value = minifiedCode;
    }
}

// Mock Data Generator Functionality
if (elementExists('mockDataInput') && elementExists('mockDataOutput')) {
    document.querySelector('#generateMockDataBtn').addEventListener('click', generateMockData);
    
    function generateMockData() {
        const mockDataInput = document.getElementById('mockDataInput').value;
        try {
            const schema = JSON.parse(mockDataInput);
            const mockData = faker.helpers.contextualCard(); // Generate mock data based on schema
            document.getElementById('mockDataOutput').value = JSON.stringify(mockData, null, 2);
        } catch (error) {
            alert('Error generating mock data: ' + error.message);
        }
    }
}

// API Tester Functionality
if (elementExists('apiUrl') && elementExists('apiResponse')) {
    document.querySelector('#testApiBtn').addEventListener('click', testApi);
    
    function testApi() {
        const apiUrl = document.getElementById('apiUrl').value;
        const apiMethod = document.getElementById('apiMethod').value;
        const apiPayload = document.getElementById('apiPayload').value;

        fetch(apiUrl, {
            method: apiMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: apiMethod === 'GET' || apiMethod === 'DELETE' ? null : apiPayload
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error testing API:', error);
                document.getElementById('apiResponse').innerText = 'Error testing API: ' + error.message;
            });
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     if (elementExists('generateConnectionSpringBootData')) {
//         document.getElementById('generateConfigBtn').addEventListener('click', function() {
//             console.log("button click");
//             const dbType = document.querySelector('input[name="dbType"]:checked').value;
//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;
//             const databaseName = document.getElementById('databaseName').value;
//             const port = document.getElementById('port').value;

//             let config = '';

//             switch (dbType) {
//                 case 'mysql':
//                     config = `
// # Informations de connexion à la base de données MySQL
// spring.datasource.url=jdbc:mysql://localhost:${port}/${databaseName}
// spring.datasource.username=${username}
// spring.datasource.password=${password}
//                     `.trim();
//                     break;
//                 case 'postgresql':
//                     config = `
// # Informations de connexion à la base de données PostgreSQL
// spring.datasource.url=jdbc:postgresql://localhost:${port}/${databaseName}
// spring.datasource.username=${username}
// spring.datasource.password=${password}
//                     `.trim();
//                     break;
//                 case 'oracle':
//                     config = `
// # Informations de connexion à la base de données Oracle
// spring.datasource.url=jdbc:oracle:thin:@localhost:${port}:${databaseName}
// spring.datasource.username=${username}
// spring.datasource.password=${password}
//                     `.trim();
//                     break;
//                 case 'mssql':
//                     config = `
// # Informations de connexion à la base de données Microsoft SQL Server
// spring.datasource.url=jdbc:sqlserver://localhost:${port};databaseName=${databaseName}
// spring.datasource.username=${username}
// spring.datasource.password=${password}
//                     `.trim();
//                     break;
//                 case 'h2':
//                     config = `
// # Informations de connexion à la base de données H2 (en mémoire)
// spring.datasource.url=jdbc:h2:mem:${databaseName}
// spring.datasource.username=${username}
// spring.datasource.password=${password}
//                     `.trim();
//                     break;
//                 default:
//                     config = 'Database type not supported.';
//                     break;
//             }

//             document.getElementById('outputData').value = config;
//             console.log(config);
//         });
//     }
// });

// function elementExists(id) {
//     return document.getElementById(id) !== null;
// }


// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.neon-button');
//     const output = document.getElementById('output');

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             const text = this.getAttribute('data-text');
//             output.textContent = text;
//         });
//     });
// });


