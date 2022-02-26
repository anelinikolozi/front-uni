import React from "react";
import TeacherService from "../service/TeacherService";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: '',
        lastName:'',
        personalNo:'',
        email:'',
        birthDate:'',
        groupId:''};


        this.handleChangef = this.handleChangef.bind(this);
        this.handleChangeg=this.handleChangeg.bind(this);
        this.handleChangel=this.handleChangel.bind(this);
        this.handleChangee=this.handleChangee.bind(this);
        this.handleChangeb=this.handleChangeb.bind(this);
        this.handleChangep=this.handleChangep.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangef(event) {
        this.setState({firstName: event.target.firstName});
    }
    handleChangel(event) {        this.setState({lastName: event.target.lastName});
    }
    handleChangep(event) {
        this.setState({personalNo: event.target.personalNo});
    }


    handleSubmit(event) {
        console.log(this.state.firstName);

        TeacherService.postTeachers(this.state);
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }
    handleChangee(event) {
        this.setState({email: event.target.email});
    }
    handleChangeb(event) {
        this.setState({birthDate: event.target.birthDate});
    }
    handleChangeg(event) {
        this.setState({groupId: event.target.groupId});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>


                <label>
                    first name:
                    <input type="text" value={this.state.firstName} onChange={this.handleChangef} />
                </label>
                <label>
                    last name:
                    <input type="text" value={this.state.lastName} onChange={this.handleChangel} />
                </label>
                <label>
                    personal number:
                    <input type="text" value={this.state.personalNo} onChange={this.handleChangep} />
                </label>
                <label>
                    email:
                    <input type="text" value={this.state.email} onChange={this.handleChangee} />
                </label>
                <label>
                    birth date:
                    <input type="text" value={this.state.birthDate} onChange={this.handleChangeb} />
                </label>
                <label>
                    group :
                    <input type="text" value={this.state.groupId} onChange={this.handleChangeg} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default NameForm;