type RunReportBody = {
  dimensions: [DimensionBody, ...DimensionBody[]];
  metrics: [MetricBody, ...MetricBody[]];
  dateRanges: DateRange[];
  dimensionFilter?: MetricOrDimensionFilter<"dimension">;
  metricFilter?: MetricOrDimensionFilter<"metric">;
  offset?: number;
  limit?: number;
  metricAggregations?: MetricAggregation[];
  orderBys?: OrderBy[];
  currencyCode?: string;
  cohortSpec?: CohortSpec;
  keepEmptyRows?: boolean;
  returnPropertyQuota?: boolean;
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

type DateRange = { startDate: string; endDate: string; name?: string };

type MetricBody = { name: GA4.Metric["apiName"] };

type DimensionBody = { name: GA4.Dimension["apiName"] };

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
