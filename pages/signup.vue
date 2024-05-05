<script setup lang="ts">

	useHead({
		title: 'Sign Up',
		meta: [
		{ 
			name: 'description', 
			content: 'Sign Up Nuxt 3, Alvato Platform by E.I.T Consultiong Ltd.' 
		},
		{
			name: 'keywords',
			content: 'Sign Up, Nuxt 3, Alvato Platform by E.I.T Consultiong Ltd.'
		},
		],
	})

	const email = ref('')
	const password = ref('')
	const name = ref('')
    let showPass = ref(false)

    // useFormRules() for email and password
    const {  ruleTextLen, rulePassword, ruleEmail, ruleRequired } = useFormRules()

    	// submit form
	const submit = async () => {
		
		// check form is valid
		if (name.value && email.value && password.value) {

			console.log(name.value, email.value, password.value)

			// redirect to dashboard
			// router.push('/dashboard')
		}
	}
	
</script>

<template>
	<VContainer fluid class="fill-height pa-0">
		<VRow no-gutters align="center" justify="center" class="fill-height">
			
			<VCol class="hidden-sm-and-down fill-height" md="6" lg="6">
				<VImg
					src="https://wallpaper.dog/large/10880172.jpg"
					cover
					class="h-100 rounded-xl rounded-ts-0 rounded-bs-0 d-flex align-center justify-center"
				>
					<div class="text-center w-50 text-white mx-auto">
						<h1 class="mb-4">เริ่มการเดินทางของคุณสมัครสมาชิกที่นี่</h1>
						<p>
							ยินดีต้อนรับสู่ระบบจัดการสินค้า ขอเชิญคุณเข้าสู่ระบบเพื่อสัมผัสประสบการณ์การจัดการสินค้าที่สะดวกรวดเร็วและแม่นยำ เริ่มการทำงานของคุณได้วันนี้ พร้อมกับเรา!
						</p>
					</div>
				</VImg>
			</VCol>

			<VCol cols="12" md="6" lg="6" sm="6">
				<VRow no-gutters align="center" justify="center">
					<VCol cols="12" md="6" class="pa-3">
						<h1>สมัครสมาชิก</h1>
						<p class="text-medium-emphasis">ป้อนข้อมูลพื้นฐานดังนี้</p>

						<VForm @submit.prevent="submit" class="mt-5">
							<div>
								<label class="label text-grey-darken-2" for="name">Name</label>
								<VTextField
									v-model="name"
									type="text"
                                    :rules="[ruleRequired, ruleTextLen]"
									prepend-inner-icon="fluent:person-24-regular"
									id="name"
									name="name"
								/>
							</div>
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="email">Email</label>
								<VTextField
									v-model="email"
									type="email"
                                    :rules="[ruleRequired, ruleEmail]"
									prepend-inner-icon="fluent:mail-24-regular"
									id="email"
									name="email"
								/>
							</div>
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="password">Password</label>
								<VTextField
									v-model="password"
                                    :rules="[ruleRequired, rulePassword]"
									prepend-inner-icon="fluent:password-20-regular"
									id="password"
									name="password"
                                    :type='showPass?"text":"password"'
									counter
								>
                                    <template v-slot:append-inner>
										<v-icon @mouseup.stop @click.prevent.stop="showPass = !showPass"> 
											{{ showPass ? 'quill:eye' : 'quill:eye-closed' }} 
										</v-icon>
									</template>
                                </VTextField>
							</div>
							<div class="mt-5">
								<VBtn type="submit" block min-height="45" class="gradient warn"
									>Create Account</VBtn
								>
							</div>
						</VForm>
						<p class="text-center mt-10">
							<span
								>เป็นสมาชิกอยู่แล้ว ?
								<NuxtLink to="/signin" class="font-weight-bold text-primary">เข้าสู่ระบบ</NuxtLink></span
							>
						</p>
					</VCol>
				</VRow>
			</VCol>

		</VRow>
	</VContainer>
</template>

<style scoped>

</style>