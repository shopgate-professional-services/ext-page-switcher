import React from 'react';
import PropTypes from 'prop-types';
import { CategoryList } from '@shopgate/engage/category/components';
import connect from './connector';

/**
 * The BrowseCategoryList component, showing a category list on the browse page
 * @param {Object} props The component props.
 * @param {Array} props.categories the categories for the category list
 * @returns {JSX.Element}
 */
const BrowseCategoryList = ({ categories }) => {
  if (!categories) {
    return null;
  }
  return (
    <CategoryList categories={categories} />
  );
};

BrowseCategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()),
};

BrowseCategoryList.defaultProps = {
  categories: null,
};

export default connect(BrowseCategoryList);
