export interface Application {
    key: string;
    id: string;
    name: string;
    reason: string;
    submissionDate: string;
    type: string;
    status: string[];
  }

  export interface TableDataItem {
    propertyName: string;
    unitType: string;
    approximateMonthlyRent: string;
    householdSize: string;
    minimumAnnualIncome: string;
    maximumAnnualIncome: string;
    applicationPeriodStart: string;
    applicationPeriodEnd: string;
    availableUnits: string;
    city: string;
    lotteryDate: string;
    status: string;
    stepsForApplication: string;
    submissionDate: string;
    waitlistPosition: string;
    waitlistSlots: string;
  }
  
  