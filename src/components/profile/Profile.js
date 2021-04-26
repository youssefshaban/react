import React from 'react';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                "id": "1",
                "jobTitleName": "Developer",
                "firstName": "youssef",
                "lastName": "shaban",
                "preferredFullName": "youssef shaban",
                "employeeCode": "A3",
                "region": "EG",
                "phoneNumber": "01018244751",
                "emailAddress": "youssef.shaban.atta@gmail.com"
            }
        }
    }

    render() {
        return (
            Object.entries(this.state.user).map(([key, value]) => {
                return (
                    <ul>
                        <li>{key} : {value}</li>
                    </ul>
                )
            })
        )
    }
}

export default Profile;
