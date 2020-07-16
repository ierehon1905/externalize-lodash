import { get } from "lodash";
import { get as esGet } from "lodash-es";
import dotget from "lodash.get";
import slashGet from "lodash/get";
import esSlashGet from "lodash-es/get";
import isempty from "lodash.isempty";
import { add } from "lodash";
import slashAdd from "lodash/add";
import { add as esAdd } from "lodash-es";
import esSlashAdd from "lodash-es/add";
import { add as fpAdd } from "lodash/fp";
import fpSlashAdd from "lodash/fp/add";

const testObj = { a: { b: 100 } };

function logError(msg) {
  console.error("TEST_FAIL: ", msg);
}

function logPass(msg) {
  console.log("TEST_PASS: ", msg);
}

/**
 * @param {Function} fn
 * @param {String} fnName
 */
function testGet(fn, fnName) {
  if (fn === undefined) {
    return logError(`${fnName} is undefined`);
  }
  const r = fn(testObj, "a.b");
  if (r === 100) {
    logPass(`${fnName} passed`);
  } else {
    logError(`${fnName} equal to ${r} expected 100`);
  }
}

/**
 * @param {Function} fn
 * @param {String} fnName
 */
function testIsEmpty(fn, fnName) {
  if (fn === undefined) {
    return logError(`${fnName} is undefined`);
  }
  const r = fn(testObj);
  if (r === false) {
    logPass(`${fnName} passed`);
  } else {
    logError(`${fnName} equal to ${r} expected false`);
  }
}

/**
 * @param {Function} fn
 * @param {String} fnName
 */
function testAdd(fn, fnName) {
  if (fn === undefined) {
    return logError(`${fnName} is undefined`);
  }
  const r = fn(1, 2);
  if (r === 3) {
    logPass(`${fnName} passed`);
  } else {
    logError(`${fnName} equal to ${r} expected false`);
  }
}

/**
 * @param {Function} fn
 * @param {String} fnName
 */
function testFpAdd(fn, fnName) {
  if (fn === undefined) {
    return logError(`${fnName} is undefined`);
  }
  const r = fn(1)(2);
  if (r === 3) {
    logPass(`${fnName} passed`);
  } else {
    logError(`${fnName} equal to ${r} expected false`);
  }
}

// this is invoked by puppeteer
window.run = () => {
  testGet(get, "get");
  testGet(esGet, "esGet");
  testGet(dotget, "dotget");
  testGet(slashGet, "slashGet");
  testGet(esSlashGet, "esSlashGet");
  testIsEmpty(isempty, "isempty");
  testAdd(add, "add");
  testAdd(slashAdd, "slashAdd");
  testAdd(esAdd, "esAdd");
  testAdd(esSlashAdd, "esSlashAdd");
  testFpAdd(fpAdd, "fpAdd");
  testFpAdd(fpSlashAdd, "fpSlashAdd");
};
