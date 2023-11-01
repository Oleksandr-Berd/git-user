import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      ui: string;
      text: string;
      body: string;
      component: string;
    };
  }
}
