import { utils } from '@ohif/core';
import { getEnabledElement } from '../../cornerstone/src/state';
//const { studyMetadataManager } = utils;

const commandsModule = ({ servicesManager }) => {
  let arrayCache = [];
  let thresholdCache = 150;

  const actions = {
    threshold: ({ viewports }) => {
      const element = getEnabledElement(viewports.activeViewportIndex);
      if (!element) {
        return;
      }
      const enabledElement = cornerstone.getEnabledElement(element);
      if (!enabledElement) {
        return;
      }

      let image = enabledElement.image;
      if (!image) {
        return;
      }

      let array = image.getPixelData();

      if (arrayCache.length == 0) {
        arrayCache = [...array];
      }

      for (let ii = 0; ii < array.length; ii++) {
        array[ii] = arrayCache[ii] < thresholdCache ? 0 : arrayCache[ii];
      }
    },
    changeThreshold: ({ change }) => {
      thresholdCache = thresholdCache + change;
      console.info('current threshold: ' + thresholdCache);
    },
  };

  const definitions = {
    threshold: {
      commandFn: actions.threshold,
      storeContexts: ['viewports'],
      options: {},
    },
    increaseThreshold: {
      commandFn: actions.changeThreshold,
      options: {
        change: 25,
      },
    },
    decreaseThreshold: {
      commandFn: actions.changeThreshold,
      options: {
        change: -25,
      },
    },
  };

  return {
    actions,
    definitions,
    defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
  };
};

export default commandsModule;
