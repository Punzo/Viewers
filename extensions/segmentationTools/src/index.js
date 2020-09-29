import React from 'react';
import commandsModule from './commandsModule.js';
import toolbarModule from './toolbarModule.js';
import { version } from '../package.json';

const Component = React.lazy(() => {
  return import('../../cornerstone/src/OHIFCornerstoneViewport');
});

const OHIFCornerstoneViewport = props => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

/**
 *
 */
export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'segmentationTools',
  version,

  /**
   *
   *
   * @param {object} [configuration={}]
   * @param {object|array} [configuration.csToolsConfig] - Passed directly to `initCornerstoneTools`
   */
  preRegistration({
    servicesManager = {},
    commandsManager = {},
    appConfig = {},
    configuration = {},
  }) {},
  getViewportModule({ commandsManager }) {
    return OHIFCornerstoneViewport;
  },
  getToolbarModule() {
    return toolbarModule;
  },
  getCommandsModule({ servicesManager }) {
    return commandsModule({ servicesManager });
  },
};
