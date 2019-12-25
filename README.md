# dummylib

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Generate Lib
Two scripts:

Build ALL project:
```
    "build-lib":"vue-cli-service build --target lib --name dummyButton src/main.ts --mode production",
```

Build ONLY component:
```
    "generate-lib":"vue-cli-service build --target lib --name dummyButton src/components/DummyButton.vue --mode production"
```
    
