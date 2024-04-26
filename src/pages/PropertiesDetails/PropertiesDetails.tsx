import { Box, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tableDataComplex, { RowObj } from '../../data/data';
import PropertiesDetailsCard from './components/PropertiesDetailsCard';
import CommunityOverview from './components/CommunityOverview';
import PropertyImage from './components/PropertyImage';
import PropertyRentalDetails from './components/PropertyRentalDetails';
import PropertyLeaseCard from './components/PropertyLeaseCard';
import PropertyPortfolioCard from './components/PropertyPortfolioCard';
import RentSignedDocument from './components/RentSignedDocument';

const PropertiesDetails = () => {
      // Determine the number of columns based on screen size
  const numColumns = useBreakpointValue({ base: 1, md: 2, xl: 2 });
  const { propertyId } = useParams<{ propertyId: string }>();
  const [property, setProperty] = useState<RowObj | null>(null);

  console.log("Id: ", propertyId);

  useEffect(() => {
    // Filter the tableDataComplex array based on the id parameter
    const filteredData = tableDataComplex.find((item: RowObj) => item?.id === propertyId);

    // If filteredData is found, update the state with the property data
    if (filteredData) {
      setProperty(filteredData);
    } else {
      // If no data found, you can handle it here
      console.log('No data found for the specified ID:', propertyId);
    }
  }, [propertyId]);

  if (!property) {
    return <div>No data found for the specified ID.</div>;
  }

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Grid
        templateColumns={`repeat(${numColumns}, 1fr)`}
        gap={{ base: '20px', xl: '20px' }}
      >
        <GridItem>
          <PropertiesDetailsCard property={property} />
        </GridItem>
        <GridItem>
          <PropertyImage />
        </GridItem>
        <GridItem>
          <CommunityOverview />
        </GridItem>
        <GridItem>
          <PropertyRentalDetails property={property} />
        </GridItem>
        <GridItem>
          <PropertyLeaseCard property={property} />
        </GridItem>
        <GridItem>
          <PropertyPortfolioCard landlord={property} /> {/* Include PropertyPortfolioCard */}
        </GridItem>
        <GridItem>
          <RentSignedDocument property={property} /> {/* Include PropertyPortfolioCard */}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PropertiesDetails;
