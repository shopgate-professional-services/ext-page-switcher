module.exports = async (context) => {
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
  }

  return { selection };
};
