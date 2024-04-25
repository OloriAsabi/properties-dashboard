// routeConfig.tsx
import { FC } from 'react';
import { MdHomeWork } from 'react-icons/md';
import { Properties, PropertiesDetails } from './pages';

interface RouteType {
  name: string;
  icon: FC<any>; // Use FC<any> or specific Props type based on your component
  path: string;
  component: FC<any>; // Use FC<any> or specific Props type based on your component
}

const routes: RouteType[] = [
  {
    name: 'Properties Tables',
    icon: MdHomeWork,
    path: '/properties',
    component: Properties,
  },
  {
    name: 'Property Details',
    icon: MdHomeWork, // Update with appropriate icon
    path: '/properties/:propertyId',
    component: PropertiesDetails,
  },
];

export default routes;
