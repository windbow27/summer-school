<template>
    <div class="hero pages-wrapper"
        style="background-image: url(https://preview.redd.it/y1jqr8m0fv531.jpg?width=2580&format=pjpg&auto=webp&s=2f377181d98a5629682394e29c687679a49bfef1);">
        <div class="hero-content flex-col lg:flex-row">
            <!--side panel-->
            <div class="text-center w-full max-w-xl lg:text-left">
                <h1 class="text-5xl font-bold">2FA Authentication</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div class="card shrink-0 w-full max-w-lg shadow-2xl bg-gray-950">
                <form class="card-body" @submit.prevent="onSubmit">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Authentication code</span>
                        </label>
                        <input v-model="code" type="text" placeholder="XXXXXX" class="input input-bordered"
                            required />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Verify</button>
                    </div>
                    <div>
                        <p class="text-lelft mt-6">
                            <a href="https://mail.google.com" target="_blank">Check your email for verification code</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core';
const { login } = useStrapiAuth()
const router = useRouter()
const code = ref('')
const accountStorage = useStorage('account', { email: '', password: '' });
const codeStorage = useStorage('code', '')

const onSubmit = async () => {
    try {
        const { email, password } = accountStorage.value
        const verificationCode = codeStorage.value
        console.log(email, password, verificationCode)
        if (verificationCode === code.value) {
            await login({ 
                identifier: email, 
                password: password
            })
            router.push('/lesson')
        } else {
            console.log('Invalid code')
        }
    } catch (e) { 
        console.error('An error occurred:', e)
    }
}
</script>