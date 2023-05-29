type RunReportRequestBody = {
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

type RunReportResponseBody = {
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

type MetricOrDimensionFilter<T extends "metric" | "dimension"> = {
  andGroup?: AndGroup<T>;
  orGroup?: OrGroup<T>;
  notExpression?: NotExpression<T>;
  filter?: Filter<T>;
};

type AndGroup<T extends "metric" | "dimension"> = {
  expressions: MetricOrDimensionFilter<T>[];
};

type OrGroup<T extends "metric" | "dimension"> = {
  expressions: MetricOrDimensionFilter<T>[];
};

type NotExpression<T extends "metric" | "dimension"> =
  MetricOrDimensionFilter<T>;

type DateRange = { startDate: DateString; endDate: DateString; name?: string };
type DateString =
  | `${string}-${string}-${string}`
  | `${string}daysAgo`
  | "yesterday"
  | "today";

type MetricBody = {
  name: GA4.Metric["apiName"];
  expression?: string;
  invisible?: boolean;
};

type DimensionBody = {
  name: GA4.Dimension["apiName"];
  dimensionExpression?: DimensionExpression;
};

type DimensionExpression = {
  lowerCase?: {
    dimensionName: GA4.Dimension["apiName"];
  };
  upperCase?: {
    dimensionName: GA4.Dimension["apiName"];
  };
  concatenate?: {
    dimensionNames: GA4.Dimension["apiName"][];
    delimiter?: string;
  };
};

type Filter<T extends "metric" | "dimension"> = {
  betweenFilter?: BetweenFilter;
  fieldName?: T extends "metric"
    ? GA4.Metric["apiName"]
    : GA4.Dimension["apiName"];
  inListFilter?: InListFilter;
  numericFilter?: NumericFilter;
  stringFilter?: StringFilter;
};

type MatchType =
  | "EXACT"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "FULL_REGEXP"
  | "PARTIAL_REGEXP";

type StringFilter = {
  matchType?: MatchType;
  value: string;
  caseSensitive: boolean;
};

type InListFilter = {
  values: string[];
  caseSensitive: boolean;
};

type Operation =
  | "EQUAL"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUAL"
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "BETWEEN"
  | "IN_LIST";

type NumericValue =
  | {
      int64Value: number;
    }
  | {
      doubleValue: number;
    };

type NumericFilter = {
  operation: Operation;
  value: NumericValue;
};

type BetweenFilter = {
  fromValue: NumericValue;
  toValue: NumericValue;
};

type MetricAggregation = "TOTAL" | "MINIMUM" | "MAXIMUM" | "COUNT";

type OrderBy =
  | {
      desc: boolean;
      metric: MetricOrderBy;
    }
  | {
      desc: boolean;
      dimension: DimensionOrderBy;
    }
  | {
      desc: boolean;
      pivot: PivotOrderBy;
    };

type MetricOrderBy = {
  metricName: GA4.Metric["apiName"];
};

type DimensionOrderBy = {
  dimensionName: GA4.Dimension["apiName"];
  orderType: OrderType;
};

type OrderType = "ALPHANUMERIC" | "CASE_INSENSITIVE_ALPHANUMERIC" | "NUMERIC";

type PivotOrderBy = {
  metricName: GA4.Metric["apiName"];
  pivotSelections: PivotSelection[];
};

type PivotSelection = {
  dimensionName: GA4.Dimension["apiName"];
  dimensionValue: string;
};

type CohortSpec = {
  cohorts: Cohort[];
  cohortsRange: CohortsRange;
  cohortReportSettings: CohortReportSettings;
};

type Cohort = {
  name: string;
  dimension: GA4.Dimension["apiName"];
  dateRange: DateRange;
};

type CohortsRange = {
  granularity: Granularity;
  startOffset: number;
  endOffset: number;
};

type Granularity = "DAILY" | "WEEKLY" | "MONTHLY";

type CohortReportSettings = {
  accumulate: boolean;
};

type CurrencyCode =
  | "USD"
  | "AED"
  | "ARS"
  | "AUD"
  | "BGN"
  | "BOB"
  | "BRL"
  | "CAD"
  | "CHF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CZK"
  | "DKK"
  | "EGP"
  | "EUR"
  | "FRF"
  | "GBP"
  | "HKD"
  | "HRK"
  | "HUF"
  | "IDR"
  | "ILS"
  | "INR"
  | "JPY"
  | "KRW"
  | "LTL"
  | "MAD"
  | "MXN"
  | "MYR"
  | "NOK"
  | "NZD"
  | "PEN"
  | "PHP"
  | "PKR"
  | "PLN"
  | "RON"
  | "RSD"
  | "RUB"
  | "SAR"
  | "SEK"
  | "SGD"
  | "THB"
  | "TRY"
  | "TWD"
  | "UAH"
  | "VEF"
  | "VND"
  | "ZAR";

type DimensionHeader = {
  name: GA4.Dimension["apiName"];
};

type MetricHeader = {
  name: GA4.Metric["apiName"];
  type: MetricType;
};

type MetricType =
  | "METRIC_TYPE_UNSPECIFIED"
  | "TYPE_INTEGER"
  | "TYPE_FLOAT"
  | "TYPE_SECONDS"
  | "TYPE_MILLISECONDS"
  | "TYPE_MINUTES"
  | "TYPE_HOURS"
  | "TYPE_STANDARD"
  | "TYPE_CURRENCY"
  | "TYPE_FEET"
  | "TYPE_MILES"
  | "TYPE_METERS"
  | "TYPE_KILOMETERS";

type Row = {
  dimensionValues: DimensionValue[];
  metricValues: MetricValue[];
};

type DimensionValue = {
  value: string;
};

type MetricValue = {
  value: string;
};

type ResponseMetaData = {
  dataLossFromOtherRow: boolean;
  schemaRestrictionResponse: SchemaRestrictionResponse;
  currencyCode: CurrencyCode;
  timeZone: string;
  emptyReason: string;
  subjectToThresholding: boolean;
};

type SchemaRestrictionResponse = {
  activeMetricRestrictions: ActiveMetricRestriction[];
};

type ActiveMetricRestriction = {
  restrictedMetricTypes: RestrictedMetricType[];
  metricName: GA4.Metric["apiName"];
};

type RestrictedMetricType =
  | "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
  | "COST_DATA"
  | "REVENUE_DATA";

type PropertyQuota = {
  tokensPerDay: QuotaStatus;
  tokensPerHour: QuotaStatus;
  concurrentRequests: QuotaStatus;
  serverErrorsPerProjectPerHour: QuotaStatus;
  potentiallyThresholdedRequestsPerHour: QuotaStatus;
  tokensPerProjectPerHour: QuotaStatus;
};

type QuotaStatus = {
  consumed: number;
  remaining: number;
};
