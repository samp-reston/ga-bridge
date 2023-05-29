export class AnalyticsData {
  public options = {};

  constructor(options) {
    this.options = options;
  }

  public async runReport(propertyId: string, options: any): Promise<any> {
    const [url, body] = generateReportQuery(propertyId, options);

    const runReportResponse = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const runReportJson = await runReportResponse.json();
    return runReportJson;
  }
}
