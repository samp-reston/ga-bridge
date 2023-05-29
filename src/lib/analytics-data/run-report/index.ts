async function runReport(
  propertyId: string,
  options: RunReportRequestBody
): Promise<Partial<RunReportResponseBody>> {
  const [url, body] = generateReportQuery(propertyId, options);

  const runReportResponse = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const runReportJson = await runReportResponse.json();
  return runReportJson;
}
