import { AsBind } from "as-bind";

const wasm = fetch("build/untouched.wasm");

const asyncTask = async () => {
  const asBindInstance = await AsBind.instantiate(wasm);

  // You can now use your wasm / as-bind instance!
  const response = asBindInstance.exports.myExportedFunctionThatTakesAString(
    "Hello World!"
  );
  console.log(response); // AsBind: Hello World!
};
asyncTask();