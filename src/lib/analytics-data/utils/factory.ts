const ANALYTICS_DATA_ENPOINT = process.env.ANALYTICS_DATA_ENPOINT || "";

function generateReportUrl(
  propertyId: string
): `${typeof ANALYTICS_DATA_ENPOINT}/properties/${string}:runReport` {
  return `${ANALYTICS_DATA_ENPOINT}/properties/${propertyId}:runReport`;
}

function generateReportQuery(
  propertyId,
  options
): [ReturnType<typeof generateReportUrl>, RunReportBody] {
  return [generateReportUrl(propertyId), "hi"];
}
