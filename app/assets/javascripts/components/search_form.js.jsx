class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value})
    }
    
    handleSearch(event)
    {
        var query = this.state.value;
        var self = this;
        $.ajax({
            url: 'api/events/search',
            data: {query: query},
            success: function(data){
                console.log(JSON.stringify(data))
                self.props.handleSearch(data);
                },
            error: function(xhr,status,error){
                alert('Search Error: ', status,xhr,error)
            }
        });
        event.preventDefault();
    }
    render(){
        return(
              <input onChange={this.handleChange}
                     onBlur={this.handleSearch}
                     type = "text"
                     className="form-control"
                     placeholder="Type search phrase here..."
                     value={this.state.value} />
            );
    }
}