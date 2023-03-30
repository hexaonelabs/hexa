<img src="./apps/browser/src/assets/images/logo-colored.svg" />

# d-workspace - Decentralized Cloud Solution 

> Censorship-resistant, tamper-proof and privacy compliant cloud solution, open-source, fully decentralized and built on top of InterPlanetary File System (IPFS) 

## Project Description
d-workspace is a fully decentralized and open-source cloud solution which replace traditional cloud providers having centralized governance, cumbersome infrastructure, inadequate security and privacy measures with users datasets. 

d-workspace is build on top of IPFS and inherits all the features of Blockchain Technology to emerge as an immutable, censorship-resistant, tamper-proof and privacy complient with user dataset.

## Value Proposition
d-workspace integrat IPFS Core powered by Filecoin to enable users to store, manage and share their datas in a decentralized way. Few of the core value propositions are:

- Increased User Adoption: 
  Providing a smooth and intuitive process with seamless user experience to store, manage and share datas in a decentralized way will increase the adoption of IPFS and Filecoin.

- Real-world utility: 
  d-workspace provide a real-world utility for censorship-resistant, tamper-proof and privacy complient cloud solution by providing multi services composition that allow users to manage datas with total privacy and security controls of access by using Encryption and Decryption technologies to increase data acces security.

## 👀 Overview

<img src="./tools/images/d-workspace-screenshot-001.png" />

## 🚀 Features

<details>
  <summary><b>File Management</b></summary>

  - [x] Create folder
  - [x] Delete folder
  - [x] Rename folder
  - [x] Move folder
  - [x] List files from folder
  - [x] Search files in folder
  - [x] Upload files to specific folder
  - [x] Download file
  - [x] Delete file
  - [x] Rename file
  - [x] Move file
  - [x] Share copy file with public url link
  - [x] Download page for public IPFS hosted file
  - [x] Share copy file with custom access controls
  - [x] Notify user from shared encrypted file
  - [x] Preview file in app

</details>

<details>
  <summary><b>NFTs Management</b></summary>

  - [x] List NFTs from connected wallet
  - [x] Preview NFTs detail information
  - [x] Search NFTs by name
  - [x] Filter NFTs by chain

</details>

<details>
  <summary><b>Tokens Management</b></summary>

  - [x] List tokens from connected wallet
  - [x] List tokens from others wallet (watch mode)
  - [x] Get realtime tokens price
  - [x] Display tokens price 24h change in percents

</details>

<details>
  <summary><b>Others</b></summary>

  - [x] EVM chain support
  - [x] Shared file Notifications
  - [x] Data encryption 
  - [x] Files access control with wallet address
  - [x] Desktop app support using PWA technology
  - [x] Define IPFS service with user API Key

</details>


## Technology Stack

- [IFPS Core](https://js.ipfs.tech) Browser implementation of the IPFS protocol to manage files storage and retrieval to IPFS network 
- [Pinata](https://pinata.cloud) Default pinning CID service to pin files to IPFS network
- [Web3.storage](https.//web3.storage) Alternative pinning CID service available and configurable with user API Key
- [Ceramic](https://ceramic.network) Decentralized database to manage storage metadata files and user profile data
- [XMTP](https://xmtp.org/) Decentralized messaging service to manage in app notifications and messaging
- [Ceramic 3id Connect](https://github.com/ceramicstudio/js-3id) Decentralized authentication service to manage user identity and Cryptography Access Control
- [Ethersjs](https://docs.ethers.io/v5/) Ethereum SDK to manage Web3 wallet connection and account management 
- [Web3 onBoard](https://onboard.blocknative.com/) SDK to onboard users to web3 apps
- [Covalent](https://www.covalenthq.com) Unified API bringing visibility to billions Web3 data points
- [Valist](https://app.valist.io/) Software distribution tool to manage releases and updates hosted on IPFS

## Usage & Installation

d-workspace is a web application that can be used in any modern browser. 

You can also install d-workspace as a desktop application using Progressive Web App (PWA) technology by click `install` icon from browser url section or from `options` section of your browser. You can find more informations about PWA installation and specification [here](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen).

**Distribution link to install d-workspace PWA application:** [https://app.valist.io/d-workspace/d-workspace-pwa](https://app.valist.io/d-workspace/d-workspace-pwa) (click launch button)

## Development

- Clone the d-workspace repository
- Install dependencies using NodeJS and NPM
- Install Nx Workspace CLI to manage workspace project
- Provide environment variables in `.env` file (see `Environment Variables` section)
- Run developpment server using `nx serve` command will open the d-workspace application in the browser
- This project was generated using [Nx Workspace](https://nx.dev).

## Build
- Run `nx build:browser` to build the d-workspace application for the browser as PWA. 

The build artifacts will be stored in the `dist/` directory.

## Deployment 

d-workspace is deployed automatically using Github Actions. Every commit to the `main` branch will trigger a new deployment.

## Documentation

- Run `npm run docs:browser` to generate the appplication documentation

The documentation will be generate in the `dist/` directory. Open the `dist/compodoc/browser/index.html` file in browser to see the documentation as website.

## Environment Variables

Environment variables are set in the `.env` file in the root of the project. The following file  `.env.example` at the root of the project contains the list of environment variables used in the project with example values. 

Environment variables can be update for each mode. Go to the `environment` folder and update the `environment.{MODE}.ts` file to change the environment variables for the desired mode.

## Contributing

Thanks for taking the time to help out and improve the project! 🎉

The following is a set of guidelines for contributions and may change over time. Feel free to suggest improvements to this document in a pull request!

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

Project is Open Source and available under the [MIT License](LICENSE).

## Team

- [**@fazionico**](https://github.com/FazioNico) - **Nicolas Fazio** 
  
  Software Architect & Blockchain Developer

  Mr. Fazio is a software architect and blockchain developer with over 15 years of industry experience. He has worked on a variety of projects ranging from cloud enterprise software to blockchain applications focusing last 3 years exclusively in the Web 3 industry. He is passionate about building decentralized solutions and is currently working on the d-workspace project.

  LinkedIn: [https://www.linkedin.com/in/fazio-nicolas/](https://www.linkedin.com/in/fazio-nicolas/)

## Support

If you like this project, please consider supporting it by giving a ⭐️ on Github and sharing it with your friends! 