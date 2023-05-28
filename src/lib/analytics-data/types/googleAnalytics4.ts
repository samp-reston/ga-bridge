namespace GA4 {
  export type Metric =
    | {
        apiName: "active1DayUsers";
        uiName: "1-day active users";
        description: "The number of distinct active users on your site or app within a 1 day period. The 1 day period includes the last day in the report's date range. Note: this is the same as Active Users.";
      }
    | {
        apiName: "active28DayUsers";
        uiName: "28-day active users";
        description: "The number of distinct active users on your site or app within a 28 day period. The 28 day period includes the last day in the report's date range.";
      }
    | {
        apiName: "active7DayUsers";
        uiName: "7-day active users";
        description: "The number of distinct active users on your site or app within a 7 day period. The 7 day period includes the last day in the report's date range.";
      }
    | {
        apiName: "activeUsers";
        uiName: "Active users";
        description: "The number of distinct users who visited your site or app.";
      }
    | {
        apiName: "adUnitExposure";
        uiName: "Ad unit exposure";
        description: '"The time that an ad unit was exposed to a user';
      }
    | {
        apiName: "addToCarts";
        uiName: "Add to carts";
        description: "The number of times users added items to their shopping carts.";
      }
    | {
        apiName: "advertiserAdClicks";
        uiName: "Ads clicks";
        description: "Total number of times users have clicked on an ad to reach the property. Includes clicks from linked integrations like linked Search Ads 360 advertisers. Also includes uploaded clicks from data import.";
      }
    | {
        apiName: "advertiserAdCost";
        uiName: "Ads cost";
        description: '"The total amount you paid for your ads. Includes costs from linked integrations like linked Google Ads accounts. Also includes uploaded cost from data import; to learn more';
      }
    | {
        apiName: "advertiserAdCostPerClick";
        uiName: "Ads cost per click";
        description: "Ads cost per click is ad cost divided by ad clicks and is often abbreviated CPC.";
      }
    | {
        apiName: "advertiserAdCostPerConversion";
        uiName: "Cost per conversion";
        description: "Cost per conversion is ad cost divided by conversions.";
      }
    | {
        apiName: "advertiserAdImpressions";
        uiName: "Ads impressions";
        description: "The total number of impressions. Includes impressions from linked integrations like linked Display & Video 360 advertisers. Also includes uploaded impressions from data import.";
      }
    | {
        apiName: "averagePurchaseRevenue";
        uiName: "Average purchase revenue";
        description: "The average purchase revenue in the transaction group of events.";
      }
    | {
        apiName: "averagePurchaseRevenuePerPayingUser";
        uiName: "ARPPU";
        description: "Average revenue per paying user (ARPPU) is the total purchase revenue per active user that logged a purchase event. The summary metric is for the time period selected.";
      }
    | {
        apiName: "averagePurchaseRevenuePerUser";
        uiName: "Average purchase revenue per user";
        description: "The average purchase revenue per active user is the total purchase revenue per active user that logged any event. The summary metric is for the time period selected.";
      }
    | {
        apiName: "averageRevenuePerUser";
        uiName: "ARPU";
        description: "Average revenue per active user (ARPU). The summary metric is for the time period selected. ARPU uses Total Revenue and includes AdMob estimated earnings.";
      }
    | {
        apiName: "averageSessionDuration";
        uiName: "Average session duration";
        description: "The average duration (in seconds) of users' sessions.";
      }
    | {
        apiName: "bounceRate";
        uiName: "Bounce rate";
        description: '"The percentage of sessions that were not engaged ((Sessions Minus Engaged sessions) divided by Sessions). This metric is returned as a fraction; for example';
      }
    | {
        apiName: "cartToViewRate";
        uiName: "Cart-to-view rate";
        description: '"The number of users who added a product(s) to their cart divided by the number of users who viewed the same product(s). This metric is returned as a fraction; for example';
      }
    | {
        apiName: "checkouts";
        uiName: "Checkouts";
        description: "The number of times users started the checkout process. This metric counts the occurrence of the 'begin_checkout' event.";
      }
    | {
        apiName: "cohortActiveUsers";
        uiName: "Cohort active users";
        description: '"The number of users in the cohort who are active in the time window corresponding to the cohort nth day/week/month. For example for the row where cohortNthWeek = 0001';
      }
    | {
        apiName: "cohortTotalUsers";
        uiName: "Cohort total users";
        description: '"The total number of users in the cohort. This metric is the same value in every row of the report for each cohort. Because cohorts are defined by a shared acquisition date';
      }
    | {
        apiName: "conversions";
        uiName: "Conversions";
        description: "\"The count of conversion events. Events are marked as conversions at collection time; changes to an event's conversion marking apply going forward. You can mark any event as a conversion in Google Analytics";
      }
    | {
        apiName: "crashAffectedUsers";
        uiName: "Crash-affected users";
        description: '"The number of users that logged a crash in this row of the report. For example if the report is time series by date';
      }
    | {
        apiName: "crashFreeUsersRate";
        uiName: "Crash-free users rate";
        description: '"The number of users without crash events (in this row of the report) divided by the total number of users. This metric is returned as a fraction; for example';
      }
    | {
        apiName: "dauPerMau";
        uiName: "DAU / MAU";
        description: '"The rolling percent of 30-day active users who are also 1-day active users. This metric is returned as a fraction; for example';
      }
    | {
        apiName: "dauPerWau";
        uiName: "DAU / WAU";
        description: '"The rolling percent of 7-day active users who are also 1-day active users. This metric is returned as a fraction; for example';
      }
    | {
        apiName: "ecommercePurchases";
        uiName: "Ecommerce purchases";
        description: "The number of times users completed a purchase. This metric counts 'purchase' events; this metric does not count 'in_app_purchase' and subscription events.";
      }
    | {
        apiName: "engagedSessions";
        uiName: "Engaged sessions";
        description: '"The number of sessions that lasted longer than 10 seconds';
      }
    | {
        apiName: "engagementRate";
        uiName: "Engagement rate";
        description: '"The percentage of engaged sessions (Engaged sessions divided by Sessions). This metric is returned as a fraction; for example';
      }
    | {
        apiName: "eventCount";
        uiName: "Event count";
        description: "The count of events.";
      }
    | {
        apiName: "eventCountPerUser";
        uiName: "Event count per user";
        description: "The average number of events per user (Event count divided by Active users).";
      }
    | {
        apiName: "eventValue";
        uiName: "Event value";
        description: "The sum of the event parameter named 'value'.";
      }
    | {
        apiName: "eventsPerSession";
        uiName: "Events per session";
        description: "The average number of events per session (Event count divided by Sessions).";
      }
    | {
        apiName: "firstTimePurchaserConversionRate";
        uiName: "First-time purchaser conversion";
        description: '"The percentage of active users who made their first purchase. This metric is returned as a fraction; for example';
      }
    | {
        apiName: "firstTimePurchasers";
        uiName: "First time purchasers";
        description: "The number of users that completed their first purchase event.";
      }
    | {
        apiName: "firstTimePurchasersPerNewUser";
        uiName: "First-time purchasers per new user";
        description: "The average number of first time purchasers per new user.";
      }
    | {
        apiName: "grossItemRevenue";
        uiName: "Gross item revenue";
        description: "The total revenue from items only. Gross item revenue is the product of its price and quantity. Item revenue excludes tax and shipping values; tax & shipping values are specified at the event and not item level. Gross item revenue does not include refunds.";
      }
    | {
        apiName: "grossPurchaseRevenue";
        uiName: "Gross purchase revenue";
        description: "\"The sum of revenue from purchases made in your app or site. Gross purchase revenue sums the revenue for these events: 'purchase'";
      }
    | {
        apiName: "itemListClickEvents";
        uiName: "Item-list click events";
        description: "The number of times users clicked an item when it appeared in a list. This metric counts the occurrence of the 'select_item' event.";
      }
    | {
        apiName: "itemListClickThroughRate";
        uiName: "Item list click through rate";
        description: '"The number of users who selected a list(s) divided by the number of users who viewed the same list(s). This metric is returned as a fraction; for example';
      }
    | {
        apiName: "itemListViewEvents";
        uiName: "Item-list view events";
        description: "The number of times the item list was viewed. This metric counts the occurrence of the 'view_item_list' event.";
      }
    | {
        apiName: "itemPromotionClickThroughRate";
        uiName: "Item promotion click through rate";
        description: '"The number of users who selected a promotion(s) divided by the number of users who viewed the same promotion(s). This metric is returned as a fraction; for example';
      }
    | {
        apiName: "itemRefundAmount";
        uiName: "Item refund amount";
        description: "Item refund amount is the total refunded transaction revenue from items only. Item refund amount is the product of price and quantity for the 'refund' event.";
      }
    | {
        apiName: "itemRevenue";
        uiName: "Item revenue";
        description: "The total revenue from purchases minus refunded transaction revenue from items only. Item revenue is the product of its price and quantity. Item revenue excludes tax and shipping values; tax & shipping values are specified at the event and not item level.";
      }
    | {
        apiName: "itemViewEvents";
        uiName: "Item view events";
        description: "The number of times the item details were viewed. The metric counts the occurrence of the 'view_item' event.";
      }
    | {
        apiName: "itemsAddedToCart";
        uiName: "Items added to cart";
        description: "The number of units added to cart for a single item. This metric counts the quantity of items in 'add_to_cart' events.";
      }
    | {
        apiName: "itemsCheckedOut";
        uiName: "Items checked out";
        description: "The number of units checked out for a single item. This metric counts the quantity of items in 'begin_checkout' events.";
      }
    | {
        apiName: "itemsClickedInList";
        uiName: "Items clicked in list";
        description: "The number of units clicked in list for a single item. This metric counts the quantity of items in 'select_item' events.";
      }
    | {
        apiName: "itemsClickedInPromotion";
        uiName: "Items clicked in promotion";
        description: "The number of units clicked in promotion for a single item. This metric counts the quantity of items in 'select_promotion' events.";
      }
    | {
        apiName: "itemsPurchased";
        uiName: "Items purchased";
        description: "The number of units for a single item included in purchase events. This metric counts the quantity of items in purchase events.";
      }
    | {
        apiName: "itemsViewed";
        uiName: "Items viewed";
        description: "The number of units viewed for a single item. This metric counts the quantity of items in 'view_item' events.";
      }
    | {
        apiName: "itemsViewedInList";
        uiName: "Items viewed in list";
        description: "The number of units viewed in list for a single item. This metric counts the quantity of items in 'view_item_list' events.";
      }
    | {
        apiName: "itemsViewedInPromotion";
        uiName: "Items viewed in promotion";
        description: "The number of units viewed in promotion for a single item. This metric counts the quantity of items in 'view_promotion' events.";
      }
    | {
        apiName: "newUsers";
        uiName: "New users";
        description: "The number of users who interacted with your site or launched your app for the first time (event triggered: first_open or first_visit).";
      }
    | {
        apiName: "organicGoogleSearchAveragePosition";
        uiName: "Organic google search average position";
        description: '"The average ranking of your website URLs for the query reported from Search Console. For example';
      }
    | {
        apiName: "organicGoogleSearchClickThroughRate";
        uiName: "Organic google search click through rate";
        description: '"The organic Google Search click through rate reported from Search Console. Click through rate is clicks per impression. This metric is returned as a fraction; for example';
      }
    | {
        apiName: "organicGoogleSearchClicks";
        uiName: "Organic google search clicks";
        description: "The number of organic Google Search clicks reported from Search Console.  This metric requires an active Search Console link.";
      }
    | {
        apiName: "organicGoogleSearchImpressions";
        uiName: "Organic google search impressions";
        description: "The number of organic Google Search impressions reported from Search Console. This metric requires an active Search Console link.";
      }
    | {
        apiName: "promotionClicks";
        uiName: "Promotion clicks";
        description: "The number of times an item promotion was clicked. This metric counts the occurrence of the 'select_promotion' event.";
      }
    | {
        apiName: "promotionViews";
        uiName: "Promotion views";
        description: "The number of times an item promotion was viewed. This metric counts the occurrence of the 'view_promotion' event.";
      }
    | {
        apiName: "publisherAdClicks";
        uiName: "Publisher ad clicks";
        description: "The number of ad_click events.";
      }
    | {
        apiName: "publisherAdImpressions";
        uiName: "Publisher ad impressions";
        description: "The number of ad_impression events.";
      }
    | {
        apiName: "purchaseRevenue";
        uiName: "Purchase revenue";
        description: "\"The sum of revenue from purchases minus refunded transaction revenue made in your app or site. Purchase revenue sums the revenue for these events: 'purchase'";
      }
    | {
        apiName: "purchaseToViewRate";
        uiName: "Purchase-to-view rate";
        description: '"The number of users who purchased a product(s) divided by the number of users who viewed the same product(s). This metric is returned as a fraction; for example';
      }
    | {
        apiName: "purchaserConversionRate";
        uiName: "Purchaser conversion";
        description: '"The percentage of active users who made 1 or more purchase transactions. This metric is returned as a fraction; for example';
      }
    | {
        apiName: "refundAmount";
        uiName: "Refund amount";
        description: "The total refunded transaction revenues. Refund amount sums refunded revenue for the event 'refund'.";
      }
    | {
        apiName: "returnOnAdSpend";
        uiName: "Return on ad spend";
        description: "Return On Ad Spend (ROAS) is total revenue divided by advertiser ad cost.";
      }
    | {
        apiName: "screenPageViews";
        uiName: "Views";
        description: "The number of app screens or web pages your users viewed. Repeated views of a single page or screen are counted. (screen_view + page_view events).";
      }
    | {
        apiName: "screenPageViewsPerSession";
        uiName: "Views per session";
        description: "The number of app screens or web pages your users viewed per session. Repeated views of a single page or screen are counted. (screen_view + page_view events) / sessions.";
      }
    | {
        apiName: "screenPageViewsPerUser";
        uiName: "Views per user";
        description: "The number of app screens or web pages your users viewed per active user. Repeated views of a single page or screen are counted. (screen_view + page_view events) / active users.";
      }
    | {
        apiName: "scrolledUsers";
        uiName: "Scrolled users";
        description: "The number of unique users who scrolled down at least 90% of the page.";
      }
    | {
        apiName: "sessionConversionRate";
        uiName: "Session conversion rate";
        description: "The percentage of sessions in which any conversion event was triggered.";
      }
    | {
        apiName: "sessions";
        uiName: "Sessions";
        description: "The number of sessions that began on your site or app (event triggered: session_start).";
      }
    | {
        apiName: "sessionsPerUser";
        uiName: "Sessions per user";
        description: "The average number of sessions per user (Sessions divided by Active Users).";
      }
    | {
        apiName: "shippingAmount";
        uiName: "Shipping amount";
        description: "Shipping amount associated with a transaction. Populated by the 'shipping' event parameter.";
      }
    | {
        apiName: "taxAmount";
        uiName: "Tax amount";
        description: "Tax amount associated with a transaction. Populated by the 'tax' event parameter.";
      }
    | {
        apiName: "totalAdRevenue";
        uiName: "Total ad revenue";
        description: "The total advertising revenue from both Admob and third-party sources.";
      }
    | {
        apiName: "totalPurchasers";
        uiName: "Total purchasers";
        description: "The number of users that logged purchase events for the time period selected.";
      }
    | {
        apiName: "totalRevenue";
        uiName: "Total revenue";
        description: '"The sum of revenue from purchases';
      }
    | {
        apiName: "totalUsers";
        uiName: "Total users";
        description: '"The number of distinct users who have logged at least one event';
      }
    | {
        apiName: "transactions";
        uiName: "Transactions";
        description: '"The count of transaction events with purchase revenue. Transaction events are in_app_purchase';
      }
    | {
        apiName: "transactionsPerPurchaser";
        uiName: "Transactions per purchaser";
        description: "The average numer of transactions per purchaser.";
      }
    | {
        apiName: "userConversionRate";
        uiName: "User conversion rate";
        description: "The percentage of users who triggered any conversion event.";
      }
    | {
        apiName: "userEngagementDuration";
        uiName: "User engagement";
        description: "The total amount of time (in seconds) your website or app was in the foreground of users' devices.";
      }
    | {
        apiName: "wauPerMau";
        uiName: "WAU / MAU";
        description: '"The rolling percent of 30-day active users who are also 7-day active users. This metric is returned as a fraction; for example';
      };
  export type Dimension =
    | {
        apiName: "achievementId";
        uiName: "Achievement ID";
        description: "The achievement ID in a game for an event. Populated by the event parameter 'achievement_id'.";
      }
    | {
        apiName: "adFormat";
        uiName: "Ad format";
        description: "\"Describes the way ads looked and where they were located. Typical formats include 'Interstitial'";
      }
    | {
        apiName: "adSourceName";
        uiName: "Ad source";
        description: "\"The source network that served the ad. Typical sources include 'AdMob Network'";
      }
    | {
        apiName: "adUnitName";
        uiName: "Ad unit";
        description: "The name you chose to describe this Ad unit. Ad units are containers you place in your apps to show ads to users.";
      }
    | {
        apiName: "appVersion";
        uiName: "App version";
        description: "The app's versionName (Android) or short bundle version (iOS).";
      }
    | {
        apiName: "audienceId";
        uiName: "Audience ID";
        description: "The numeric identifier of an Audience. Users are reported in the audiences to which they belonged during the report's date range. Current user behavior does not affect historical audience membership in reports.";
      }
    | {
        apiName: "audienceName";
        uiName: "Audience name";
        description: "The given name of an Audience. Users are reported in the audiences to which they belonged during the report's date range. Current user behavior does not affect historical audience membership in reports.";
      }
    | {
        apiName: "brandingInterest";
        uiName: "Interests";
        description: '"Interests demonstrated by users who are higher in the shopping funnel. Users can be counted in multiple interest categories. For example';
      }
    | {
        apiName: "browser";
        uiName: "Browser";
        description: "The browsers used to view your website.";
      }
    | {
        apiName: "campaignId";
        uiName: "Campaign ID";
        description: '"The identifier of the marketing campaign. Present only for conversion events. Includes Google Ads Campaigns';
      }
    | {
        apiName: "campaignName";
        uiName: "Campaign";
        description: '"The name of the marketing campaign. Present only for conversion events. Includes Google Ads Campaigns';
      }
    | {
        apiName: "character";
        uiName: "Character";
        description: "The player character in a game for an event. Populated by the event parameter 'character'.";
      }
    | {
        apiName: "city";
        uiName: "City";
        description: "The city from which the user activity originated.";
      }
    | {
        apiName: "cityId";
        uiName: "City ID";
        description: '"The geographic ID of the city from which the user activity originated';
      }
    | {
        apiName: "cohort";
        uiName: "Cohort";
        description: "\"The cohort's name in the request. A cohort is a set of users who started using your website or app in any consecutive group of days. If a cohort name is not specified in the request";
      }
    | {
        apiName: "cohortNthDay";
        uiName: "Daily cohort";
        description: '"Day offset relative to the firstSessionDate for the users in the cohort. For example';
      }
    | {
        apiName: "cohortNthMonth";
        uiName: "Monthly cohort";
        description: '"Month offset relative to the firstSessionDate for the users in the cohort. Month boundaries align with calendar month boundaries. For example';
      }
    | {
        apiName: "cohortNthWeek";
        uiName: "Weekly cohort";
        description: '"Week offset relative to the firstSessionDate for the users in the cohort. Weeks start on Sunday and end on Saturday. For example';
      }
    | {
        apiName: "contentGroup";
        uiName: "Content group";
        description: "A category that applies to items of published content. Populated by the event parameter 'content_group'.";
      }
    | {
        apiName: "contentId";
        uiName: "Content ID";
        description: "The identifier of the selected content. Populated by the event parameter 'content_id'.";
      }
    | {
        apiName: "contentType";
        uiName: "Content type";
        description: "The category of the selected content. Populated by the event parameter 'content_type'.";
      }
    | {
        apiName: "continent";
        uiName: "Continent";
        description: '"The continent from which the user activity originated. For example';
      }
    | {
        apiName: "continentId";
        uiName: "Continent ID";
        description: '"The geographic ID of the continent from which the user activity originated';
      }
    | {
        apiName: "country";
        uiName: "Country";
        description: "The country from which the user activity originated.";
      }
    | {
        apiName: "countryId";
        uiName: "Country ID";
        description: '"The geographic ID of the country from which the user activity originated';
      }
    | { apiName: "date"; uiName: "Date"; description: '"The date of the event' }
    | {
        apiName: "dateHour";
        uiName: "Date + hour (YYYYMMDDHH)";
        description: "The combined values of date and hour formatted as YYYYMMDDHH.";
      }
    | {
        apiName: "dateHourMinute";
        uiName: "Date hour and minute";
        description: '"The combined values of date';
      }
    | { apiName: "day"; uiName: "Day"; description: '"The day of the month' }
    | {
        apiName: "dayOfWeek";
        uiName: "Day of week";
        description: '"The integer day of the week. It returns values in the range [0';
      }
    | {
        apiName: "dayOfWeekName";
        uiName: "Day of week name";
        description: '"The day of the week in English. This dimension has values of Sunday';
      }
    | {
        apiName: "defaultChannelGroup";
        uiName: "Default channel group";
        description: "\"The conversion's default channel group is based primarily on source and medium. An enumeration which includes 'Direct'";
      }
    | {
        apiName: "deviceCategory";
        uiName: "Device category";
        description: '"The type of device: Desktop';
      }
    | {
        apiName: "deviceModel";
        uiName: "Device model";
        description: '"The mobile device model (example: iPhone 10';
      }
    | {
        apiName: "eventName";
        uiName: "Event name";
        description: "The name of the event.";
      }
    | {
        apiName: "fileExtension";
        uiName: "File extension";
        description: '"The extension of the downloaded file (for example';
      }
    | {
        apiName: "fileName";
        uiName: "File name";
        description: '"The page path of the downloaded file (for example';
      }
    | {
        apiName: "firstSessionDate";
        uiName: "First session date";
        description: "\"The date the user's first session occurred";
      }
    | {
        apiName: "firstUserCampaignId";
        uiName: "First user campaign ID";
        description: '"Identifier of the marketing campaign that first acquired the user. Includes Google Ads Campaigns';
      }
    | {
        apiName: "firstUserCampaignName";
        uiName: "First user campaign";
        description: '"Name of the marketing campaign that first acquired the user. Includes Google Ads Campaigns';
      }
    | {
        apiName: "firstUserDefaultChannelGroup";
        uiName: "First user default channel group";
        description: "\"The default channel group that first acquired the user. Default channel group is based primarily on source and medium. An enumeration which includes 'Direct'";
      }
    | {
        apiName: "firstUserGoogleAdsAccountName";
        uiName: "First user Google Ads account name";
        description: "The Account name from Google Ads that first acquired the user.";
      }
    | {
        apiName: "firstUserGoogleAdsAdGroupId";
        uiName: "First user Google Ads ad group ID";
        description: "The Ad Group Id in Google Ads that first acquired the user.";
      }
    | {
        apiName: "firstUserGoogleAdsAdGroupName";
        uiName: "First user Google Ads ad group name";
        description: "The Ad Group Name in Google Ads that first acquired the user.";
      }
    | {
        apiName: "firstUserGoogleAdsAdNetworkType";
        uiName: "First user Google Ads ad network type";
        description: "\"The advertising network that first acquired the user. An enumeration which includes 'Google search'";
      }
    | {
        apiName: "firstUserGoogleAdsCampaignId";
        uiName: "First user Google Ads campaign ID";
        description: "Identifier of the Google Ads marketing campaign that first acquired the user.";
      }
    | {
        apiName: "firstUserGoogleAdsCampaignName";
        uiName: "First user Google Ads campaign";
        description: "Name of the Google Ads marketing campaign that first acquired the user.";
      }
    | {
        apiName: "firstUserGoogleAdsCampaignType";
        uiName: "First user Google Ads campaign type";
        description: '"The campaign type of the Google Ads campaign that first acquired the user. Campaign types determine where customers see your ads and the settings and options available to you in Google Ads. Campaign type is an enumeration that includes: Search';
      }
    | {
        apiName: "firstUserGoogleAdsCreativeId";
        uiName: "First user Google Ads creative ID";
        description: "The ID of the Google Ads creative that first acquired the user. Creative IDs identify individual ads.";
      }
    | {
        apiName: "firstUserGoogleAdsCustomerId";
        uiName: "First user Google Ads customer ID";
        description: "The Customer ID from Google Ads that first acquired the user. Customer IDs in Google Ads uniquely identify Google Ads accounts.";
      }
    | {
        apiName: "firstUserGoogleAdsKeyword";
        uiName: "First user Google Ads keyword text";
        description: '"The matched keyword that first acquired the user. Keywords are words or phrases describing your product or service that you choose to get your ad in front of the right customers. To learn more about Keywords';
      }
    | {
        apiName: "firstUserGoogleAdsQuery";
        uiName: "First user Google Ads query";
        description: "The search query that first acquired the user.";
      }
    | {
        apiName: "firstUserManualAdContent";
        uiName: "First user manual ad content";
        description: "The ad content that first acquired the user. Populated by the utm_content parameter.";
      }
    | {
        apiName: "firstUserManualTerm";
        uiName: "First user manual term";
        description: "The term that first acquired the user. Populated by the utm_term parameter.";
      }
    | {
        apiName: "firstUserMedium";
        uiName: "First user medium";
        description: "The medium that first acquired the user to your website or app.";
      }
    | {
        apiName: "firstUserSource";
        uiName: "First user source";
        description: "The source that first acquired the user to your website or app.";
      }
    | {
        apiName: "firstUserSourceMedium";
        uiName: "First user source / medium";
        description: "The combined values of the dimensions 'firstUserSource' and 'firstUserMedium'.";
      }
    | {
        apiName: "firstUserSourcePlatform";
        uiName: "First user source platform";
        description: "The source platform that first acquired the user. Please do not depend on this field returning 'Manual' for traffic that uses UTMs; this field will update from returning 'Manual' to returning '(not set)' for an upcoming feature launch.";
      }
    | {
        apiName: "fullPageUrl";
        uiName: "Full page URL";
        description: '"The hostname';
      }
    | {
        apiName: "googleAdsAccountName";
        uiName: "Google Ads account name";
        description: "The Account name from Google Ads for the campaign that led to the conversion event. Corresponds to customer.descriptive_name in the Google Ads API.";
      }
    | {
        apiName: "googleAdsAdGroupId";
        uiName: "Google Ads ad group ID";
        description: "The ad group id attributed to the conversion event.";
      }
    | {
        apiName: "googleAdsAdGroupName";
        uiName: "Google Ads ad group name";
        description: "The ad group name attributed to the conversion event.";
      }
    | {
        apiName: "googleAdsAdNetworkType";
        uiName: "Google Ads ad network type";
        description: "\"The advertising network type of the conversion. An enumeration which includes 'Google search'";
      }
    | {
        apiName: "googleAdsCampaignId";
        uiName: "Google Ads campaign ID";
        description: "The campaign ID for the Google Ads campaign attributed to the conversion event.";
      }
    | {
        apiName: "googleAdsCampaignName";
        uiName: "Google Ads campaign";
        description: "The campaign name for the Google Ads campaign attributed to the conversion event.";
      }
    | {
        apiName: "googleAdsCampaignType";
        uiName: "Google Ads campaign type";
        description: '"The campaign type for the Google Ads campaign attributed to the conversion event. Campaign types determine where customers see your ads and the settings and options available to you in Google Ads. Campaign type is an enumeration that includes: Search';
      }
    | {
        apiName: "googleAdsCreativeId";
        uiName: "Google Ads creative ID";
        description: "The ID of the Google Ads creative attributed to the conversion event. Creative IDs identify individual ads.";
      }
    | {
        apiName: "googleAdsCustomerId";
        uiName: "Google Ads customer ID";
        description: "The Customer ID from Google Ads for the campaign that led to conversion event. Customer IDs in Google Ads uniquely identify Google Ads accounts.";
      }
    | {
        apiName: "googleAdsKeyword";
        uiName: "Google Ads keyword text";
        description: '"The matched keyword that led to the conversion event. Keywords are words or phrases describing your product or service that you choose to get your ad in front of the right customers. To learn more about Keywords';
      }
    | {
        apiName: "googleAdsQuery";
        uiName: "Google Ads query";
        description: "The search query that led to the conversion event.";
      }
    | {
        apiName: "groupId";
        uiName: "Group ID";
        description: "The player group ID in a game for an event. Populated by the event parameter 'group_id'.";
      }
    | {
        apiName: "hostName";
        uiName: "Hostname";
        description: '"Includes the subdomain and domain names of a URL; for example';
      }
    | {
        apiName: "hour";
        uiName: "Hour";
        description: "The two-digit hour of the day that the event was logged. This dimension ranges from 0-23 and is reported in your property's timezone.";
      }
    | {
        apiName: "isConversionEvent";
        uiName: "Is conversion event";
        description: "\"The string 'true' if the event is a conversion. Events are marked as conversions at collection time; changes to an event's conversion marking apply going forward. You can mark any event as a conversion in Google Analytics";
      }
    | {
        apiName: "isoWeek";
        uiName: "ISO week of the year";
        description: '"ISO week number';
      }
    | {
        apiName: "isoYear";
        uiName: "ISO year";
        description: '"The ISO year of the event. For details';
      }
    | {
        apiName: "isoYearIsoWeek";
        uiName: "ISO week of ISO year";
        description: "The combined values of isoWeek and isoYear. Example values include 201652 & 201701.";
      }
    | {
        apiName: "itemAffiliation";
        uiName: "Item affiliation";
        description: "The name or code of the affiliate (partner/vendor; if any) associated with an individual item. Populated by the 'affiliation' item parameter.";
      }
    | {
        apiName: "itemBrand";
        uiName: "Item brand";
        description: "Brand name of the item.";
      }
    | {
        apiName: "itemCategory";
        uiName: "Item category";
        description: '"The hierarchical category in which the item is classified. For example';
      }
    | {
        apiName: "itemCategory2";
        uiName: "Item category 2";
        description: '"The hierarchical category in which the item is classified. For example';
      }
    | {
        apiName: "itemCategory3";
        uiName: "Item category 3";
        description: '"The hierarchical category in which the item is classified. For example';
      }
    | {
        apiName: "itemCategory4";
        uiName: "Item category 4";
        description: '"The hierarchical category in which the item is classified. For example';
      }
    | {
        apiName: "itemCategory5";
        uiName: "Item category 5";
        description: '"The hierarchical category in which the item is classified. For example';
      }
    | {
        apiName: "itemId";
        uiName: "Item ID";
        description: "The ID of the item.";
      }
    | {
        apiName: "itemListId";
        uiName: "Item list ID";
        description: "The ID of the item list.";
      }
    | {
        apiName: "itemListName";
        uiName: "Item list name";
        description: "The name of the item list.";
      }
    | {
        apiName: "itemListPosition";
        uiName: "Item list position";
        description: '"The position of an item (e.g.';
      }
    | {
        apiName: "itemLocationID";
        uiName: "Item location ID";
        description: "The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. This field is populated in tagging by the 'location_id' parameter in the items array.";
      }
    | {
        apiName: "itemName";
        uiName: "Item name";
        description: "The name of the item.";
      }
    | {
        apiName: "itemPromotionCreativeName";
        uiName: "Item promotion creative name";
        description: "The name of the item-promotion creative.";
      }
    | {
        apiName: "itemPromotionCreativeSlot";
        uiName: "Item promotion creative slot";
        description: "\"The name of the promotional creative slot associated with the item. This dimension can be specified in tagging by the 'creative_slot' parameter at the event or item level. If the parameter is specified at both the event & item level";
      }
    | {
        apiName: "itemPromotionId";
        uiName: "Item promotion ID";
        description: "The ID of the item promotion.";
      }
    | {
        apiName: "itemPromotionName";
        uiName: "Item promotion name";
        description: "The name of the promotion for the item.";
      }
    | {
        apiName: "itemVariant";
        uiName: "Item variant";
        description: '"The specific variation of a product. e.g.';
      }
    | {
        apiName: "landingPage";
        uiName: "Landing page";
        description: "The page path associated with the first pageview in a session.";
      }
    | {
        apiName: "landingPagePlusQueryString";
        uiName: "Landing page + query string";
        description: "The page path + query string associated with the first pageview in a session.";
      }
    | {
        apiName: "language";
        uiName: "Language";
        description: "The language setting of the user's browser or device. e.g. English";
      }
    | {
        apiName: "languageCode";
        uiName: "Language code";
        description: "The language setting (ISO 639) of the user's browser or device. e.g. 'en-us'";
      }
    | {
        apiName: "level";
        uiName: "Level";
        description: "The player's level in a game. Populated by the event parameter 'level'.";
      }
    | {
        apiName: "linkClasses";
        uiName: "Link classes";
        description: "\"The HTML class attribute for an outbound link. For example if a user clicks a link ''";
      }
    | {
        apiName: "linkDomain";
        uiName: "Link domain";
        description: "\"The destination domain of the outbound link. For example if a user clicks a link ''";
      }
    | {
        apiName: "linkId";
        uiName: "Link ID";
        description: "\"The HTML id attribute for an outbound link or file download. For example if a user clicks a link ''";
      }
    | {
        apiName: "linkText";
        uiName: "Link text";
        description: "The link text of the file download. Automatically populated if Enhanced Measurement is enabled. Populated by the event parameter 'link_text'.";
      }
    | {
        apiName: "linkUrl";
        uiName: "Link URL";
        description: "\"The full url for an outbound link or file download. For example if a user clicks a link ''";
      }
    | {
        apiName: "manualAdContent";
        uiName: "Manual ad content";
        description: "The ad content attributed to the conversion event. Populated by the utm_content parameter.";
      }
    | {
        apiName: "manualTerm";
        uiName: "Manual term";
        description: "The term attributed to the conversion event. Populated by the utm_term parameter.";
      }
    | {
        apiName: "medium";
        uiName: "Medium";
        description: "The medium attributed to the conversion event.";
      }
    | {
        apiName: "method";
        uiName: "Method";
        description: "The method by which an event was triggered. Populated by the event parameter 'method'.";
      }
    | {
        apiName: "minute";
        uiName: "Minute";
        description: "The two-digit minute of the hour that the event was logged. This dimension ranges from 0-59 and is reported in your property's timezone.";
      }
    | {
        apiName: "mobileDeviceBranding";
        uiName: "Device brand";
        description: '"Manufacturer or branded name (examples: Samsung';
      }
    | {
        apiName: "mobileDeviceMarketingName";
        uiName: "Device";
        description: "The branded device name (examples: Galaxy S10 or P30 Pro).";
      }
    | {
        apiName: "mobileDeviceModel";
        uiName: "Mobile model";
        description: "The mobile device model name (examples: iPhone X or SM-G950F).";
      }
    | {
        apiName: "month";
        uiName: "Month";
        description: '"The month of the event';
      }
    | {
        apiName: "newVsReturning";
        uiName: "New / returning";
        description: '"New users have 0 previous sessions';
      }
    | {
        apiName: "nthDay";
        uiName: "Nth day";
        description: "The number of days since the start of the date range.";
      }
    | {
        apiName: "nthHour";
        uiName: "Nth hour";
        description: "The number of hours since the start of the date range. The starting hour is 0000.";
      }
    | {
        apiName: "nthMinute";
        uiName: "Nth minute";
        description: "The number of minutes since the start of the date range. The starting minute is 0000.";
      }
    | {
        apiName: "nthMonth";
        uiName: "Nth month";
        description: "The number of months since the start of a date range. The starting month is 0000.";
      }
    | {
        apiName: "nthWeek";
        uiName: "Nth week";
        description: "A number representing the number of weeks since the start of a date range.";
      }
    | {
        apiName: "nthYear";
        uiName: "Nth year";
        description: "The number of years since the start of the date range. The starting year is 0000.";
      }
    | {
        apiName: "operatingSystem";
        uiName: "Operating system";
        description: "The operating systems used by visitors to your app or website. Includes desktop and mobile operating systems such as Windows and Android.";
      }
    | {
        apiName: "operatingSystemVersion";
        uiName: "OS version";
        description: '"The operating system versions used by visitors to your website or app. For example';
      }
    | {
        apiName: "operatingSystemWithVersion";
        uiName: "Operating system with version";
        description: '"The operating system and version. For example';
      }
    | {
        apiName: "orderCoupon";
        uiName: "Order coupon";
        description: "Code for the order-level coupon.";
      }
    | {
        apiName: "outbound";
        uiName: "Outbound";
        description: "Returns 'true' if the link lead to a site is not a part of the property’s domain. Automatically populated if Enhanced Measurement is enabled. Populated by the event parameter 'outbound'.";
      }
    | {
        apiName: "pageLocation";
        uiName: "Page location";
        description: '"The protocol';
      }
    | {
        apiName: "pagePath";
        uiName: "Page path";
        description: '"The portion of the URL between the hostname and query string for web pages visited; for example';
      }
    | {
        apiName: "pagePathPlusQueryString";
        uiName: "Page path + query string";
        description: '"The portion of the URL following the hostname for web pages visited; for example';
      }
    | {
        apiName: "pageReferrer";
        uiName: "Page referrer";
        description: "The full referring URL including the hostname and path. This referring URL is the user's previous URL and can be this website's domain or other domains. Populated by the event parameter 'page_referrer'.";
      }
    | {
        apiName: "pageTitle";
        uiName: "Page title";
        description: "The web page titles used on your site.";
      }
    | {
        apiName: "percentScrolled";
        uiName: "Percent scrolled";
        description: '"The percentage down the page that the user has scrolled (for example';
      }
    | {
        apiName: "platform";
        uiName: "Platform";
        description: '"The platform on which your app or website ran; for example';
      }
    | {
        apiName: "platformDeviceCategory";
        uiName: "Platform / device category";
        description: "The platform and type of device on which your website or mobile app ran. (example: Android / mobile)";
      }
    | {
        apiName: "region";
        uiName: "Region";
        description: '"The geographic region from which the user activity originated';
      }
    | {
        apiName: "screenResolution";
        uiName: "Screen resolution";
        description: "\"The screen resolution of the user's monitor. For example";
      }
    | {
        apiName: "searchTerm";
        uiName: "Search term";
        description: "\"The term searched by the user. For example if the user visits '/some-page.html?q=some-term'";
      }
    | {
        apiName: "sessionCampaignId";
        uiName: "Session campaign ID";
        description: '"The marketing campaign id for a session. Includes Google Ads Campaigns';
      }
    | {
        apiName: "sessionCampaignName";
        uiName: "Session campaign";
        description: '"The marketing campaign name for a session. Includes Google Ads Campaigns';
      }
    | {
        apiName: "sessionDefaultChannelGroup";
        uiName: "Session default channel group";
        description: "\"The session's default channel group is based primarily on source and medium. An enumeration which includes 'Direct'";
      }
    | {
        apiName: "sessionGoogleAdsAccountName";
        uiName: "Session Google Ads account name";
        description: "The Account name from Google Ads that led to the session. Corresponds to customer.descriptive_name in the Google Ads API.";
      }
    | {
        apiName: "sessionGoogleAdsAdGroupId";
        uiName: "Session Google Ads ad group ID";
        description: "The Ad Group Id in Google Ads for a session.";
      }
    | {
        apiName: "sessionGoogleAdsAdGroupName";
        uiName: "Session Google Ads ad group name";
        description: "The Ad Group Name in Google Ads for a session.";
      }
    | {
        apiName: "sessionGoogleAdsAdNetworkType";
        uiName: "Session Google Ads ad network type";
        description: "\"The advertising network that led to the session. An enumeration which includes 'Google search'";
      }
    | {
        apiName: "sessionGoogleAdsCampaignId";
        uiName: "Session Google Ads campaign ID";
        description: "The Campaign ID for the Google Ads Campaign that led to this session.";
      }
    | {
        apiName: "sessionGoogleAdsCampaignName";
        uiName: "Session Google Ads campaign";
        description: "The Campaign name for the Google Ads Campaign that led to this session.";
      }
    | {
        apiName: "sessionGoogleAdsCampaignType";
        uiName: "Session Google Ads campaign type";
        description: '"The campaign type for the Google Ads campaign that led to this session. Campaign types determine where customers see your ads and the settings and options available to you in Google Ads. Campaign type is an enumeration that includes: Search';
      }
    | {
        apiName: "sessionGoogleAdsCreativeId";
        uiName: "Session Google Ads creative ID";
        description: "The ID of the Google Ads creative that lead to a session on your website or app. Creative IDs identify individual ads.";
      }
    | {
        apiName: "sessionGoogleAdsCustomerId";
        uiName: "Session Google Ads customer ID";
        description: "The Customer ID from Google Ads that led to the session. Customer IDs in Google Ads uniquely identify Google Ads accounts.";
      }
    | {
        apiName: "sessionGoogleAdsKeyword";
        uiName: "Session Google Ads keyword text";
        description: '"The matched keyword that led to the session. Keywords are words or phrases describing your product or service that you choose to get your ad in front of the right customers. To learn more about Keywords';
      }
    | {
        apiName: "sessionGoogleAdsQuery";
        uiName: "Session Google Ads query";
        description: "The search query that led to the session.";
      }
    | {
        apiName: "sessionManualAdContent";
        uiName: "Session manual ad content";
        description: "The ad content that led to a session. Populated by the utm_content parameter.";
      }
    | {
        apiName: "sessionManualTerm";
        uiName: "Session manual term";
        description: "The term that led to a session. Populated by the utm_term parameter.";
      }
    | {
        apiName: "sessionMedium";
        uiName: "Session medium";
        description: "The medium that initiated a session on your website or app.";
      }
    | {
        apiName: "sessionSa360AdGroupName";
        uiName: "Session SA360 ad group name";
        description: "The Ad Group name from Search Ads 360 that led to this session.";
      }
    | {
        apiName: "sessionSa360CampaignId";
        uiName: "Session SA360 campaign ID";
        description: "The Campaign ID from Search Ads 360 that led to this session.";
      }
    | {
        apiName: "sessionSa360CampaignName";
        uiName: "Session SA360 campaign";
        description: "The Campaign name from Search Ads 360 that led to this session.";
      }
    | {
        apiName: "sessionSa360CreativeFormat";
        uiName: "Session SA360 creative format";
        description: '"The type of creative in Search Ads 360 that led to this session. For example';
      }
    | {
        apiName: "sessionSa360EngineAccountId";
        uiName: "Session SA360 engine account ID";
        description: "The ID of the engine account in SA360 that led to this session.";
      }
    | {
        apiName: "sessionSa360EngineAccountName";
        uiName: "Session SA360 engine account name";
        description: "The name of the engine account in SA360 that led to this session.";
      }
    | {
        apiName: "sessionSa360EngineAccountType";
        uiName: "Session SA360 engine account type";
        description: '"The type of the engine account in Search Ads 360 that led to this session. For example';
      }
    | {
        apiName: "sessionSa360Keyword";
        uiName: "Session SA360 keyword text";
        description: "The search engine keyword from Search Ads 360 that led to this session.";
      }
    | {
        apiName: "sessionSa360Medium";
        uiName: "Session SA360 medium";
        description: '"The search engine keyword from Search Ads 360 that led to this session. For example';
      }
    | {
        apiName: "sessionSa360Query";
        uiName: "Session SA360 query";
        description: "The search query from Search Ads 360 that led to this session.";
      }
    | {
        apiName: "sessionSa360Source";
        uiName: "Session SA360 source";
        description: '"The source of the traffic from Search Ads 360 that led to this session. For example';
      }
    | {
        apiName: "sessionSource";
        uiName: "Session source";
        description: "The source that initiated a session on your website or app.";
      }
    | {
        apiName: "sessionSourceMedium";
        uiName: "Session source / medium";
        description: "The combined values of the dimensions 'sessionSource' and 'sessionMedium'.";
      }
    | {
        apiName: "sessionSourcePlatform";
        uiName: "Session source platform";
        description: "The source platform of the session's campaign. Please do not depend on this field returning 'Manual' for traffic that uses UTMs; this field will update from returning 'Manual' to returning '(not set)' for an upcoming feature launch.";
      }
    | {
        apiName: "shippingTier";
        uiName: "Shipping tier";
        description: '"The shipping tier (e.g. Ground';
      }
    | {
        apiName: "signedInWithUserId";
        uiName: "Signed in with user ID";
        description: "\"The string 'yes' if the user signed in with the User-ID feature. To learn more about User-ID";
      }
    | {
        apiName: "source";
        uiName: "Source";
        description: "The source attributed to the conversion event.";
      }
    | {
        apiName: "sourceMedium";
        uiName: "Source / medium";
        description: "The combined values of the dimensions 'source' and 'medium'.";
      }
    | {
        apiName: "sourcePlatform";
        uiName: "Source platform";
        description: "The source platform of the conversion event's campaign. Please do not depend on this field returning 'Manual' for traffic that uses UTMs; this field will update from returning 'Manual' to returning '(not set)' for an upcoming feature launch.";
      }
    | {
        apiName: "streamId";
        uiName: "Stream ID";
        description: "The numeric data stream identifier for your app or website.";
      }
    | {
        apiName: "streamName";
        uiName: "Stream name";
        description: "The data stream name for your app or website.";
      }
    | {
        apiName: "testDataFilterId";
        uiName: "Test data filter ID";
        description: '"The numeric identifier of a data filter in testing state. You use data filters to include or exclude event data from your reports based on event-parameter values. To learn more';
      }
    | {
        apiName: "testDataFilterName";
        uiName: "Test data filter name";
        description: '"The name of data filters in testing state. You use data filters to include or exclude event data from your reports based on event-parameter values. To learn more';
      }
    | {
        apiName: "transactionId";
        uiName: "Transaction ID";
        description: "The ID of the ecommerce transaction.";
      }
    | {
        apiName: "unifiedPagePathScreen";
        uiName: "Page path and screen class";
        description: "The page path (web) or screen class (app) on which the event was logged.";
      }
    | {
        apiName: "unifiedPageScreen";
        uiName: "Page path + query string and screen class";
        description: "The page path and query string (web) or screen class (app) on which the event was logged.";
      }
    | {
        apiName: "unifiedScreenClass";
        uiName: "Page title and screen class";
        description: "The page title (web) or screen class (app) on which the event was logged.";
      }
    | {
        apiName: "unifiedScreenName";
        uiName: "Page title and screen name";
        description: "The page title (web) or screen name (app) on which the event was logged.";
      }
    | {
        apiName: "userAgeBracket";
        uiName: "Age";
        description: "User age brackets.";
      }
    | { apiName: "userGender"; uiName: "Gender"; description: "User gender." }
    | {
        apiName: "videoProvider";
        uiName: "Video provider";
        description: '"The source of the video (for example';
      }
    | {
        apiName: "videoTitle";
        uiName: "Video title";
        description: "The title of the video. Automatically populated for embedded videos if Enhanced Measurement is enabled. Populated by the event parameter 'video_title'.";
      }
    | {
        apiName: "videoUrl";
        uiName: "Video URL";
        description: "The url of the video. Automatically populated for embedded videos if Enhanced Measurement is enabled. Populated by the event parameter 'video_url'.";
      }
    | {
        apiName: "virtualCurrencyName";
        uiName: "Virtual currency name";
        description: "The name of a virtual currency with which the user is interacting. i.e. spending or purchasing gems in a game. Populated by the 'virtual_currency_name' event parameter.";
      }
    | {
        apiName: "visible";
        uiName: "Visible";
        description: "Returns 'true' if the content is visible. Automatically populated for embedded videos if Enhanced Measurement is enabled. Populated by the event parameter 'visible'.";
      }
    | { apiName: "week"; uiName: "Week"; description: '"The week of the event' }
    | {
        apiName: "year";
        uiName: "Year";
        description: "The four-digit year of the event e.g. 2020.";
      }
    | {
        apiName: "yearMonth";
        uiName: "Year month";
        description: "The combined values of year and month. Example values include 202212 or 202301.";
      }
    | {
        apiName: "yearWeek";
        uiName: "Year week";
        description: "The combined values of year and week. Example values include 202253 or 202301.";
      };
}
