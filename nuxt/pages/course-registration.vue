<template>
    <div v-if="!data">
        Loading...
    </div>
    <div v-else class="hero pages-wrapper"
        style="background-image: url(https://preview.redd.it/y1jqr8m0fv531.jpg?width=2580&format=pjpg&auto=webp&s=2f377181d98a5629682394e29c687679a49bfef1);">

        <div class="hero-content flex-col lg:flex-row">
            <!--side panel-->
            <div class="text-center w-full lg:text-left">
                <h1 class="text-5xl font-bold">Course Registraion</h1>
                <p class="py-6">Registration is available from <span class="text-info text-lg">{{ formatDate(data.availabilities.data[0].attributes.start) }}</span> to <span class="text-info text-lg">{{ formatDate(data.availabilities.data[0].attributes.end) }}</span>.</p>
            </div>

            <!--registration form-->
            <div class="card shrink-0 w-full max-w-lg shadow-2xl bg-gray-950">
                <form class="card-body" @submit.prevent="onSubmit()">
                    <!--full name-->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Full Name</span>
                        </label>
                        <input v-model="fullName" type="text" placeholder="Nguyen Van A" class="input input-bordered"
                            required />
                    </div>

                    <!--date of birth-->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Date of Birth</span>
                        </label>
                        <input v-model="dob" type="date" class="input input-bordered" required />
                    </div>

                    <!--current role-->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Current Role</span>
                        </label>
                        <select v-model="job" class="select w-full">
                            <option disabled selected>Current Role</option>
                            <option>Student</option>
                            <option>Undergraduate</option>
                            <option>Worker</option>
                        </select>
                    </div>

                    <!--school/company name-->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">School/Company Name</span>
                        </label>
                        <input v-model="company" type="text" placeholder="UET" class="input input-bordered" required />
                    </div>

                    <!--current knowledge-->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Current Knowledge</span>
                        </label>
                        <select v-model="knowledge" class="select w-full">
                            <option disabled selected>Current Knowledge</option>
                            <option>Novice</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                            <option>Expert</option>
                        </select>
                    </div>

                    <!--goal-->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">What is your goal in attending this course</span>
                        </label>
                        <input v-model="goal" type="text" placeholder="Write something" class="input input-bordered"
                            required />
                    </div>

                    <!--submit button-->
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                    <p class="text-error" :class="{ 'invisible': !showDateError }">
                        Course registration is closed.
                    </p>

                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createCourseRegistrationForm } from '~/apollo/course-registration';

const fullName = ref('');
const dob = ref('');
const job = ref('');
const company = ref('');
const knowledge = ref('');
const goal = ref('');
const router = useRouter();

const showDateError = ref(false);

const { mutate } = useMutation(createCourseRegistrationForm);

const query = gql`
query {
  availabilities {
    data {
      id 
        attributes {
        start
        end
      }
    }
  }
}
`

const { data } = useAsyncQuery<any>(query);

const checkDate = () => {
    if (!data) {
        console.log("No data")
        return false;
    }
    const start = new Date(data.value.availabilities.data[0].attributes.start)
    const end = new Date(data.value.availabilities.data[0].attributes.end)
    const now = new Date()
    if (now < start || now > end) {
        showDateError.value = true
        return true;
    }
    return false;
}

const onSubmit = async () => {
    if (checkDate())
        return
    const data = {
        data: {
            fullName: fullName.value,
            dob: dob.value,
            job: job.value,
            company: company.value,
            knowledge: knowledge.value,
            goal: goal.value,
        }
    }
    mutate(data)
    router.push("/lessons")
}

</script>

<style scoped>
.text-error.invisible {
    visibility: hidden;
}
</style>