// Create a custom hook to use form rules

export const useFormRules = () => {
    return {
        ruleRequired: (value: string) => !!value || 'This field is required',
        ruleEmail: (value: string) => {
            const pattern =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return pattern.test(value) || "Enter a valid email";
        },
        ruleTextLen: (value: string) => (!!value && value.length >= 5) || "At lease 5 chars or more",
        rulePassword: (value: string) => {
            const pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/;
			return pattern.test(value) || "8-20 chars, one of (a-z), one of (A-Z), one of (0-9), one special charactor";
        }
    }
}