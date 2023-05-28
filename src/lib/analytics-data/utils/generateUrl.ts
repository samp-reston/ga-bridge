const ANALYTICS_DATA_ENPOINT = process.env.ANALYTICS_DATA_ENPOINT || "";

function generateReportUrl(
  propertyId: string
): `${typeof ANALYTICS_DATA_ENPOINT}/properties/${string}:runReport` {
  return `${ANALYTICS_DATA_ENPOINT}/properties/${propertyId}:runReport`;
}
