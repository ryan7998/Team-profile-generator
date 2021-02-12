const getGitOrSchool = employeeItem =>{
    if(employeeItem.github){
        return `<li class="list-group-item">GitHub: <a href="https://www.github.com/${employeeItem.getGithub()}" target="_blank">${employeeItem.getGithub()}</a></li>`;
    }else if(employeeItem.school){
        return `<li class="list-group-item">School: ${employeeItem.getSchool()}</li>`;
    }else{
        return '';
    }
}

const getOtherData = otherEmployeeData =>{
    otherEmployeeDataString = "";
    otherEmployeeData.forEach(item => {
        otherEmployeeDataString += `
        <div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <div class="card-title p-3 bg-secondary text-white">
                        <h5>${item.getName()}</h5>
                        <h6>${item.getRole()}</h6>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${item.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${item.getEmail()}">${item.getEmail()}</a></li>
                        ${getGitOrSchool(item)}
                    </ul>
                </div>
            </div>
        </div>  
        `;
    });
    return otherEmployeeDataString;
}
module.exports = templateData => {
    const{managerData, otherEmployeeData} = templateData;
    return `<!doctype html>
    <html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

        <title>My Team</title>
    </head>
    
    <body>
        <div class="container">
        <div class="row p-3 mb-2 bg-primary text-white text-center"><h1>My Team</h1></div>

        <div class="row row-cols-1 row-cols-md-3 m-5">
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                    <div class="card-title p-3 bg-secondary text-white">
                        <h5>${managerData.getName()}</h5>
                        <h6>${managerData.getRole()}</h6>
                    </div>
                        <ul class="list-group">
                        <li class="list-group-item">ID: ${managerData.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${managerData.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>  
            </div>
            ${getOtherData(otherEmployeeData)}
        </div>

        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};