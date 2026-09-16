import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryList } from '@shopgate/engage/category/components';
import { getCategoryChildren } from '@shopgate/pwa-common-commerce/category/selectors';
import { getSelection } from '../../selectors';

/**
 * The BrowseCategoryList component, showing a category list on the browse page
 * @returns {JSX.Element|null}
 */
const BrowseCategoryList = () => {
  const { categoryId } = useSelector(getSelection);
  const categories = useSelector(state => getCategoryChildren(state, { categoryId }));

  if (!categories) {
    return null;
  }

  return (
    <CategoryList categories={categories} />
  );
};

export default BrowseCategoryList;
