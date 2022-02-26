import axios from "axios";

const Teacher_API='http://localhost:8080/teachers';
class TeacherService {

    getTeachers(){
        return axios.get(Teacher_API);
    }

    postTeachers(ok){
        var id={id:null}
        var helo=Object.assign(id,ok)
        axios.post(Teacher_API,helo)

    }

}
export default new TeacherService();