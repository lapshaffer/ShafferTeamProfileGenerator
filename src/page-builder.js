const managerArray = [];
const engineersArray = [];
const internsArray = [];

// Goes though the teamMembers array and sorts them into the above arrays by their role
function sortEmployees(array) {
    for (let i = 0; i < array.length; i++) {
        let newEmployee = array[i].getRole();

        if (newEmployee === 'Manager') {
            managerArray.push(array[i]);
        } else if (newEmployee === 'Engineer') {
            engineersArray.push(array[i]);
        } else {
            internsArray.push(array[i]);
        }
    }

    return generateHtml(managerArray, engineersArray, internsArray);

}
// generates the bootstrap card for the team's manager
function managerGenerate(manager) {
    return `
    <div class="card m-3 col-3">
        <div class="p-3">
            <h2>${manager[0].name}</h2>
            <h3><i class="fas fa-tasks"></i>  ${manager[0].getRole()}</h3>
        </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager[0].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a></li>
                <li class="list-group-item">Office Number: ${manager[0].officeNumber}</li>
            </ul>
        </div>
    </div>
    `
}
// generates the bootstrap card for each team engineer
function engineerGenerate(engineer) {
    let engineerGenerateStr = '';
    // Loop through the array of engineers and add the appropriate boostrap card to the HTML file for each engineer
    for (let i = 0; i < engineer.length; i++) {
        engineerGenerateStr = engineerGenerateStr + `
    <div class="card m-3 col-3">
        <div class="p-3">
            <h2>${engineer[i].name}</h2>
            <h3><i class="fas fa-terminal"></i> ${engineer[i].getRole()}</h3>
        </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer[i].id}</li >
                <li class="list-group-item">Email: <a href="mailto:${engineer[i].email}">${engineer[i].email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer[i].github}" target="_blank">${engineer[i].github}</a></li>
            </ul >
        </div>
    </div >
        `
    }
    return engineerGenerateStr;

};
// generates the bootstrap card for each team intern
function internGenerate(intern) {
    let internGenerateStr = '';
    // Loop through the array of interns and add the appropriate boostrap card to the HTML file for each intern
    for (let i = 0; i < intern.length; i++) {
        internGenerateStr = internGenerateStr + `
    <div class="card m-3 col-3">
        <div class="p-3">
            <h2>${intern[i].name}</h2>
            <h3><i class="fas fa-university"></i> ${intern[i].getRole()}</h3>
        </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern[i].id}</li >
                <li class="list-group-item">Email: <a href="mailto:${intern[i].email}">${intern[i].email}</a></li>
                <li class="list-group-item">School: ${intern[i].school}</li>
            </ul>
        </div>
    </div >
        `
    }
    return internGenerateStr;
}
// Generate the HTML file that will overwrite ./dist/team.html upon completion of the inquirer prompts
function generateHtml(manager, engineer, intern) {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/e79245cba1.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
        </head>
        <body>
            <header>
                <h1 class="text-center py-5">My Team</h1>
            </header>
            <main class="container my-5">
                <div class="row d-flex justify-content-around">
                    ${managerGenerate(manager)}
                    ${engineerGenerate(engineer)}
                    ${internGenerate(intern)}
                </div>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
            </main>
        </body>
    </html>`;
}

// export the sortEmployees and generateHTML functions so they can be called by our inquire.js
module.exports = {sortEmployees, generateHtml};