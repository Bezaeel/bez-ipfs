# `Bez-ipfs dApp`

This is the command line code for the Bez-ipfs decentralize app. It is a cli app

## 🚀 Quick Start

💿 Install all dependencies:
Because this `dapp` is part of an [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) 
you will need to run the install command from the base directory of the repository.

```sh
npm install 
```

> NOTE: To add more dependencies to this modules package.json, be sure to go through the npm workspace link above to know how.

✏ Next rename `.env.example` to `.env` in this module's root folder.

## 🚴‍♂️ Run your App:
Before starting your application, ensure you have built the contracts in the 
`contracts` modules. If not, this dapp will be fail with an error unable to resolve module.

You only need to do this once everytime there is a new change in the `contracts` module code
(ideally, once per pull from remote). To build the contracts module, go to the base directory of the repository and run:

```shell
npm run build -w @bez-ipfs/contracts
```

Once that is done, you can then run the below command to start up the application:

```sh
npm run start
```

