<script setup lang="ts">

	useHead({
		title: 'Sign In',
		meta: [
		{ 
			name: 'description', 
			content: 'Sign In Nuxt 3, Alvato Platform by E.I.T Consultiong Ltd.' 
		},
		{
			name: 'keywords',
			content: 'Sign In, Nuxt 3, Alvato Platform by E.I.T Consultiong Ltd.'
		},
		],
	})

	// ref const for email and password
	const email = ref('')
	const password = ref('')
	let showPass = ref(false)

	// useFormRules() for email and password
	const {  rulePassword, ruleEmail, ruleRequired } = useFormRules()

	// useRoute() for redirect
	const router = useRouter()

	// submit form
	const submit = async () => {
		
		// check form is valid
		if (email.value && password.value) {

			console.log(email.value, password.value)

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
					src="https://wallpaper.dog/large/5557744.jpg"
					cover
					class="h-100  rounded-e-xl  d-flex align-center justify-center"
				>
					<div class="text-center w-50 text-white mx-auto">
						<h1 class="mb-4">ยินดีต้อนรับการกลับมาของคุณ</h1>
						<p>
							ยินดีต้อนรับสู่ระบบจัดการสินค้า ขอเชิญคุณเข้าสู่ระบบเพื่อสัมผัสประสบการณ์การจัดการสินค้าที่สะดวกรวดเร็วและแม่นยำ เริ่มการทำงานของคุณได้วันนี้ พร้อมกับเรา!
						</p>
					</div>
				</VImg>
			</VCol>
			<VCol cols="12" md="6" lg="6" sm="6">
				<VRow no-gutters align="center" justify="center">
					<VCol cols="12" md="6" class="pa-2">
						<h1>เข้าสู่ระบบ</h1>
						<p class="text-medium-emphasis">ป้อนอีเมล์และรหัสผ่านสำหรับเข้าใช้งาน</p>

						<VForm @submit.prevent="submit" class="mt-5">
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="email">Email</label>
								<VTextField
									v-model="email"
									:rules="[ruleRequired, ruleEmail]"
									prepend-inner-icon="fluent:mail-20-regular"
									id="email"
									name="email"
									type="email"
									
								/>
							</div>
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="password">Password</label>
								<VTextField
									v-model="password"
									:rules="[ruleRequired, rulePassword]"
									prepend-inner-icon="ph:lock-key"
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
								<VBtn 
									type="submit" 
									block min-height="44" 
									class="gradient primary"
									rounded="pill"
									>Sign In</VBtn>
							</div>
						</VForm>
						<p class="text-center mt-10">
							<span
								>ยังไม่ได้เป็นสมาชิก ?
								<NuxtLink to="/signup" class="font-weight-bold text-primary"
									>ลงทะเบียนที่นี่</NuxtLink
								></span
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