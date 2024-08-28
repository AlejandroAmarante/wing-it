const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  executeCommand: (command, callback) => {
    ipcRenderer.invoke("execute-command", command).then(callback);
  },
});
