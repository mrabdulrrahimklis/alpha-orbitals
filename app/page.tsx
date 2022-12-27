import { FilterProvider } from './context/FilterContext';
import { SearchProvider } from './context/SearchContext';
import { ToggleProvider } from './context/ToggleContext';
import HomePage from './HomePage';

const Page = async () => (
  <ToggleProvider>
    <FilterProvider>
      <SearchProvider>
        <HomePage />
      </SearchProvider>
    </FilterProvider>
  </ToggleProvider>
);

export default Page;
