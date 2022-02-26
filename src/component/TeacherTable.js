import React from "react";



import TeacherService from "../service/TeacherService";


class TeacherTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            teacher:[],

        }
    }
    componentDidMount() {
        TeacherService.getTeachers().then((response)=>{
            this.setState({ teacher: response.data})
        });
    }
    render() {
        return (
            <div>
                <h1 className= "text-center">Teacher list</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>first name</td>
                        <td>last name</td>
                        <td>personal number</td>
                        <td>email</td>
                        <td>birth date</td>
                        <td>group id</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.teacher.map(
                            teacher=>
                                <tr key={teacher.id}>
                                    <td>{teacher.id}</td>
                                    <td>{teacher.firstName}</td>
                                    <td>{teacher.lastName}</td>
                                    <td>{teacher.personalNo}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.birthDate}</td>
                                    <td>{teacher.groupId}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TeacherTable;