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
          document.documentElement.setAttribute('entest-docs', 'dark');
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default HomePage;
