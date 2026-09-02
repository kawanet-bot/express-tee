import type * as declared from "express-tee"
import {strict as assert} from "node:assert"
import {createRequire} from "node:module"
import {test} from "node:test"
import * as m from "../lib/express-tee.ts"

const require = createRequire(import.meta.url)

// tsc fails here when a name declared in the published .d.ts is missing
// from the runtime entry -- the surface check derives from the declarations.
const runtime: typeof declared = m
void runtime

test("import entry (.mjs)", () => {
    assert.equal(typeof m.tee, "function")
})

test("require entry (.cjs)", () => {
    const m = require("express-tee")
    assert.equal(typeof m.tee, "function")
})
