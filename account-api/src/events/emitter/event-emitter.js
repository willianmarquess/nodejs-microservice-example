import events from 'events';

class EventProvider extends events.EventEmitter{
    constructor(){
        super();
    }
}

const eventProvider = new EventProvider();

export default eventProvider;