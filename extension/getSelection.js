/**
 * Check if the selection object is empty
 * @param {Object} selection The selected page
 * @returns {boolean}
 */
function isEmpty(selection) {
  if (Object.keys(selection).length === 0) {
    return true;
  }
  return false;
}

module.exports = async (context, { selection }) => {
  try {
    let updatedSelection = {};
    let cachedSelection = {};

    // get selection from cache
    try {
      cachedSelection = await context.storage.extension.get('selection');
    } catch (err) {
      context.log.error(err, 'Unable to fetch selection from cache');
    }

    // first start and read config default
    if (isEmpty(cachedSelection) && isEmpty(selection)) {
      updatedSelection = context.config.pageLinking.find(({ path }) => path === '/');
      context.log.info('First start with default path/category');
    }

    // new start and use selection from cache
    if (!isEmpty(cachedSelection) && isEmpty(selection)) {
      updatedSelection = cachedSelection;
      context.log.info('New start with cache selection');
    }

    if (!isEmpty(cachedSelection) && !isEmpty(selection)) {
      updatedSelection = selection;
      context.log.info(updatedSelection, 'Selection changed');
    }

    // set cache to new selection
    await context.storage.extension.set('selection', updatedSelection).catch((err) => {
      context.log.error(err, 'Unable to cache selection');
    });

    return { updatedSelection };
  } catch (err) {
    context.log.error(err, 'Failed getting selection');

    throw err;
  }
};
