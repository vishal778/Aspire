const INITIAL_STATE = {};

export default (state = INITIAL_STATE, actions: {type: string} & any) => {
  switch (actions.type) {
    default:
      return state;
  }
};
