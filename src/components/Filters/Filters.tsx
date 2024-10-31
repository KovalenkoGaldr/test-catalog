import React, { useState } from 'react';

import styles from './filters.module.scss';

const categories = ['women’s clothing', 'men’s clothing', 'electronics', 'jewelery'];

interface FiltersProps {
  onFilterChange: (selectedFilters: string[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleCheckboxChange = (category: string) => {
    const newSelectedFilters = selectedFilters.includes(category)
      ? selectedFilters.filter((filter) => filter !== category)
      : [...selectedFilters, category];

    setSelectedFilters(newSelectedFilters);
    onFilterChange(newSelectedFilters);
  };

  return (
    <div className={styles.filters}>
      <h3>Filters</h3>
      {categories.map((category) => (
        <label key={category} className={styles.filterOption}>
          <input
            type="checkbox"
            checked={selectedFilters.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default Filters;