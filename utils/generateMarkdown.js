// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseString = "";
  switch (license) {
    case "Apache":
      licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      return licenseString;
    case "Eclipse":
      licenseString = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      return licenseString;
    case "GNU":
      licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      return licenseString;
    case "The Artistic License":
      licenseString = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      return licenseString;
    case "MIT":
      licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      return licenseString;
    case "Mozilla":
      licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      return licenseString;
    case "Open Database License":
      licenseString = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
      return licenseString;
    default:
      return licenseString;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, github) {
  let licenseSection = "";
  switch (license) {
    case "Apache":
      licenseSection = `Copyright 2022 ${github}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`;
      return licenseSection;
    case "Eclipse":
      licenseSection = `Eclipse Public License - v 2.0`;
      return licenseSection;
    case "GNU":
      licenseSection = `  Copyright (C) 2022  ${github}

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.`;
      return licenseSection;
    case "The Artistic License":
      licenseSection = `Copyright (c) 2022, ${github}
`;
      return licenseSection;
    case "MIT":
      licenseSection = `Copyright 2022 ${github}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
      return licenseSection;
    case "Mozilla":
      licenseSection = `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

      `;
      return licenseSection;
    case "Open Database License":
      licenseSection = `This ${title} is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/`;
      return licenseSection;

    default:
      return licenseSection;
  }
}

// Function to generate markdown for README
function generateMarkdown({
  email,
  title,
  license,
  installation,
  description,
  usage,
  tests,
  github,
  contribution,
}) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseText = renderLicenseSection(license);
  return `# ${title}
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
  ## Description
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${licenseBadge}
  <br/>
  ${licenseText}
  ## Contribution
  ${contribution}
  ## Tests
  ${tests}
  ## Questions
  For questions, please contact me via email at ${email}
  Follow me on GitHub: ${github}

`;
}

module.exports = generateMarkdown;
