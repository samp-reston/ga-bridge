type ReportOptions = {
  dateRanges: {
    startDate: string;
    endDate: string;
  }[];
  metrics: GA4.Metric["apiName"][];
  dimensions: GA4.Dimension["apiName"];
};

async function runReport(
  propertyId: string,
  { options }: { options: ReportOptions }
) {
  const reportUrl = generateReportUrl(propertyId);
  fetch(reportUrl, {
    method: "POST",
    body: JSON.stringify(options),
  });
}
