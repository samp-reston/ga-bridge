import { AnalyticsData } from "../src";
import { expect, test } from "vitest";

test("Analytics Data is initialized", () => {
  const data = new AnalyticsData();
  expect(data).toBeDefined();
});
