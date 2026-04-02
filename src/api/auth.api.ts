import { httpClient } from "./http";
import type { SignupProps } from "../pages/Signup";

export const signup = async(userData: SignupProps) => {
    const response = await httpClient.post("/users/signup", userData);
    return response.data;
}