const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
  BUILT_IN: 'builtIn',
};

const definitions = [
  {
    id: 'threshold',
    label: 'Threshold',
    icon: 'cube',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'threshold',
  },
  {
    id: 'increaseThreshold',
    label: 'Increase Threshold',
    icon: 'caret-up',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'increaseThreshold',
    commandOptions: {},
  },
  {
    id: 'decreaseThreshold',
    label: 'Decrease Threshold',
    icon: 'caret-down',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'decreaseThreshold',
    commandOptions: {},
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
