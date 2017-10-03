# monstergraph

It is fork JS part of the mxGraph library for bringing the modern techniques to the project.

Currently all old filese contain in "javascript" folder and all new in "src" folder.
In the current state, it is just concept but a HelloWorld example is working.


### Build

```bash
npm install
npm run build
```

also you can install rollup globaly and run directly:
```bash
npm install
npm install -g rollup
rollup -c
```

After that you can just open in browser dist/examples/helloworld.html .

### Extra

You can change rollup.config.js and build CommonJS/AMD/ES6 modules. Documentation here https://rollupjs.org/ .