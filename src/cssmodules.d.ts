// so typescript files can use scoped css modules
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  