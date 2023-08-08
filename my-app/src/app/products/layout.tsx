import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Layout Header</h1>
      {children}
      <h1>Layout Footer</h1>
    </div>
  );
}

export default Layout;
