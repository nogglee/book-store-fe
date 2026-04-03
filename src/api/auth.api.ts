import { httpClient } from "./http";
import type { SignupProps } from "../pages/Signup";

export const signup = async(userData: SignupProps) => {
    const response = await httpClient.post("/users/signup", userData);
    return response.data;
}

export const requestPasswordReset = async(data: SignupProps) => {
    const response = await httpClient.post('users/reset', data)
    return response.data;
}

export const passwordReset = async(data: SignupProps) => {
    const response = await httpClient.put('users/reset', data)
    return response.data;
}

interface SigninResponse {
    token: string;
}

export const signin = async(data: SignupProps) => {
    const response = await httpClient.post<SigninResponse>('users/signin', data)
    return response.data;
}
