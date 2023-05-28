type ReportOptions = {
  dateRanges: [DateRange, ...DateRange[]];
  metrics: [GA4.Metric["apiName"], ...GA4.Metric["apiName"][]];
  dimensions: [GA4.Dimension["apiName"], ...GA4.Dimension["apiName"][]];
};

async function runReport(
  propertyId: string,
  { options }: { options: ReportOptions }
) {
  const [url, body] = generateReportQuery(propertyId, options);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
}
