class AllEvents extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            events: []
        }
    }
    
    componentDidMount(){
        this.getDataFromApi();
    }
    
    getDataFromApi(){
        $.getJSON('/api/events',(response) => { this.setState({events: response})})
    }
    
    render(){
        var events = this.state.events.map((event) => {
            return(
                  <div key={event.id}>
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                  </div>
                )
        });
        
        return(
              <div>
                {events}
              </div>
            )
    }
    
}