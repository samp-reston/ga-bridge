import type { AxiosRequestConfig } from "axios";

export type AnalyticsDataOptions = {
  propertyId: string;
  axiosOptions?: AxiosRequestConfig;
  store?: StoreConfig;
};
export type AnalyticsDataDefaultOptions = {
  propertyId: string;
  axiosOptions: AxiosRequestConfig;
  store: StoreConfig;
};

export type StoreConfig = {
  key: string;
  useLocalStorage: boolean;
};

export type MetricOrDimensionFilter<T extends "metric" | "dimension"> = {
  andGroup?: AndGroup<T>;
  orGroup?: OrGroup<T>;
  notExpression?: NotExpression<T>;
  filter?: Filter<T>;
};

export type AndGroup<T extends "metric" | "dimension"> = {
  expressions: MetricOrDimensionFilter<T>[];
};

export type OrGroup<T extends "metric" | "dimension"> = {
  expressions: MetricOrDimensionFilter<T>[];
};

export type NotExpression<T extends "metric" | "dimension"> =
  MetricOrDimensionFilter<T>;

export type DateRange = { startDate: DateString; endDate: DateString; name?: string };
export type DateString =
  | `${string}-${string}-${string}`
  | `${string}daysAgo`
  | "yesterday"
  | "today";

export type MetricBody = {
  name: GA4.Metric["apiName"];
  expression?: string;
  invisible?: boolean;
};

export type DimensionBody = {
  name: GA4.Dimension["apiName"];
  dimensionExpression?: DimensionExpression;
};

export type DimensionExpression = {
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

export type Filter<T extends "metric" | "dimension"> = {
  betweenFilter?: BetweenFilter;
  fieldName?: T extends "metric"
    ? GA4.Metric["apiName"]
    : GA4.Dimension["apiName"];
  inListFilter?: InListFilter;
  numericFilter?: NumericFilter;
  stringFilter?: StringFilter;
};

export type MatchType =
  | "EXACT"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "FULL_REGEXP"
  | "PARTIAL_REGEXP";

export type StringFilter = {
  matchType?: MatchType;
  value: string;
  caseSensitive: boolean;
};

export type InListFilter = {
  values: string[];
  caseSensitive: boolean;
};

export type Operation =
  | "EQUAL"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUAL"
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "BETWEEN"
  | "IN_LIST";

export type NumericValue =
  | {
      int64Value: number;
    }
  | {
      doubleValue: number;
    };

export type NumericFilter = {
  operation: Operation;
  value: NumericValue;
};

export type BetweenFilter = {
  fromValue: NumericValue;
  toValue: NumericValue;
};

export type MetricAggregation = "TOTAL" | "MINIMUM" | "MAXIMUM" | "COUNT";

export type OrderBy =
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

export type MetricOrderBy = {
  metricName: GA4.Metric["apiName"];
};

export type DimensionOrderBy = {
  dimensionName: GA4.Dimension["apiName"];
  orderType: OrderType;
};

export type OrderType = "ALPHANUMERIC" | "CASE_INSENSITIVE_ALPHANUMERIC" | "NUMERIC";

export type PivotOrderBy = {
  metricName: GA4.Metric["apiName"];
  pivotSelections: PivotSelection[];
};

export type PivotSelection = {
  dimensionName: GA4.Dimension["apiName"];
  dimensionValue: string;
};

export type CohortSpec = {
  cohorts: Cohort[];
  cohortsRange: CohortsRange;
  cohortReportSettings: CohortReportSettings;
};

export type Cohort = {
  name: string;
  dimension: GA4.Dimension["apiName"];
  dateRange: DateRange;
};

export type CohortsRange = {
  granularity: Granularity;
  startOffset: number;
  endOffset: number;
};

export type Granularity = "DAILY" | "WEEKLY" | "MONTHLY";

export type CohortReportSettings = {
  accumulate: boolean;
};

export type CurrencyCode =
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

export type DimensionHeader = {
  name: GA4.Dimension["apiName"];
};

export type MetricHeader = {
  name: GA4.Metric["apiName"];
  type: MetricType;
};

export type MetricType =
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

export type Row = {
  dimensionValues: DimensionValue[];
  metricValues: MetricValue[];
};

export type DimensionValue = {
  value: string;
};

export type MetricValue = {
  value: string;
};

export type ResponseMetaData = {
  dataLossFromOtherRow: boolean;
  schemaRestrictionResponse: SchemaRestrictionResponse;
  currencyCode: CurrencyCode;
  timeZone: IanaTZ;
  emptyReason: string;
  subjectToThresholding: boolean;
};

export type SchemaRestrictionResponse = {
  activeMetricRestrictions: ActiveMetricRestriction[];
};

export type ActiveMetricRestriction = {
  restrictedMetricTypes: RestrictedMetricType[];
  metricName: GA4.Metric["apiName"];
};

export type RestrictedMetricType =
  | "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
  | "COST_DATA"
  | "REVENUE_DATA";

export type PropertyQuota = {
  tokensPerDay: QuotaStatus;
  tokensPerHour: QuotaStatus;
  concurrentRequests: QuotaStatus;
  serverErrorsPerProjectPerHour: QuotaStatus;
  potentiallyThresholdedRequestsPerHour: QuotaStatus;
  tokensPerProjectPerHour: QuotaStatus;
};

export type QuotaStatus = {
  consumed: number;
  remaining: number;
};

export type IanaTZ =
  | "Africa/Abidjan"
  | "Africa/Algiers"
  | "Africa/Bissau"
  | "Africa/Cairo"
  | "Africa/Casablanca"
  | "Africa/Ceuta"
  | "Africa/El_Aaiun"
  | "Africa/Johannesburg"
  | "Africa/Juba"
  | "Africa/Khartoum"
  | "Africa/Lagos"
  | "Africa/Maputo"
  | "Africa/Monrovia"
  | "Africa/Nairobi"
  | "Africa/Ndjamena"
  | "Africa/Sao_Tome"
  | "Africa/Tripoli"
  | "Africa/Tunis"
  | "Africa/Windhoek"
  | "America/Adak"
  | "America/Anchorage"
  | "America/Araguaina"
  | "America/Argentina/Buenos_Aires"
  | "America/Argentina/Catamarca"
  | "America/Argentina/Cordoba"
  | "America/Argentina/Jujuy"
  | "America/Argentina/La_Rioja"
  | "America/Argentina/Mendoza"
  | "America/Argentina/Rio_Gallegos"
  | "America/Argentina/Salta"
  | "America/Argentina/San_Juan"
  | "America/Argentina/San_Luis"
  | "America/Argentina/Tucuman"
  | "America/Argentina/Ushuaia"
  | "America/Asuncion"
  | "America/Bahia"
  | "America/Bahia_Banderas"
  | "America/Barbados"
  | "America/Belem"
  | "America/Belize"
  | "America/Boa_Vista"
  | "America/Bogota"
  | "America/Boise"
  | "America/Cambridge_Bay"
  | "America/Campo_Grande"
  | "America/Cancun"
  | "America/Caracas"
  | "America/Cayenne"
  | "America/Chicago"
  | "America/Chihuahua"
  | "America/Ciudad_Juarez"
  | "America/Costa_Rica"
  | "America/Cuiaba"
  | "America/Danmarkshavn"
  | "America/Dawson"
  | "America/Dawson_Creek"
  | "America/Denver"
  | "America/Detroit"
  | "America/Edmonton"
  | "America/Eirunepe"
  | "America/El_Salvador"
  | "America/Fort_Nelson"
  | "America/Fortaleza"
  | "America/Glace_Bay"
  | "America/Goose_Bay"
  | "America/Grand_Turk"
  | "America/Guatemala"
  | "America/Guayaquil"
  | "America/Guyana"
  | "America/Halifax"
  | "America/Havana"
  | "America/Hermosillo"
  | "America/Indiana/Indianapolis"
  | "America/Indiana/Knox"
  | "America/Indiana/Marengo"
  | "America/Indiana/Petersburg"
  | "America/Indiana/Tell_City"
  | "America/Indiana/Vevay"
  | "America/Indiana/Vincennes"
  | "America/Indiana/Winamac"
  | "America/Inuvik"
  | "America/Iqaluit"
  | "America/Jamaica"
  | "America/Juneau"
  | "America/Kentucky/Louisville"
  | "America/Kentucky/Monticello"
  | "America/La_Paz"
  | "America/Lima"
  | "America/Los_Angeles"
  | "America/Maceio"
  | "America/Managua"
  | "America/Manaus"
  | "America/Martinique"
  | "America/Matamoros"
  | "America/Mazatlan"
  | "America/Menominee"
  | "America/Merida"
  | "America/Metlakatla"
  | "America/Mexico_City"
  | "America/Miquelon"
  | "America/Moncton"
  | "America/Monterrey"
  | "America/Montevideo"
  | "America/New_York"
  | "America/Nome"
  | "America/Noronha"
  | "America/North_Dakota/Beulah"
  | "America/North_Dakota/Center"
  | "America/North_Dakota/New_Salem"
  | "America/Nuuk"
  | "America/Ojinaga"
  | "America/Panama"
  | "America/Paramaribo"
  | "America/Phoenix"
  | "America/Port-au-Prince"
  | "America/Porto_Velho"
  | "America/Puerto_Rico"
  | "America/Punta_Arenas"
  | "America/Rankin_Inlet"
  | "America/Recife"
  | "America/Regina"
  | "America/Resolute"
  | "America/Rio_Branco"
  | "America/Santarem"
  | "America/Santiago"
  | "America/Santo_Domingo"
  | "America/Sao_Paulo"
  | "America/Scoresbysund"
  | "America/Sitka"
  | "America/St_Johns"
  | "America/Swift_Current"
  | "America/Tegucigalpa"
  | "America/Thule"
  | "America/Tijuana"
  | "America/Toronto"
  | "America/Vancouver"
  | "America/Whitehorse"
  | "America/Winnipeg"
  | "America/Yakutat"
  | "Antarctica/Casey"
  | "Antarctica/Davis"
  | "Antarctica/Macquarie"
  | "Antarctica/Mawson"
  | "Antarctica/Palmer"
  | "Antarctica/Rothera"
  | "Antarctica/Troll"
  | "Asia/Almaty"
  | "Asia/Amman"
  | "Asia/Anadyr"
  | "Asia/Aqtau"
  | "Asia/Aqtobe"
  | "Asia/Ashgabat"
  | "Asia/Atyrau"
  | "Asia/Baghdad"
  | "Asia/Baku"
  | "Asia/Bangkok"
  | "Asia/Barnaul"
  | "Asia/Beirut"
  | "Asia/Bishkek"
  | "Asia/Chita"
  | "Asia/Choibalsan"
  | "Asia/Colombo"
  | "Asia/Damascus"
  | "Asia/Dhaka"
  | "Asia/Dili"
  | "Asia/Dubai"
  | "Asia/Dushanbe"
  | "Asia/Famagusta"
  | "Asia/Gaza"
  | "Asia/Hebron"
  | "Asia/Ho_Chi_Minh"
  | "Asia/Hong_Kong"
  | "Asia/Hovd"
  | "Asia/Irkutsk"
  | "Asia/Jakarta"
  | "Asia/Jayapura"
  | "Asia/Jerusalem"
  | "Asia/Kabul"
  | "Asia/Kamchatka"
  | "Asia/Karachi"
  | "Asia/Kathmandu"
  | "Asia/Khandyga"
  | "Asia/Kolkata"
  | "Asia/Krasnoyarsk"
  | "Asia/Kuching"
  | "Asia/Macau"
  | "Asia/Magadan"
  | "Asia/Makassar"
  | "Asia/Manila"
  | "Asia/Nicosia"
  | "Asia/Novokuznetsk"
  | "Asia/Novosibirsk"
  | "Asia/Omsk"
  | "Asia/Oral"
  | "Asia/Pontianak"
  | "Asia/Pyongyang"
  | "Asia/Qatar"
  | "Asia/Qostanay"
  | "Asia/Qyzylorda"
  | "Asia/Riyadh"
  | "Asia/Sakhalin"
  | "Asia/Samarkand"
  | "Asia/Seoul"
  | "Asia/Shanghai"
  | "Asia/Singapore"
  | "Asia/Srednekolymsk"
  | "Asia/Taipei"
  | "Asia/Tashkent"
  | "Asia/Tbilisi"
  | "Asia/Tehran"
  | "Asia/Thimphu"
  | "Asia/Tokyo"
  | "Asia/Tomsk"
  | "Asia/Ulaanbaatar"
  | "Asia/Urumqi"
  | "Asia/Ust-Nera"
  | "Asia/Vladivostok"
  | "Asia/Yakutsk"
  | "Asia/Yangon"
  | "Asia/Yekaterinburg"
  | "Asia/Yerevan"
  | "Atlantic/Azores"
  | "Atlantic/Bermuda"
  | "Atlantic/Canary"
  | "Atlantic/Cape_Verde"
  | "Atlantic/Faroe"
  | "Atlantic/Madeira"
  | "Atlantic/South_Georgia"
  | "Atlantic/Stanley"
  | "Australia/Adelaide"
  | "Australia/Brisbane"
  | "Australia/Broken_Hill"
  | "Australia/Darwin"
  | "Australia/Eucla"
  | "Australia/Hobart"
  | "Australia/Lindeman"
  | "Australia/Lord_Howe"
  | "Australia/Melbourne"
  | "Australia/Perth"
  | "Australia/Sydney"
  | "CET"
  | "CST6CDT"
  | "EET"
  | "EST"
  | "EST5EDT"
  | "Etc/GMT"
  | "Etc/GMT+1"
  | "Etc/GMT+10"
  | "Etc/GMT+11"
  | "Etc/GMT+12"
  | "Etc/GMT+2"
  | "Etc/GMT+3"
  | "Etc/GMT+4"
  | "Etc/GMT+5"
  | "Etc/GMT+6"
  | "Etc/GMT+7"
  | "Etc/GMT+8"
  | "Etc/GMT+9"
  | "Etc/GMT-1"
  | "Etc/GMT-10"
  | "Etc/GMT-11"
  | "Etc/GMT-12"
  | "Etc/GMT-13"
  | "Etc/GMT-14"
  | "Etc/GMT-2"
  | "Etc/GMT-3"
  | "Etc/GMT-4"
  | "Etc/GMT-5"
  | "Etc/GMT-6"
  | "Etc/GMT-7"
  | "Etc/GMT-8"
  | "Etc/GMT-9"
  | "Etc/UTC"
  | "Europe/Andorra"
  | "Europe/Astrakhan"
  | "Europe/Athens"
  | "Europe/Belgrade"
  | "Europe/Berlin"
  | "Europe/Brussels"
  | "Europe/Bucharest"
  | "Europe/Budapest"
  | "Europe/Chisinau"
  | "Europe/Dublin"
  | "Europe/Gibraltar"
  | "Europe/Helsinki"
  | "Europe/Istanbul"
  | "Europe/Kaliningrad"
  | "Europe/Kirov"
  | "Europe/Kyiv"
  | "Europe/Lisbon"
  | "Europe/London"
  | "Europe/Madrid"
  | "Europe/Malta"
  | "Europe/Minsk"
  | "Europe/Moscow"
  | "Europe/Paris"
  | "Europe/Prague"
  | "Europe/Riga"
  | "Europe/Rome"
  | "Europe/Samara"
  | "Europe/Saratov"
  | "Europe/Simferopol"
  | "Europe/Sofia"
  | "Europe/Tallinn"
  | "Europe/Tirane"
  | "Europe/Ulyanovsk"
  | "Europe/Vienna"
  | "Europe/Vilnius"
  | "Europe/Volgograd"
  | "Europe/Warsaw"
  | "Europe/Zurich"
  | "GMT"
  | "HST"
  | "Indian/Chagos"
  | "Indian/Maldives"
  | "Indian/Mauritius"
  | "MET"
  | "MST"
  | "MST7MDT"
  | "Pacific/Apia"
  | "Pacific/Auckland"
  | "Pacific/Bougainville"
  | "Pacific/Chatham"
  | "Pacific/Easter"
  | "Pacific/Efate"
  | "Pacific/Fakaofo"
  | "Pacific/Fiji"
  | "Pacific/Galapagos"
  | "Pacific/Gambier"
  | "Pacific/Guadalcanal"
  | "Pacific/Guam"
  | "Pacific/Honolulu"
  | "Pacific/Kanton"
  | "Pacific/Kiritimati"
  | "Pacific/Kosrae"
  | "Pacific/Kwajalein"
  | "Pacific/Marquesas"
  | "Pacific/Nauru"
  | "Pacific/Niue"
  | "Pacific/Norfolk"
  | "Pacific/Noumea"
  | "Pacific/Pago_Pago"
  | "Pacific/Palau"
  | "Pacific/Pitcairn"
  | "Pacific/Port_Moresby"
  | "Pacific/Rarotonga"
  | "Pacific/Tahiti"
  | "Pacific/Tarawa"
  | "Pacific/Tongatapu"
  | "PST8PDT"
  | "WET";
