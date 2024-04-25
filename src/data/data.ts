export type RowObj = {
    id: string; // Unique identifier for each property
    address: string;
    type: string;
    portfolio: string;
    tenants: string[];
    county: string;
    legalDescription: string;
    yearBuilt: number;
    propertyRentalDetail: PropertyRentalDetail;
  };
  
  export type PropertyRentalDetail = {
    beds: number;
    marketRentAmount: string;
    baths: number;
    size: string;
    securityDepositAmount: string;
    propertyManager: string;
    nonRevenueUnit: string;
    nonRevenueType?: string;
    nonRevenueStartDate?: string;
  };
  
  
  const tableDataComplex: RowObj[] = [
    {
        id: '1',
        address: '123 Main St',
        type: 'Single Family Home',
        portfolio: 'John Doe',
        tenants: ['Alice', 'Bob', 'Charlie'],
        county: 'Example County',
        legalDescription: 'Lot 1, Block A',
        yearBuilt: 2000,
        propertyRentalDetail: {
          beds: 3,
          marketRentAmount: '15000',
          baths: 2,
          size: '2000 sqft',
          securityDepositAmount: '1000',
          propertyManager: 'Property Management Inc.',
          nonRevenueUnit: 'No',
        },
      },
      {
        id: '2',
        address: '456 Elm St',
        type: 'Apartment Complex',
        portfolio: 'Jane Smith',
        tenants: ['David', 'Emma', 'Frank'],
        county: '',
        legalDescription: '',
        yearBuilt: 0,
        propertyRentalDetail: {
          beds: 3,
          marketRentAmount: '120000',
          baths: 5,
          size: '5sq.ft',
          securityDepositAmount: '10000',
          propertyManager: 'Chris Moon',
          nonRevenueUnit: 'yes',
          nonRevenueType: 'Renovation',
          nonRevenueStartDate: '01-11-2023',
        },
      },
      {
        id: '3',
        address: '789 Oak St',
        type: 'Condominium',
        portfolio: 'Michael Johnson',
        tenants: ['Grace', 'Henry', 'Isabella'],
        county: 'Example County',
        legalDescription: 'Lot 2, Block B',
        yearBuilt: 1995,
        propertyRentalDetail: {
          beds: 2,
          marketRentAmount: '1800',
          baths: 2,
          size: '1500 sqft',
          securityDepositAmount: '1200',
          propertyManager: 'Real Estate Solutions',
          nonRevenueUnit: 'yes',
        },
      },
      {
        id: '4',
        address: '101 Pine St',
        type: 'Townhouse',
        portfolio: 'Sarah Brown',
        tenants: ['Jack', 'Katie', 'Liam'],
        county: 'Example County',
        legalDescription: 'Lot 3, Block C',
        yearBuilt: 2008,
        propertyRentalDetail: {
          beds: 3,
          marketRentAmount: '2500',
          baths: 2,
          size: '1800 sqft',
          securityDepositAmount: '1500',
          propertyManager: 'Citywide Property Management',
          nonRevenueUnit: 'yes',
        },
      },
      {
        id: '5',
        address: '222 Oak St',
        type: 'Single Family Home',
        portfolio: 'Emily Brown',
        tenants: ['John', 'Mary'],
        county: 'Example County',
        legalDescription: 'Lot 4, Block D',
        yearBuilt: 2010,
        propertyRentalDetail: {
          beds: 4,
          marketRentAmount: '3000',
          baths: 3,
          size: '2500 sqft',
          securityDepositAmount: '2000',
          propertyManager: 'Sunrise Realty',
          nonRevenueUnit: 'no',
        },
      },
      {
        id: '6',
        address: '333 Elm St',
        type: 'Apartment Complex',
        portfolio: 'David Johnson',
        tenants: ['Alex', 'Sophie', 'Ryan'],
        county: 'Example County',
        legalDescription: 'Lot 5, Block E',
        yearBuilt: 2005,
        propertyRentalDetail: {
          beds: 2,
          marketRentAmount: '2000',
          baths: 2,
          size: '1200 sqft',
          securityDepositAmount: '1300',
          propertyManager: 'Apartment Management LLC',
          nonRevenueUnit: 'yes',
        },
      },
      {
        id: '7',
        address: '777 Maple St',
        type: 'Duplex',
        portfolio: 'Daniel White',
        tenants: ['Sophia', 'Ethan'],
        county: 'Example County',
        legalDescription: 'Lot 6, Block F',
        yearBuilt: 2015,
        propertyRentalDetail: {
          beds: 2,
          marketRentAmount: '2200',
          baths: 2,
          size: '1600 sqft',
          securityDepositAmount: '1400',
          propertyManager: 'Metro Rentals',
          nonRevenueUnit: 'no',
        },
      },
      {
        id: '8',
        address: '888 Elm St',
        type: 'Condo',
        portfolio: 'Jessica Parker',
        tenants: ['Ryan', 'Ava'],
        county: 'Example County',
        legalDescription: 'Lot 7, Block G',
        yearBuilt: 2012,
        propertyRentalDetail: {
          beds: 1,
          marketRentAmount: '1700',
          baths: 1,
          size: '800 sqft',
          securityDepositAmount: '1100',
          propertyManager: 'Elite Realty',
          nonRevenueUnit: 'yes',
        },
      },
      {
        id: '9',
        address: '999 Oak St',
        type: 'Single Family Home',
        portfolio: 'Christopher Taylor',
        tenants: ['Emma', 'David', 'Liam'],
        county: 'Example County',
        legalDescription: 'Lot 8, Block H',
        yearBuilt: 2003,
        propertyRentalDetail: {
          beds: 3,
          marketRentAmount: '2800',
          baths: 2,
          size: '1700 sqft',
          securityDepositAmount: '1600',
          propertyManager: 'Premier Properties',
          nonRevenueUnit: 'no',
        },
      },
      {
        id: '10',
        address: '123 Cedar St',
        type: 'Apartment',
        portfolio: 'Rachel Adams',
        tenants: ['Noah', 'Olivia'],
        county: 'Example County',
        legalDescription: 'Lot 9, Block I',
        yearBuilt: 2018,
        propertyRentalDetail: {
          beds: 2,
          marketRentAmount: '1900',
          baths: 1,
          size: '1000 sqft',
          securityDepositAmount: '1200',
          propertyManager: 'Central Rentals',
          nonRevenueUnit: 'yes',
        },
      },
  ];
  
  export default tableDataComplex;
  