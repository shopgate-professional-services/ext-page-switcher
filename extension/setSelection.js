module.exports = async (context, { newSelection }) => {
  await context.storage.device.set('selection', newSelection);
};
