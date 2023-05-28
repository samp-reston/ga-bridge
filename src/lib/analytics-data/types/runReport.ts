type reportBody = {
  dimensions: [dimensionBody, ...dimensionBody[]];
  metrics: [metricBody, ...metricBody[]];
  dateRanges: { startDate: string; endDate: string; name?: string }[];
  dimensionFilter?: {
    expressions: Filter[];
  };
};

type metricBody = { name: GA4.Metric["apiName"] };

type dimensionBody = { name: GA4.Dimension["apiName"] };

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
      int64Value: string;
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
