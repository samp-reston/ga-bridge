import { RunReportRequestBody } from "../types/runReport";

const ANALYTICS_DATA_ENPOINT = process.env.ANALYTICS_DATA_ENPOINT || "";

function generateReportUrl(
  propertyId: string
): `${typeof ANALYTICS_DATA_ENPOINT}/properties/${string}:runReport` {
  if (!propertyId) {
    throw new Error(`Invalid Property ID: ${propertyId}`);
  }
  return `${ANALYTICS_DATA_ENPOINT}/properties/${propertyId}:runReport`;
}

function generateReportQuery(
  propertyId: string,
  options: RunReportRequestBody
): [ReturnType<typeof generateReportUrl>, RunReportRequestBody] {
  return [generateReportUrl(propertyId), options];
}
