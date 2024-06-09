module.exports = {
    config: {
        "api::announcement.announcement": {
            columns: [
                "title",
                "content",
                "timestamp",
            ],
            relation: {},
            locale: "false",
        },
        "api::course-registration-form.course-registration-form": {
            columns: [
                "fullName",
                "dob",
                "job",
                "company",
                "knowledge",
                "goal"
            ],
            relation: {},
            locale: "false",
        },
    },
  };