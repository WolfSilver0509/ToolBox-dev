document.addEventListener('DOMContentLoaded', function() {
    
    if (elementExists('generateConnectionSpringBootData')) {
        document.getElementById('generateConfigBtn').addEventListener('click', function() {
            console.log("button click");
            const dbType = document.querySelector('input[name="dbType"]:checked').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const databaseName = document.getElementById('databaseName').value;
            const port = document.getElementById('port').value;

            let config = '';

            switch (dbType) {
                case 'mysql':
                    config = `
# Informations de connexion à la base de données MySQL
spring.datasource.url=jdbc:mysql://localhost:${port}/${databaseName}
spring.datasource.username=${username}
spring.datasource.password=${password}
                    `.trim();
                    break;
                case 'postgresql':
                    config = `
# Informations de connexion à la base de données PostgreSQL
spring.datasource.url=jdbc:postgresql://localhost:${port}/${databaseName}
spring.datasource.username=${username}
spring.datasource.password=${password}
                    `.trim();
                    break;
                case 'oracle':
                    config = `
# Informations de connexion à la base de données Oracle
spring.datasource.url=jdbc:oracle:thin:@localhost:${port}:${databaseName}
spring.datasource.username=${username}
spring.datasource.password=${password}
                    `.trim();
                    break;
                case 'mssql':
                    config = `
# Informations de connexion à la base de données Microsoft SQL Server
spring.datasource.url=jdbc:sqlserver://localhost:${port};databaseName=${databaseName}
spring.datasource.username=${username}
spring.datasource.password=${password}
                    `.trim();
                    break;
                case 'h2':
                    config = `
# Informations de connexion à la base de données H2 (en mémoire)
spring.datasource.url=jdbc:h2:mem:${databaseName}
spring.datasource.username=${username}
spring.datasource.password=${password}
                    `.trim();
                    break;
                default:
                    config = 'Database type not supported.';
                    break;
            }

            document.getElementById('outputData').value = config;
            console.log(config);
        });
    }



    // Convert Format Functionality
    if (elementExists('convertFormatBtn')) {
        document.querySelector('#convertFormatBtn').addEventListener('click', convertFormat);

        function convertFormat() {
            const inputData = document.getElementById('inputData').value;
            const inputFormat = document.getElementById('inputFormat').value;
            const outputFormat = document.getElementById('outputFormat').value;
            let parsedData;

            try {
                switch (inputFormat) {
                    case 'json':
                        parsedData = JSON.parse(inputData);
                        break;
                    case 'xml':
                        parsedData = xmlToJson(new DOMParser().parseFromString(inputData, 'application/xml'));
                        break;
                    case 'yaml':
                        parsedData = jsyaml.load(inputData);
                        break;
                    default:
                        throw new Error('Unsupported input format');
                }

                let outputData;
                switch (outputFormat) {
                    case 'json':
                        outputData = JSON.stringify(parsedData, null, 2);
                        break;
                    case 'xml':
                        outputData = jsonToXml(parsedData);
                        break;
                    case 'yaml':
                        outputData = jsyaml.dump(parsedData);
                        break;
                    default:
                        throw new Error('Unsupported output format');
                }

                document.getElementById('outputData').value = outputData;
            } catch (error) {
                alert('Error converting data: ' + error.message);
            }
        }

        function xmlToJson(xml) {
            let obj = {};
            if (xml.nodeType === 1) { // element
                if (xml.attributes.length > 0) {
                    obj["@attributes"] = {};
                    for (let j = 0; j < xml.attributes.length; j++) {
                        let attribute = xml.attributes.item(j);
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                }
            } else if (xml.nodeType === 3) { // text
                obj = xml.nodeValue;
            }
            if (xml.hasChildNodes()) {
                for (let i = 0; i < xml.childNodes.length; i++) {
                    let item = xml.childNodes.item(i);
                    let nodeName = item.nodeName;
                    if (typeof (obj[nodeName]) === "undefined") {
                        obj[nodeName] = xmlToJson(item);
                    } else {
                        if (typeof (obj[nodeName].push) === "undefined") {
                            let old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(xmlToJson(item));
                    }
                }
            }
            return obj;
        }

        function jsonToXml(json) {
            let xml = '';
            for (let prop in json) {
                if (!json.hasOwnProperty(prop)) continue;
                if (json[prop] == undefined) continue;
                xml += "<" + prop + ">";
                if (typeof json[prop] == "object")
                    xml += jsonToXml(new Object(json[prop]));
                else
                    xml += json[prop];
                xml += "</" + prop + ">";
            }
            return xml;
        }
    }

    // Hash Generator Functionality
    if (elementExists('generateHashBtn')) {
        document.querySelector('#generateHashBtn').addEventListener('click', generateHash);

        function generateHash() {
            const hashInput = document.getElementById('hashInput').value;
            const hashType = document.getElementById('hashType').value;
            let hash;

            if (hashType === 'md5') {
                hash = CryptoJS.MD5(hashInput);
            } else if (hashType === 'sha256') {
                hash = CryptoJS.SHA256(hashInput);
            } else {
                alert('Unsupported hash type');
                return;
            }

            document.getElementById('hashOutput').value = hash.toString();
        }
    }

    // URL Validator Functionality
    if (elementExists('validateUrlBtn')) {
        document.querySelector('#validateUrlBtn').addEventListener('click', validateURL);

        function validateURL() {
            const urlInput = document.getElementById('urlInput').value;
            const urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

            const isValid = urlPattern.test(urlInput);
            document.getElementById('urlValidationResult').textContent = isValid ? 'Valid URL' : 'Invalid URL';
        }
    }

    // UUID Generator Functionality
    if (elementExists('generateUuidBtn')) {
        document.querySelector('#generateUuidBtn').addEventListener('click', generateUUID);

        function generateUUID() {
            const uuid = URL.createObjectURL(new Blob()).substring(9);
            document.getElementById('uuidOutput').value = uuid;
        }
    }
});

function elementExists(id) {
    return document.getElementById(id) !== null;
}





