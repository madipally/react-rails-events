class NewForm extends React.Component{
    /*propTypes: {
        name: React.PropTypes.string,
        event_date: React.PropTypes.string,
        place: React.PropTypes.string,
        description: React.PropTypes.string
    }*/
    constructor(props){
        super(props);
        this.state = {
            name: '',
            place: '',
            event_date: '',
            description: ''
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    getInitialState(){
        return {
            name: '',
            place: '',
            event_date: '',
            description: ''
        }
    }
    
    handleAdd(e){
        e.preventDefault();
        var self = this;
        if(this.validForm()){
            $.ajax({
                url: '/api/events/',
                method: 'POST',
                data: { event: self.state},
                success: function(data){
                    self.props.handleAdd(data);
                    self.setState(self.getInitialState());
                    alert("Event created successfully!")
                },
                error: function(xhr,status,error){
                    alert('Cannot add new record' + error);
                }
            });
        }
        else{
            alert('Please fill all fields')
        }
    }
    
    validForm(){
        if(this.state.name && this.state.place && this.state.event_date && this.state.description)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    handleChange(e){
        var input_name = e.target.name;
        var value = e.target.value;
        this.setState({ [input_name] : value });
    }
    
    render(){
        return(
             <form className="form-inline" onSubmit= {this.handleAdd}>
               <div className="form-group">
                 <input onChange = { this.handleChange } 
                        type="text"
                        className="form-control"
                        name = "name"
                        placeholder="Enter Name.."
                        value={ this.state.event_name }
                        />
               </div>
               <div className="form-group">
                 <input type="text"
                        className="form-control"
                        name = "place"
                        placeholder="Enter Place.."
                        value={ this.state.place }
                        onChange = { this.handleChange } />
               </div>
               <div className="form-group">
                 <input type="date"
                        className="form-control"
                        name="event_date"
                        placeholder="Enter Date.."
                        value={ this.state.event_date }
                        onChange = { this.handleChange } />
               </div>
               <div className="form-group">
                 <input type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter Description.."
                        value={ this.state.description }
                        onChange = { this.handleChange } />
               </div>
               <input type="submit" className="btn btn-primary"/>
             </form>
            )
    }
}