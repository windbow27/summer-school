<template>
    <div class="hero pages-wrapper"
        style="background-image: url(https://preview.redd.it/y1jqr8m0fv531.jpg?width=2580&format=pjpg&auto=webp&s=2f377181d98a5629682394e29c687679a49bfef1);">
        <div class="hero-content flex-col lg:flex-row">
            <!--side panel-->
            <div class="text-center w-full max-w-xl lg:text-left">
                <h1 class="text-5xl font-bold">Login now!</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>

            <!--login form-->
            <div class="card shrink-0 w-full max-w-lg shadow-2xl bg-gray-950">
                <form class="card-body" @submit.prevent="onSubmit">
                    <!--email-->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input v-model="identifier" type="email" placeholder="email" class="input input-bordered"
                            required />
                    </div>
                    <!--password-->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input v-model="password" type="password" placeholder="password" class="input input-bordered"
                            required />
                        <label class="label">
                            <nuxt-link to="/register" class="label-text-alt link link-hover">
                                Don't have an account? Register.
                            </nuxt-link>
                        </label>
                    </div>
                    <!--login button-->
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <!--error message-->
                    <p class="text-error" :class="{ 'invisible': !showWrongCredentialsError }">
                        Please check your password and account name, then try again.
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getVerificationCode } from '~/utils/utils';
import { useStorage } from '@vueuse/core';
const { login } = useStrapiAuth()
const router = useRouter();
const accountStorage = useStorage('account', { email: '', password: '' });
const codeStorage = useStorage('code', '')
const identifier = ref('');
const password = ref('');
const showWrongCredentialsError = ref(false);

const onSubmit = async () => {
    try {
        const query = gql`
            query {
                usersPermissionsUsers(filters: {email: {eq: "${identifier.value}"}}) {
                    data {
                        id
                        attributes {
                        username
                        email
                        enable2FA
                        course_registration {
                            data {
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
                    }
                }
            }
            `
            const { data } = useAsyncQuery<UserData>(query);
            console.log(data._rawValue.usersPermissionsUsers.data[0].attributes.enable2FA);
        accountStorage.value = { email: identifier.value, password: password.value }; 
        if (data._rawValue.usersPermissionsUsers.data[0].attributes.enable2FA === true) {
            const code = getVerificationCode();
            codeStorage.value = code;
            const response = await fetch('http://localhost:1337/api/verification-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: identifier.value,
                    code: code,
                }),
            });
            router.push('/verification');
        }
        else {
            await login({ identifier: identifier.value, password: password.value });
            router.push('/lessons');
        }
    } catch (e) {
        console.error('An error occurred:', e);
        showWrongCredentialsError.value = true;
        setTimeout(() => {
            showWrongCredentialsError.value = false;
        }, 3000);
    }
};

</script>

<style scoped>
.text-error.invisible {
    visibility: hidden;
}
</style>