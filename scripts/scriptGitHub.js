document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element exists
    function elementExists(id) {
        return document.getElementById(id) !== null;
    }

    // Function to handle button clicks and display text
    const buttons = document.querySelectorAll('.neon-button');
    const output = document.getElementById('output');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            output.innerHTML = text;
        });
    });

    // README Generator Functionality
    if (elementExists('readmeGenerator')) {
        document.querySelector('#generateReadmeBtn').addEventListener('click', generateReadme);

        function generateReadme() {
            const readmeInput = document.getElementById('readmeInput').value;
            const readmeTemplate = `# Project Title

## Description
${readmeInput}

## Installation
Describe the installation process

## Usage
Provide instructions and examples for using your project

## License
This project is licensed under the MIT License - see the LICENSE.md file for details`;

            document.getElementById('readmeOutput').value = readmeTemplate;
        }
    }

    // Fetch GitHub Stats Functionality
    if (elementExists('githubUsername') && elementExists('statsOutput')) {
        document.querySelector('#fetchStatsBtn').addEventListener('click', fetchGithubStats);

        function fetchGithubStats() {
            const username = document.getElementById('githubUsername').value;
            const apiUrl = `https://api.github.com/users/${username}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const statsOutput = `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                    <p><strong>Followers:</strong> ${data.followers}</p>
                    <p><strong>Following:</strong> ${data.following}</p>
                    <p><strong>Bio:</strong> ${data.bio}</p>
                    `;
                    document.getElementById('statsOutput').innerHTML = statsOutput;
                })
                .catch(error => {
                    console.error('Error fetching GitHub stats:', error);
                    document.getElementById('statsOutput').innerHTML = '<p>Error fetching GitHub stats.</p>';
                });
        }
    }
});
