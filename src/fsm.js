class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (!config){
        throw new Error;
        }
      this.state = config.initial;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {return this.state;}

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
      var a = this.state;
      this.prevState = a;
      this.state = state;
      }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
     trigger(event) {
       var a = this.state;
       this.prevState = a;
       this.event = event;
       if (this.event=='study'){this.state ='busy'}
       if (this.event=='get_tired'){this.state='sleeping'}
       if (this.event=='get_hungry'){this.state='hungry'}
       if (this.event=='eat'){this.state='normal'}
       if (this.event=='get_up'){this.state='normal'}
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
       this.state = 'normal';
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
      var state1 = 'normal';
      var state2 = 'busy';
      var state3 = 'hungry';
      var state4 = 'sleeping';
      if (!event){return [state1,state2,state3,state4]}
      this.event = event;
      if (this.event=='study'){return [state1]}
      if (this.event=='get_tired'){return [state2]}
      if (this.event=='get_hungry'){return [state2,state4]}
      if (this.event=='eat'){return [state3]}
      if (this.event=='get_up'){return [state4]}
      else {return []}
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
      if (this.state == 'normal'){return false};
      var a = this.prevState;
      var b = this.state;
      this.beforUndo = b;
      this.state = a;
      return true
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
      if (this.state == 'normal'){return false};
      var b = this.beforUndo;
      this.state = b;
    }

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
