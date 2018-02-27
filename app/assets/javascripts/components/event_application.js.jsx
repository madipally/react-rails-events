class EventApplication extends React.Component {
    constructor(props,context){
	  super(props,context);
	  
	  this.state = {
	     events: []
	  }
	  this.handleSearch = this.handleSearch.bind(this);
	  this.handleAdd = this.handleAdd.bind(this);
    }  
    componentDidMount() {
        this.getDataFromApi();
    }
    getDataFromApi() {
        var self = this;
        $.ajax({
            url: '/api/events',
            success: function(data) {
                self.setState({ events: data });
            },
            error: function(xhr,status,error) {
                alert('Cannot get data from API: ', error);
            }
        });
    }
    handleSearch(events){
        this.setState({ events: events })
    }
    handleAdd(event){
        var events = this.state.events;
        events.push(event);
        this.setState({ events: events })
    }
    
    render()
    {
        return(
                <div className = "container">
                  <div className = "jumbotron">
                        <h1>React-Rails Event Application </h1>
                  </div>    
                  <div className = "row">
                    <div className="col-md-4">
                      <SearchForm handleSearch={this.handleSearch} />
                    </div>
                    <div className="col-md-8">
                      <NewForm handleAdd={this.handleAdd}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                        <EventTable events={this.state.events}/>
                    </div>
                 </div>
               </div>
            );
    }
}
