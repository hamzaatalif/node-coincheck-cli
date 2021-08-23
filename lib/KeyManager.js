const configStore = require("configstore")
const pkg = require("../package.json");

class KeyManager {
    constructor() {
        this.conf = new configStore(pkg.name);
    }

    setKey(key) {
        this.conf.set("apiKey",key);
        return key;
    }

    getKey() {
        const key = this.conf.get("apiKey");

        if(!key) {
            throw new Error("No API Key Found - Get your API Key at https://nomics.com")
        }

        return key;
    }

    deleteKey() {
        const key = this.conf.get("apiKey");

        if(!key) {
            throw new Error("No API Key Found - Get your API Key at https://nomics.com")
        }

        this.conf.delete("apiKey");

        return;
    }
}


module.exports = KeyManager;