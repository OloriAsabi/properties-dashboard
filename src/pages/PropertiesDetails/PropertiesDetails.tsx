import { Box, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tableDataComplex, { RowObj } from '../../data/data';
import PropertiesDetailsCard from './components/PropertiesDetailsCard';
import CommunityOverview from './components/CommunityOverview';
import PropertyImage from './components/PropertyImage';

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
    <SimpleGrid mb='20px' columns={numColumns} spacing={{ base: '20px', xl: '20px' }}
    >
      <Box display={'flex'}
      flexDirection={'column'}
      >
      <PropertiesDetailsCard property={property} />
      <PropertyImage />
      </Box>
      <CommunityOverview/>
      </SimpleGrid>
    </Box>
  );
};

export default PropertiesDetails;
