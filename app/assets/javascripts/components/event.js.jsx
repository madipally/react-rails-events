class Event extends React.Component {
    render() {
        var event = this.props.event;
        return(
              <tr>
                <td>{event.name}</td>
                <td>{event.event_date}</td>
                <td>{event.place}</td>
                <td>{event.description}</td>
               </tr>    
            );
    }
}