type RunReportBody = {
  dimensions: [dimensionBody, ...dimensionBody[]];
  metrics: [metricBody, ...metricBody[]];
  dateRanges: DateRange[];
  // TODO: add typed filters
  dimensionFilter?: {
    expressions: Filter[];
  };
  // TODO: add typed filters
  metricFilter?: {
    expressions: Filter[];
  };
  offset?: number;
  limit?: number;
  metricAggregations?: MetricAggregation[];
  orderBys?: OrderBy[];
  currencyCode?: string;
  cohortSpec?: CohortSpec;
  keepEmptyRows?: boolean;
  returnPropertyQuota?: boolean;
};

type DateRange = { startDate: string; endDate: string; name?: string };

type metricBody = { name: GA4.Metric["apiName"] };

type dimensionBody = { name: GA4.Dimension["apiName"] };

type DimensionFilter = {};

type AndGroup = {};

type OrGroup = {};

type NotExpression = {};

type Filter =
  | {
      fieldName: GA4.Dimension["apiName"] | GA4.Metric["apiName"];
      stringFilter: StringFilter;
    }
  | {
      fieldName: GA4.Dimension["apiName"] | GA4.Metric["apiName"];
      inListFilter: InListFilter;
    }
  | {
      fieldName: GA4.Dimension["apiName"] | GA4.Metric["apiName"];
      numericFilter: NumericFilter;
    }
  | {
      fieldName: GA4.Dimension["apiName"] | GA4.Metric["apiName"];
      betweenFilter: BetweenFilter;
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
