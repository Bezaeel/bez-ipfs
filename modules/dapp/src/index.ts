import * as readline from 'readline';
import { Bootstrap } from "./bootstrap";


// const ipfs = IPFS.create();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('please enter file directory: ', async (answer) => {
    // validator will be the file's existence
    
    // then simulate
    const bt = new Bootstrap();
    const file = bt.uploadFile(answer);
    if(file !== undefined) {
        bt.simulate(file);
    }
    rl.close();

})