module.exports = async (context) => {
  try {
    let selection;

    // get selection from cache
    const cachedSelection = await context.storage.device.get('selection');
    const isConfigured = context.config.pageLinking.some(
      ({ path }) => (cachedSelection ? path === cachedSelection.path : false)
    );

    // first start or the cached selection is not configured
    if (!cachedSelection || !isConfigured) {
      selection = context.config.pageLinking.find(({ path }) => path === '/');

      // missing or wrong config
      if (!selection) {
        selection = {
          label: null,
          categoryId: null,
          path: '/',
        };
      }
    } else {
      selection = cachedSelection;
      context.log.info('New app start with cached selection');
    }

    return { selection };
  } catch (err) {
    context.log.error(err, 'Selection from cache could not be retrieved');

    throw err;
  }
};
