interface UserData {
    usersPermissionsUsers: {
        id: string;
        attributes: {
            username: string;
            email: string;
            enable2FA: boolean;
            course_registration: {
                data: {
                    attributes: {
                        fullName: string;
                        dob: string;
                        job: string;
                        company: string;
                        knowledge: string;
                        goal: string;
                    }
                }
            }
        }
    };
}
