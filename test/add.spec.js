import { describe, it, expect } from "vitest";
import { add } from "../src/add";

describe("add function", () => {
	it("adds two numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
});
