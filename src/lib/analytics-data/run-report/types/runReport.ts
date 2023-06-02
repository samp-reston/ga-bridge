import {
  DimensionBody,
  MetricBody,
  DateRange,
  MetricOrDimensionFilter,
  MetricAggregation,
  OrderBy,
  CohortSpec,
  CurrencyCode,
  DimensionHeader,
  MetricHeader,
  Row,
  ResponseMetaData,
  PropertyQuota,
} from "lib/analytics-data/types/analyticsData";

export type RunReportRequestBody = {
  dimensions: [DimensionBody, ...DimensionBody[]];
  metrics: [MetricBody, ...MetricBody[]];
  dateRanges: DateRange[];

  dimensionFilter?: MetricOrDimensionFilter<"dimension">;
  metricFilter?: MetricOrDimensionFilter<"metric">;
  metricAggregations?: MetricAggregation[];
  orderBys?: OrderBy[];
  cohortSpec?: CohortSpec;

  offset?: number;
  limit?: number;
  currencyCode?: CurrencyCode;
  keepEmptyRows?: boolean;
  returnPropertyQuota?: boolean;
};

export type RunReportResponseBody = {
  dimensionHeaders: DimensionHeader[];
  metricHeaders: MetricHeader[];
  rows: Row[];
  totals: Row[];
  maximums: Row[];
  minimums: Row[];
  rowCount: number;
  metadata: ResponseMetaData;
  propertyQuota: PropertyQuota;
  kind: "analyticsData#runReport";
};
