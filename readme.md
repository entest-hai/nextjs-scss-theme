# NextJS theme by SCSS and Selection

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

### Hello scss

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
<h1 className={'my-header'}></h1>
```

### Theme by SCSS variable and selection

```scss
.my-header {
  color: purple;
}

[entest-docs='dark'] {
  background-color: orange;
}
```

add a button to check

```tsx
import * as React from 'react';

const HomePage = () => {
  React.useEffect(() => {
    document.documentElement.setAttribute('entest-docs', '');
  }, []);

  return (
    <div>
      <h1 className="my-header">This is Hai Tran</h1>
      <button
        onClick={() => {
          document.documentElement.setAttribute('entest-docs', 'orange');
        }}
        style={{
          backgroundColor: 'orange',
        }}
      >
        Click Orange Theme
      </button>
      <button
        onClick={() => {
          document.documentElement.setAttribute('entest-docs', 'aqua');
        }}
        style={{
          backgroundColor: 'aqua',
        }}
      >
        Click Aqua Theme
      </button>
    </div>
  );
};

export default HomePage;
```
