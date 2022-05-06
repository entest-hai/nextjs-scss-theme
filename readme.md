# Getting started with NextJS and SCSS

### Init project nextjs

init project

```shell
npm init -y
```

install packages

```shell
npm install next react react-dom
```

support typescript

```shell
npm install --save-dev typescript @types/react @types/node
```

support scss by sass

```shell
npm install sass
```

setup .prettier.rc

```
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "cursorOffset": -1,
  "embeddedLanguageFormatting": "auto",
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}


```

update package.json

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}

```
