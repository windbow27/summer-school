export const createCourseRegistrationForm = gql`
mutation createCourseRegistrationForm($data: CourseRegistrationFormInput!) {
    createCourseRegistrationForm(data: $data) {
        data {
        id
            attributes {
                fullName
                dob
                job
                company
                knowledge
                goal
            }
        }
    }
}
`