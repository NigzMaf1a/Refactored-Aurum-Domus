export default class Employees{
    constructor(){
        this.employeesUrl = "/Scriptz/Backend/registration.php";
    }
    async addEmployee(name1, name2, phone, email, password, gender, regtype, location, accStatus = "Approved"){
        try {
            const payload = {
                action: 'create',
                name1,
                name2,
                phone,
                email,
                password,
                gender,
                regtype,
                location,
                accStatus
            };
            const response = await fetch(this.employeesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if(!response.ok) throw new Error('Error adding employee');
            return await response.json();
        } catch(error){
            console.error('Error adding employee', error);
            return [];
        }
    }
    async getEmployees(){
        try {
            const payload = {
                action: 'read'
            };
            const response = await fetch(this.employeesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if(!response.ok) throw new Error('Error getting employees');
            return await response.json();

        } catch(error){
            console.error('', error);
            return [];
        }
    }
    async updateEmployee(regID, name1, name2, phone, email, password, gender, regtype, location, accStatus = "Approved"){
        try {
            const payload = {
                action: 'update',
                regID,
                name1,
                name2,
                phone,
                email,
                password, 
                gender,
                regtype,
                location,
                accStatus
            };
            const response = await fetch(this.employeesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if(!response.ok) throw new Error('Error updating employee');
            return await response.json();

        } catch(error){
            console.error('Error updating employee', error);
            return [];
        }
    }
    async deleteEmployee(regID){
        try {
            const payload = {
                action: 'delete',
                regID
            };
            const response = await fetch(this.employeesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if(!response.ok) throw new Error('Error deleting employee');
            return await response.json();

        } catch(error){
            console.error('Error deleting employee', error);
            return [];
        }
    }
}