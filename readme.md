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

```json
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

### setup scss

```shell
/src/styles/index.scss
```

with example content

```scss
.my-header {
  color: purple;
}
```

usage in \_app.tsx

```tsx
import './../styles/index.scss';
```

usage in index.tsx

```tsx
<h1 className={my - header}></h1>
```
