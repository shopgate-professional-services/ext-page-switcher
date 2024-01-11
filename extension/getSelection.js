module.exports = async (context) => {
  try {
    let selection;

    // get selection from cache
    const cachedSelection = await context.storage.device.get('selection');

    // first start and read config default
    if (!cachedSelection) {
      selection = context.config.pageLinking.find(({ path }) => path === '/');
      context.log.info('First start with the homepage from the config');
    } else {
      selection = cachedSelection;
      context.log.info('New start with cached selection');
    }

    return { selection };
  } catch (err) {
    context.log.error(err, 'Selection from cache could not be retrieved');

    throw err;
  }
};
