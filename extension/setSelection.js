module.exports = async (context, { newSelection }) => {
  try {
    await context.storage.device.set('selection', newSelection);
    context.log.info(`New selection is '${newSelection.path}'`);
  } catch (err) {
    context.log.error(err, 'Failed to set new selection');

    throw err;
  }
};
